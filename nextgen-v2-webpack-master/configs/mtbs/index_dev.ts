import { Config } from '../../src/Config';

// Project-specific dependencies
import '../../vendor/ext/4.2.1/ext-theme-neptune';

// Project-specific stylesheets.
import '../../assets/css/styles-mtbs-override.css';

// Project-specific config files.
import { layers } from './layers';
import { projections } from './projections';
import { regions } from './regions';
import { template } from './template';

export default new Config()
  .addSources({
    layers,
    projections,
    regions,
    template,
    serviceCheck: 'https://earlywarning.usgs.gov/api/rest/service-check/geoserver,mysql,pgsql',
  })
  .debug();
