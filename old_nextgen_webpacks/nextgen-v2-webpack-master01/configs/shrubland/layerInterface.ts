// WARNING: Changes to this file do not always take effect when server is watching for changes to rebuild automatically

export interface RCMAPTimeSeries {
  type: string;
  title: string;
  expanded: boolean;
  regionId: string;
  description: string;
  folder: [
    {
      type: string;
      id: string;
      name: string;
      isWMST: boolean;
      wmstName: string;
      currentGranuleName: string;
      title: string;
      source: {
        wms: string;
        wcs: string;
        gwc: string;
      };
      resolution: string;
      pixelWidth: string;
      pixelHeight: string;
      loadOnly: boolean;
      display: boolean;
      active: boolean;
      mask: boolean;
      zIndex: number;
      transparency: boolean;
      srs: string;
      wcsOutputSRS: string;
      featureInfo: object;
      style: string;
      legend: {
        customImageURL: string;
        title: string;
      };
      additionalAttributes: {
        format: string;
        statistic: string;
        rasterDataset: string;
      };
      timeseries: {
        type: string;
        format: string;
        source: string;
        start: {
          period: string;
          month: string;
          year: string;
        };
        end: {
          period: string;
          month: string;
          year: string;
        };
      };
    }
  ];
}

export interface RCMAPTimeSeriesTrends {
  type: string;
  title: string;
  expanded: boolean;
  folder: [
    {
      type: string;
      isWMST: boolean;
      name: string;
      title: string;
      source: {
        wms: string;
        wcs: string;
        wfs: string;
      };
      loadOnly: boolean;
      display: boolean;
      mask: boolean;
      transparency: boolean;
      srs: string;
      featureInfo: object;
      legend: {
        customImageURL: string;
        title: string;
      };
    }
  ];
}

export interface Boundaries {
  type: string;
  id: string;
  name: string;
  title: string;
  source: {
    wms: string;
    wfs: string;
  };
  featureInfo: object;
  loadOnly: boolean;
  display: boolean;
  mask: boolean;
  srs: string;
}
