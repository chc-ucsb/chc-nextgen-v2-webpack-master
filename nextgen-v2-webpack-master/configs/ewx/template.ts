import logoLeft from '../../assets/images/fewsusgs1.jpg';
import logoRight from '../../assets/images/fewsnet.png';

export const template = {
  theme: 'ExtJSNeptune',
  cssFallback: true,
  analytics: {
    matomo: {
      baseUrl: '//edcintl.cr.usgs.gov/piwik/',
      id: '5',
    },
    google: {
      id: 'UA-20242140-4',
    },
  },
  externalServices: {
    failedMessage: 'Failed to load external services. Please try again later.',
    addNewFolder: false,
  },
  blocks: [
    {
      block: 'top',
      name: 'cHeader',
      import: 'js.tools.shared.cHeader.cHeader',
      add: true,
      width: 'auto',
      height: 65,
      cssClass: '',
      bodyStyle: 'padding: 10px',
      collapsible: true,
      content: `<div id='header-logo-left'><img src='${logoLeft}'></div><div id='header-logo-right'><img src='${logoRight}'></div><h1 class='main'>EWX Next Generation Viewer</h1>`,
      link: 'http://earlywarning.usgs.gov',
      toolbar: {
        position: 'bottom',
        add: false,
        style: 'background-color: white;',
        overflowMenu: false,
        items: [
          {
            name: 'cExternalLinkButtonTool',
            add: false,
            import: 'js.tools.shared.cExternalLinkButtonTool.cExternalLinkButtonTool',
            url: 'http://vegdri.cr.usgs.gov',
            tooltip: 'Monitoring Drought - Home',
            icon: 'fa-home',
            width: 30,
          },
        ],
      },
    },
    {
      block: 'left',
      name: 'cTOCDesktopLike',
      import: 'js.tools.shared.cTOCDesktopLike.cTOCDesktopLike',
      add: false,
      width: 370,
      height: 'auto',
      title: 'TOC',
      blocks: [
        {
          block: 'top',
          name: 'cTocContainer',
          import: 'js.tools.shared.cTocContainer.cTocContainer',
          width: '100%',
          height: 'auto',
          add: true,
          blocks: [
            {
              name: 'cDefaultToc',
              import: 'js.tools.shared.cDefaultToc.cDefaultToc',
              add: true,
              width: '100%',
              height: 'auto',
              titleLength: 20,
            },
          ],
        },
        {
          name: 'cTransparency',
          import: 'js.tools.shared.cTransparency.cTransparency',
          add: true,
          height: 100,
          width: '90%',
        },
      ],
      toolbar: {
        position: 'top',
        overflowMenu: false,
        items: [
          {
            name: 'cRegionTool',
            import: 'js.tools.shared.cRegionTool.cRegionTool',
            add: true,
            width: 200,
          },
        ],
      },
    },
    {
      block: 'left',
      name: 'cToc',
      import: 'js.tools.shared.cToc.cToc',
      add: true,
      width: 400,
      height: 'auto',
      title: 'TOC',
      collapsible: true,
      blocks: [
        {
          block: 'center',
          name: 'cTocTabPanel',
          import: 'js.tools.shared.cTocTabPanel.cTocTabPanel',
          add: true,
          blocks: [
            {
              add: true,
              title: 'Contents',
              name: 'cTocContentsTab',
              import: 'js.tools.shared.cTocContentsTab.cTocContentsTab',
              tooltip: 'View Contents',
              blocks: [
                {
                  block: 'center',
                  add: true,
                  width: '100%',
                  height: '40%',
                  title: 'Dataset',
                  name: 'cTocContainer',
                  import: 'js.tools.shared.cTocContainer.cTocContainer',
                  blocks: [
                    {
                      block: 'center',
                      name: 'cDatasetToc',
                      import: 'js.tools.shared.cDatasetToc.cDatasetToc',
                      add: true,
                      toolbar: {
                        position: 'top',
                        overflowMenu: false,
                        items: [
                          {
                            name: 'cRegionTool',
                            import: 'js.tools.shared.cRegionTool.cRegionTool',
                            add: true,
                            width: 200,
                            sort: 'asc',
                          },
                        ],
                      },
                    },
                  ],
                },
                {
                  block: 'bottom',
                  add: true,
                  width: '100%',
                  height: '60%',
                  title: 'Layers',
                  name: 'cTocContainer',
                  import: 'js.tools.shared.cTocContainer.cTocContainer',
                  blocks: [
                    {
                      block: 'center',
                      name: 'cLayersToc',
                      import: 'js.tools.shared.cLayersToc.cLayersToc',
                      add: true,
                      toolbar: {
                        position: 'top',
                        overflowMenu: false,
                        items: [
                          {
                            name: 'cAddWMSLayerTool',
                            import: 'js.tools.shared.cAddWMSLayerTool.cAddWMSLayerTool',
                            add: true,
                            tooltip: 'Add WMS Layer',
                          },
                          {
                            name: 'cRemoveWMSLayerTool',
                            import: 'js.tools.shared.cRemoveWMSLayerTool.cRemoveWMSLayerTool',
                            add: true,
                            tooltip: 'Remove WMS Layer',
                          },
                        ],
                      },
                    },
                    {
                      name: 'cTransparency',
                      import: 'js.tools.shared.cTransparency.cTransparency',
                      add: true,
                      width: '90%',
                      height: '5%',
                      fieldLabel: 'Transparency (Highlighted Layer)',
                    },
                  ],
                },
              ],
            },
            {
              add: true,
              title: 'Legend',
              name: 'cTocLegendTab',
              import: 'js.tools.shared.cTocLegendTab.cTocLegendTab',
              tooltip: 'View Legend',
            },
          ],
        },
      ],
    },
    {
      block: 'center',
      blocks: [
        {
          block: 'relative',
          name: 'cAddWMSLayerForm',
          import: 'js.tools.shared.cAddWMSLayerForm.cAddWMSLayerForm',
          add: true,
          width: 350,
          height: 105,
          x: 390,
          y: 550,
          title: 'Add WMS Layers',
        },
        {
          block: 'relative',
          name: 'cRemoveWMSLayerForm',
          import: 'js.tools.shared.cRemoveWMSLayerForm.cRemoveWMSLayerForm',
          add: true,
          width: 350,
          height: 105,
          x: 390,
          y: 550,
          title: 'Remove WMS Layers',
        },
        {
          block: 'relative',
          name: 'cMapWindow',
          import: 'js.tools.shared.cMapWindow.cMapWindow',
          add: true,
          width: 580,
          height: 650,
          x: 410,
          y: 90,
          collapsible: true,
          blocks: [
            // We add the Ol-Ext tools here and reference them below in MapPanel when describing the layout
            {
              name: 'cZoomToRegionTool_olext',
              import: 'js.tools.shared.cZoomToRegionTool.cZoomToRegionTool_olext',
              add: true,
            },
            {
              name: 'cExtentDragBoxTool_olext',
              import: 'js.tools.shared.cExtentDragBoxTool.cExtentDragBoxTool_olext',
              add: true,
            },
            {
              name: 'cPanTool_olext',
              import: 'js.tools.shared.cPanTool.cPanTool_olext',
              add: true,
            },
            {
              name: 'cRevertExtentTool_olext',
              import: 'js.tools.shared.cRevertExtentTool.cRevertExtentTool_olext',
              add: true,
            },
            {
              name: 'cIdentifyTool_olext',
              import: 'js.tools.shared.cIdentifyTool.cIdentifyTool_olext',
              add: true,
            },

            {
              name: 'cGraphTool',
              title: '',
              add: true,
              import: 'js.tools.shared.cGraphTool.cGraphTool',
              cssClass: '',
              pressed: false,
              tooltip: 'Graph Tool',
              layers: [
                {
                  id: 'africaAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'africaAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'africaCropzones',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'africaFNMU',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'eastAfricaAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'eastAfricaAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'eastAfricaCropzones',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'eastAfricaFNMU',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'camcarAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'camcarAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'camcarCropzonesLoadOnly',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'camcarFNMU',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'afghanBasins',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meIraqBasins',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaPakistanBasins',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAfghanDam',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAfghanIr',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAfghanRf',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaAfghanRg',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaTajikistanBasins',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'casiaFNMU',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'yemenCropzones',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'yemenAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meIraqGaugeBasinsKadaheyeh',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meIraqGaugeBasinsKeban',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meIraqGaugeBasinsMosul',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'meFNMU',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'saAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'saAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'cipAdmin1',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
                {
                  id: 'cipAdmin2',
                  featureInfo: [
                    {
                      propertyName: 'POLY_NAME',
                      type: 'display',
                    },
                  ],
                },
              ],
              olExt: true,
            },

            {
              name: 'cDataDownloadBtn',
              add: true,
              import: 'js.tools.shared.cDataDownloadBtn.cDataDownloadBtn',
              tooltip: 'Data Download Tool',
              olExt: true,
            },

            {
              name: 'cDatePickerTool_olext',
              import: 'js.tools.shared.cDatePickerTool.cDatePickerTool_olext',
              add: true,
            },
            {
              name: 'cDatasetExplorerTool_olext',
              import: 'js.tools.shared.cDatasetExplorerTool.cDatasetExplorerTool_olext',
              add: true,
            },
            {
              name: 'cMapLegend_olext',
              import: 'js.tools.shared.cMapLegend.cMapLegend_olext',
              add: true,
            },
            {
              name: 'cMapDownloadsTool_olext',
              import: 'js.tools.shared.cMapDownloadsTool.cMapDownloadsTool_olext',
              add: true,
            },
            {
              block: 'top',
              name: 'cMapPanel',
              import: 'js.tools.shared.cMapPanel.cMapPanel',
              add: true,
              interactions: ['zoom'],
              controls: [
                {
                  name: 'toolbar',
                  position: 'top',
                  controls: [
                    {
                      name: 'notification',
                      options: {
                        // header: '',
                        // width: '18em',
                        active: true,
                        className: 'datePopup',
                      },
                      controls: ['dataset-explorer', 'date-picker'],
                    },
                    {
                      name: 'toolbar',
                      position: 'top',
                      options: {
                        toggleOne: true,
                        group: true,
                      },
                      controls: ['pan', 'drag-zoom'],
                    },
                    'zoom-to-region',
                    'revert-extent',
                    {
                      name: 'toolbar',
                      position: 'top',
                      options: {
                        toggleOne: true,
                        group: true,
                      },
                      controls: ['chart', 'identify', 'download-tool'],
                    },
                    {
                      name: 'download',
                      position: 'top',
                      controls: [
                        {
                          type: 'wms',
                          text: 'Layers in display (PNG)',
                          format: 'image/png',
                          layersInDisplay: true,
                        },
                        {
                          type: 'wms',
                          text: 'Layers in display (TIFF)',
                          format: 'image/geotiff',
                          layersInDisplay: false,
                        },
                        {
                          type: 'wcs',
                          text: 'Geotiff (RAW)',
                          format: 'image/geotiff',
                        },
                      ],
                    },
                    {},
                  ],
                },
                'legend',
                // {
                //   name: 'overlay',
                //   options: {
                //     header: '',
                //     width: '18em',
                //   },
                //   controls: ['dataset-explorer'],
                // },
              ],
              mouseCoordinates: {
                show: true,
                projection: 'EPSG:4326',
              },
              blocks: [
                // {
                //   name: 'cMapLegend',
                //   block: 'relative',
                //   import: 'js.tools.shared.cMapLegend.cMapLegend',
                //   add: true,
                // },
              ],
            },

            {
              block: 'bottom',
              title: 'Historical Zonal Statistics Plot',
              name: 'cMapWindowChartArea',
              add: true,
              import: 'js.tools.shared.cMapWindowChartArea.cMapWindowChartArea',
              collapsible: true,
              blocks: [
                {
                  block: 'center',
                  name: 'cTabPanel',
                  add: true,
                  import: 'js.tools.shared.cTabPanel.cTabPanel',
                  blocks: [
                    {
                      block: 'center',
                      name: 'cChartContainer',
                      import: 'js.tools.shared.cChartContainer.cChartContainer',
                      add: true,
                      isDefault: false,
                      toolbar: {
                        overflowMenu: true,
                        items: [
                          {
                            name: 'cPeriodTypeCombo',
                            import: 'js.tools.shared.cPeriodTypeCombo.cPeriodTypeCombo',
                            title: '',
                            add: true,
                            tooltip: 'Select Period Type',
                            saveSelection: true,
                            width: 75,
                          },
                          {
                            name: 'cYearsCombo',
                            import: 'js.tools.shared.cYearsCombo.cYearsCombo',
                            title: '',
                            add: true,
                            addSelectAllButtons: true,
                            tooltip: 'Select Years',
                            saveSelection: true,
                            showByDefault: {
                              amountSelected: 1,
                              others: [],
                            },
                            width: 120,
                          },
                          {
                            name: 'cZonesCombo',
                            import: 'js.tools.shared.cZonesCombo.cZonesCombo',
                            title: '',
                            add: true,
                            tooltip: 'Select Zone',
                            saveSelection: true,
                            width: 120,
                          },
                          {
                            name: 'cChartTypeCombo',
                            import: 'js.tools.shared.cChartTypeCombo.cChartTypeCombo',
                            title: '',
                            add: true,
                            tooltip: 'Select Chart Type',
                            saveSelection: true,
                            width: 90,
                          },
                          {
                            name: 'cChartDataTruncate',
                            import: 'js.tools.shared.cChartDataTruncate.cChartDataTruncate',
                            add: true,
                            tooltip: 'Set Cumulative Start Date',
                            text: 'Set Start Point',
                          },
                          {
                            name: 'cChartDataTruncateReset',
                            import: 'js.tools.shared.cChartDataTruncateReset.cChartDataTruncateReset',
                            add: true,
                            tooltip: 'Reset Cumulative Start Date',
                            text: 'Reset Start Point',
                          },
                          {
                            name: 'cSpacer',
                            import: 'js.tools.shared.cSpacer.cSpacer',
                            add: true,
                          },
                          {
                            name: 'cDockChart',
                            import: 'js.tools.shared.cDockChart.cDockChart',
                            title: '',
                            add: true,
                            tooltip: 'Dock Window',
                            saveSelection: true,
                            dockedState: 'docked',
                          },
                          {
                            name: 'cChartToolsMenu',
                            import: 'js.tools.shared.cChartToolsMenu.cChartToolsMenu',
                            title: '',
                            height: 24,
                            width: 45,
                            add: true,
                            tooltip: 'Chart Tools',
                            items: [
                              {
                                name: 'cMenuLabel',
                                add: true,
                                label: 'Download:',
                                import: 'js.tools.shared.cMenuLabel.cMenuLabel',
                              },
                              {
                                name: 'cExportPNG',
                                import: 'js.tools.shared.cExportPNG.cExportPNG',
                                title: 'PNG',
                                add: true,
                                cssClass: '',
                                tooltip: 'Save chart as PNG',
                              },
                              {
                                name: 'cExportCSV',
                                import: 'js.tools.shared.cExportCSV.cExportCSV',
                                title: 'CSV',
                                add: true,
                                cssClass: '',
                                tooltip: 'Export data as CSV',
                              },
                            ],
                          },
                          {
                            name: 'cChartLegend',
                            import: 'js.tools.shared.cChartLegend.cChartLegend',
                            title: '',
                            add: true,
                            cssClass: '',
                            tooltip: 'Show Chart Legend',
                            pressed: true,
                            legendPosition: 'bottom',
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          block: 'relative',
          name: 'cChartContainer',
          import: 'js.tools.shared.cChartContainer.cChartContainer',
          isDefault: true,
          add: true,
          width: 850,
          height: 500,
          cssClass: '<should define the top-left position of the chart window>',
          toolbar: {
            overflowMenu: true,
            items: [
              {
                name: 'cPeriodTypeCombo',
                import: 'js.tools.shared.cPeriodTypeCombo.cPeriodTypeCombo',
                title: '',
                add: true,
                tooltip: 'Select Period Type',
                saveSelection: true,
                width: 75,
              },
              {
                name: 'cYearsCombo',
                import: 'js.tools.shared.cYearsCombo.cYearsCombo',
                title: '',
                add: true,
                tooltip: 'Select Years',
                saveSelection: true,
                addSelectAllButtons: true,
                showByDefault: {
                  amountSelected: 2,
                  others: ['stm'],
                },
                width: 120,
              },
              {
                name: 'cZonesCombo',
                import: 'js.tools.shared.cZonesCombo.cZonesCombo',
                title: '',
                add: true,
                tooltip: 'Select Zone',
                saveSelection: true,
                width: 120,
              },
              {
                name: 'cChartTypeCombo',
                import: 'js.tools.shared.cChartTypeCombo.cChartTypeCombo',
                title: '',
                add: true,
                tooltip: 'Select Chart Type',
                saveSelection: true,
                width: 90,
              },
              {
                name: 'cChartDataTruncate',
                import: 'js.tools.shared.cChartDataTruncate.cChartDataTruncate',
                add: true,
                tooltip: 'Set Cumulative Start Date',
                text: 'Set Start Point',
              },
              {
                name: 'cChartDataTruncateReset',
                import: 'js.tools.shared.cChartDataTruncateReset.cChartDataTruncateReset',
                add: true,
                tooltip: 'Reset Cumulative Start Date',
                text: 'Reset Start Point',
              },
              {
                name: 'cSpacer',
                import: 'js.tools.shared.cSpacer.cSpacer',
                add: true,
              },
              {
                name: 'cDockChart',
                import: 'js.tools.shared.cDockChart.cDockChart',
                title: '',
                add: true,
                tooltip: 'Dock Window',
                saveSelection: true,
                dockedState: 'undocked',
              },
              {
                name: 'cChartToolsMenu',
                import: 'js.tools.shared.cChartToolsMenu.cChartToolsMenu',
                title: '',
                height: 24,
                width: 45,
                add: true,
                tooltip: 'Chart Tools',
                items: [
                  {
                    name: 'cMenuLabel',
                    add: true,
                    import: 'js.tools.shared.cMenuLabel.cMenuLabel',
                    label: 'Download:',
                  },
                  {
                    name: 'cExportPNG',
                    import: 'js.tools.shared.cExportPNG.cExportPNG',
                    title: 'PNG',
                    add: true,
                    cssClass: '',
                    tooltip: 'Save chart as PNG',
                  },
                  {
                    name: 'cExportCSV',
                    import: 'js.tools.shared.cExportCSV.cExportCSV',
                    title: 'CSV',
                    add: true,
                    cssClass: '',
                    tooltip: 'Export data as CSV',
                  },
                ],
              },
              {
                name: 'cChartLegend',
                import: 'js.tools.shared.cChartLegend.cChartLegend',
                title: '',
                add: true,
                cssClass: '',
                tooltip: 'Show Chart Legend',
                pressed: true,
                legendPosition: 'bottom',
              },
            ],
          },
        },
      ],
    },
    {
      block: 'right',
      name: 'cTools',
      import: 'js.tools.shared.cTools.cTools',
      add: true,
      width: 250,
      height: 'auto',
      collapsible: true,
      collapsed: true,
      title: 'Tools',
      blocks: [
        {
          name: 'cClipNShip',
          add: false,
          collapsible: true,
          collapsed: true,
          import: 'js.tools.shared.cClipNShip.cClipNShip',
          maxExtentAreaDegrees: 1000,
        },
        {
          name: 'cFeatureInfoPanel',
          import: 'js.tools.shared.cFeatureInfoPanel.cFeatureInfoPanel',
          add: true,
          title: 'Feature Info',
          height: 200,
          width: '100%',
          collapsible: true,
          collapsed: true,
          cssClass: '',
        },
        {
          name: 'cDataDownload',
          add: true,
          collapsible: true,
          collapsed: true,
          import: 'js.tools.ewx.cDataDownload.cDataDownload',
          addQueueLocation: '../downloads/addQueue.php',
          redirectButton: false,
          dateSelection: 'yearCombos',
          shapeFile: 'fews_Viewer_Layers_Extent_20220428:Viewer_Layers_Extent_20220428',
          workspace: 'fews_Viewer_Layers_Extent_20220428',
          geoserver: 'https://ewx3.chc.ucsb.edu:8443/geoserver/wfs?',
          redirectText: `<div class="x-toolbar-text x-toolbar-text-default" id="redirectDownloadText"><b>NOTICE:</b><br> The extent of your download box<br>is too large. (Greater than 450000<br>square km).
          <br><br>Please select a smaller area of<br>interest.</div>`,
          maxArea: 450000,
          noRectangleText:
            'A Rectangle has not been drawn yet. <br><br> To draw one, please select the <br>Data Download tool <i class="fa fa-arrow-circle-o-down"></i><br>in the map window toolbar.',
          noPolygonText:
            'A Polygon has not been drawn yet. <br><br> To draw one, please select the <br>Data Download tool <i class="fa fa-arrow-circle-o-down"></i><br>in the map window toolbar.',
          noGeoJSONText:
            'A GeoJSON has not been added yet. <br><br> To add one, please select the <br>Data Download tool <i class="fa fa-arrow-circle-o-down"></i><br>in the map window toolbar.',
        },
        {
          name: 'cSpatialLocking',
          import: 'js.tools.shared.cSpatialLocking.cSpatialLocking',
          add: true,
          title: 'Spatial Locking Tool',
          height: 250,
          collapsible: true,
          cssClass: '',
        },
        {
          name: 'cArrangeWindows',
          import: 'js.tools.shared.cArrangeWindows.cArrangeWindows',
          add: true,
          title: 'Arrange Windows Tool',
          height: 250,
          collapsible: true,
          cssClass: '',
        },
      ],
    },
  ],
  host: 'earlywarning.usgs.gov',
};

