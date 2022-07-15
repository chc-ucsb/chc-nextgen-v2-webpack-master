import { RCMAPTimeSeries, RCMAPTimeSeriesTrends, Boundaries } from './layerInterface';

import RCMAPCoverLegend from '../../assets/images/shrubland/legends/RCMAP_cover_legend.png';

export function generateRCMAPTimeSeries(values): RCMAPTimeSeries {
  const { id, title, description, name, wmstName, source, rasterDataset, geoengine, display = false, loadOnly = false } = values;
  let featureInfo;
  if (!loadOnly) {
    featureInfo = {
      PALETTE_INDEX: {
        displayName: 'Pixel Value',
        displayValue: null,
        value: null,
        mapValues: [],
      },
    };
  }
  return {
    type: 'folder',
    title,
    expanded: true,
    regionId: 'us',
    description,
    folder: [
      {
        type: 'layer',
        id,
        name,
        isWMST: true,
        wmstName,
        currentGranuleName: '',
        title: '',
        source,
        resolution: '0.05',
        pixelWidth: '3400',
        pixelHeight: '2000',
        loadOnly,
        display,
        active: display,
        mask: false,
        zIndex: 1,
        transparency: true,
        srs: 'EPSG:3857',
        wcsOutputSRS: 'EPSG:3857',
        featureInfo,
        style: '',
        legend: {
          customImageURL: RCMAPCoverLegend,
          title,
        },
        additionalAttributes: {
          format: 'yyyy',
          statistic: 'data',
          rasterDataset,
        },
        timeseries: {
          type: 'year',
          format: 'f1',
          source: geoengine,
          start: {
            period: `shrubland.${rasterDataset}.start.day`,
            month: '',
            year: `shrubland.${rasterDataset}.start.year`,
          },
          end: {
            period: `shrubland.${rasterDataset}.end.day`,
            month: '',
            year: `shrubland.${rasterDataset}.end.year`,
          },
        },
      },
    ],
  };
}

export function generateRCMAPTimeSeriesTrendLayer(values): RCMAPTimeSeriesTrends {
  const { title, name, source, customImageURL, index = 'GRAY_INDEX' } = values;
  return {
    type: 'folder',
    title,
    expanded: false,
    folder: [
      {
        type: 'layer',
        isWMST: false,
        name,
        title: '',
        source,
        loadOnly: false,
        display: false,
        mask: false,
        transparency: true,
        srs: 'EPSG:3857',
        featureInfo: {
          [index]: {
            displayName: 'Pixel Value',
            displayValue: null,
            value: null,
            mapValues: [],
          },
        },
        legend: {
          customImageURL,
          title,
        },
      },
    ],
  };
}

export function generateBoundary(values): Boundaries {
  const { id, title, name, source, loadOnly = false, includeManager = false } = values;
  let featureInfo = {};
  if (includeManager) {
    featureInfo = {
      POLY_NAME: {
        displayName: 'POLY_NAME',
        displayValue: null,
        value: null,
        mapValues: [],
      },
      Manager: {
        displayName: 'Manager',
        displayValue: null,
        value: null,
        mapValues: [],
      },
    };
  } else {
    featureInfo = {
      POLY_NAME: {
        displayName: 'POLY_NAME',
        displayValue: null,
        value: null,
        mapValues: [],
      },
    };
  }
  return {
    type: 'layer',
    id,
    name,
    title,
    source,
    featureInfo,
    loadOnly,
    display: false,
    mask: false,
    srs: 'EPSG:3857',
  };
}
