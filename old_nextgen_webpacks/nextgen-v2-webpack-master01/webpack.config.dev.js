const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NoModulePlugin = require('webpack-nomodule-plugin').WebpackNoModulePlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { NormalModuleReplacementPlugin } = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackGtagPlugin = require('./scripts/WebpackGtagPlugin');
const WebpackMatomoPlugin = require('./scripts/WebpackMatomoPlugin');
const buildTools = require('./scripts/buildTools');
const webpackHelpers = require('./scripts/webpackHelpers');

module.exports = async (args) => {
  const { projectName, projectDir } = args;

  await buildTools.run(projectDir);

  return {
    mode: 'development',
    context: __dirname, // to automatically find tsconfig.json
    entry: {
      main: path.resolve(__dirname, 'index.ts'),
      polyfills: ['core-js', 'whatwg-fetch'],
    },

    // Where Webpack will output its files.
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist', projectDir),
    },

    // Dev server options.
    devtool: 'source-map',
    devServer: {
      clientLogLevel: 'warning',
      open: true,
      watchOptions: {
        ignored: /node_modules/,
      },
    },

    // Webpack resolver for where to look for files when importing.
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: ['node_modules'],
    },

    // "Loaders" -- Rules regarding how to handle various file types when importing.
    // Loaders are executed in order from the bottom -> up, transforming the file with each step.
    module: {
      rules: [
        // Transpile any imported .ts files with the TypeScript compiler.
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/, /vendor/],
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,

                // // Override the tsconfig.json to target to modern browsers.
                // // Prevents transpilation of async/await to generators for easier debugging.
                // compilerOptions: {
                //   target: 'es2019',
                // },
              },
            },
          ],
        },

        /**
         * When these scripts are imported, do it without using 'strict mode'.
         * ExtJS requires this because Webpack bundles everything using 'strict-mode',
         * and 'strict-mode' breaks ExtJS because it makes extensive use of a function's `caller` and `arguments`
         * properties. This also applies to `ext-theme-neptune.js`. eg. using `callParent()` to initialize a component.
         */
        {
          test: [/ext-all\.js/, /ext-theme-neptune\.js/],
          use: [
            {
              loader: 'script-loader',
              options: {
                useStrict: false,
              },
            },
          ],
        },

        // Load the CSS files and extract all the assets.
        // Then, replace the file paths in the CSS with the paths to the newly extracted assets.
        // Finally, inject the generated stylesheet into the DOM using a link tag:
        // <link rel = "stylesheet" href="<stylesheet path>">
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },

        // Load images with the extensions '.png', '.jpg', '.jpeg', '.gif'.
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          loader: 'file-loader',
        },

        // Load fonts with the extensions '.woff', '.woff2', '.eot', '.ttf' and '.otf'.
        // For MapSkin and FontAwesome
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: 'file-loader',
        },
      ],
    },

    plugins: [
      // Clear the `dist/` folder prior to executing.
      new CleanWebpackPlugin(),

      // Dynamically replace the path for an import statement
      new NormalModuleReplacementPlugin(/(.*)\/configs\/PROJECT_NAME/, function (resource) {
        // Support having an `index_dev.ts` file along with the `index.ts` file for easier deployment to the dev and prod servers.
        // The deployer now doesn't have to remember to change development settings to production before building.
        try {
          // Check if the `index_dev.ts` file exists. If it doesn't use the `index.ts` file instead.
          if (fs.existsSync(`./configs/${projectDir}/index_dev.ts`)) {
            resource.request = resource.request.replace(/PROJECT_NAME/, `${projectDir}/index_dev`);
          } else {
            resource.request = resource.request.replace(/PROJECT_NAME/, projectDir);
          }
        } catch (err) {
          console.error(err);
        }
      }),
      new NormalModuleReplacementPlugin(/PROJECT_EXTJS_THEME/, function (resource) {
        resource.request = resource.request.replace(/PROJECT_EXTJS_THEME/, webpackHelpers.getThemePath(projectName));
      }),

      // Build an index.html file
      new HtmlWebpackPlugin({
        inject: true,
        title: webpackHelpers.getHTMLTitle(projectName),
        meta: {
          'Content-Type': {
            'http-equiv': 'Content-Type',
            content: 'text/html; charset=utf-8',
          },
          'X-UA-Compatible': {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge',
          },
        },
        templateContent: ({ htmlWebpackPlugin }) => `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <title>${htmlWebpackPlugin.options.title}</title>
            </head>
            <body></body>
          </html>
        `,
      }),

      // Set up Google Analytics
      (() => {
        const analytics = buildTools.hasAnalytics(projectDir);
        if (analytics && analytics.google) {
          return new WebpackGtagPlugin(analytics.google);
        }
        return () => null;
      })(),

      // Set up Matomo Analytics
      (() => {
        const analytics = buildTools.hasAnalytics(projectDir);
        if (analytics && analytics.matomo) {
          return new WebpackMatomoPlugin(analytics.matomo);
        }
        return () => null;
      })(),


      // Insert the polyfills using the `nomodule` script tag.
      // Only gets downloaded and ran on IE.
      new NoModulePlugin({
        filePatterns: ['polyfills.**.js', '*.polyfills.**.js'],
      }),

      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),

      /**
       * Copy assets from the project folder structure into another structure for distribution.
       * Just like with the Favicon plugin above, we only want to include AmCharts assets if the project uses charts.
       * Since amcharts requests its assets itself rather than them being user-defined, we have to recreate the paths
       * it expects in the output folder
       */
      (() => {
        if (buildTools.hasCharts(projectDir)) {
          return new CopyPlugin({
            patterns: [
              {
                from: 'node_modules/amcharts3/amcharts/images/',
                to: 'amcharts/images/',
              },
              {
                from: 'node_modules/amcharts3/amcharts/plugins/',
                to: 'amcharts/plugins/',
              },
            ],
          });
        }
        return () => null;
      })(),

      // Copy the PHP proxy to the index of the output folder
      new CopyPlugin({
        patterns: [
          {
            from: 'proxy/',
            to: '.',
          },
        ],
      }),

      // Copy the maintenance json file to the index of the output folder
      new CopyPlugin({
        patterns: [
          {
            from: 'json/',
            to: '.',
          },
        ],
      }),

      // Speed up the TypeScript type checker and linter by running in a separate process.
      new ForkTsCheckerWebpackPlugin(),

      // Notification that pops up on the screen when our build fails.
      // The browser won't display any error messages on the screen, just the console. So instead of staring
      // at a blank screen thinking that you're just waiting for the build to complete when
      // Useful so that you don't have to switch back to the IDE to
      // check for error messages when the browser window doesn't load anything.
      new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true, skipFirstNotification: true }),
    ],
  };
};
