export const layers = {
  additional: [
  ],

  hidden: [
  ],

  overlays: [
    {
      type: 'folder',
      title: 'Dataset',
      expanded: true,
      folder: [
        /*
         * Africa
         */
        {
          type: 'folder',
          title: 'RFE2',
          description:
            'RFE2 is a merged satellite-gauge rainfall product produced by <a  target="_blank" href="https://www.cpc.ncep.noaa.gov/products/international/">NOAA&apos;s Climate Prediction Center</a>. EWX aquires African dekadal data at 0.1 x 0.1 degree spatial resolution via ftp. See the RFE2 readme file for more details.',
          expanded: false,
          regionId: 'af',
          folder: [
            {
              type: 'folder',
              title: 'Data',
              expanded: true,
              folder: [
                {
                  type: 'layer',
                  id: 'rfe2AfricaData1Monthly',
                  isWMST: true,
                  wmstName: 'EWX_rfe2_africa_1_monthly_data:rfe2_africa_1_monthly_mm_data',
                  title: 'Monthly',
                  source: {
                    wms: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wms?',
                    wcs: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wcs?',
                    gwc: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/gwc/service/wms?',
                  },
                  loadOnly: false,
                  display: false,
                  mask: false,
                  zIndex: 0,
                  transparency: true,
                  srs: 'EPSG:4326',
                  resolution: '0.1',
                  featureInfo: {
                    GRAY_INDEX: {
                      displayName: 'Pixel Value',
                      displayValue: null,
                      value: null,
                      mapValues: [],
                      significantDigits: 6,
                    },
                  },
                  style: 'precip_monthly_data_raster',
                  legend: {
                    style: 'precip_monthly_data_raster',
                    customImageURL: null,
                    title: 'RFE2 Monthly Data (mm)',
                  },
                  unit: 'mm',
                  additionalAttributes: {
                    statistic: 'data',
                    rasterDataset: 'rfe2_africa_month_data',
                    chartYAxisLabel: 'Rainfall (mm)',
                  },
                  timeseries: {
                    type: 'month',
                    source: 'https://chc-ewx3.chc.ucsb.edu/api/rest/version/5.0/config',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  boundaries: [
    {
      type: 'folder',
      title: 'Boundaries',
      expanded: true,
      regionId: 'af',
      folder: [
        {
          type: 'layer',
          id: 'africaAdmin0',
          name: 'EWX_shapefile_g2008_af_1:shapefile_g2008_af_1',
          title: 'Countries',
          description: '',
          source: {
            wms: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wms?',
            gwc: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/gwc/service/wms?',
          },
          loadOnly: false,
          display: true,
          mask: false,
          zIndex: 0,
          srs: 'EPSG:4326',
          featureInfo: {
            ADM0_CODE: {
              displayName: 'ADM0_CODE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            ADM0_NAME: {
              displayName: 'ADM0_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            POLY_NAME: {
              displayName: 'POLY_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'GAUL_2008_0',
          // legend: {
          //   style: 'fews_admin_0_ngviewer',
          //   customImageURL: null,
          //   title: 'Legend Title Here',
          // },
        },
      ],
    },

    {
      type: 'folder',
      title: 'Boundaries',
      expanded: true,
      regionId: 'gb',
      folder: [
        {
          type: 'layer',
          id: 'globalAdmin0',
          name: 'fews_g2008_0:g2008_0',
          title: 'Countries',
          description: '',
          source: {
            wms: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wms?',
            gwc: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/gwc/service/wms?',
          },
          loadOnly: false,
          display: true,
          mask: false,
          zIndex: 0,
          srs: 'EPSG:4326',
          featureInfo: {
            ADM0_CODE: {
              displayName: 'ADM0_CODE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            ADM0_NAME: {
              displayName: 'ADM0_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            POLY_NAME: {
              displayName: 'POLY_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'fews_admin_0_ngviewer',
          // legend: {
          //   style: 'fews_admin_0_ngviewer',
          //   customImageURL: null,
          //   title: 'Legend Title Here',
          // },
        },
        {
          type: 'layer',
          id: 'globalAdmin1',
          name: 'fews_g2008_1:g2008_1',
          title: 'Admin 1',
          description: '',
          source: {
            wms: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wms?',
            gwc: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/gwc/service/wms?',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          srs: 'EPSG:4326',
          featureInfo: {
            ADM1_CODE: {
              displayName: 'ADM1_CODE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            ADM1_NAME: {
              displayName: 'ADM1_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            POLY_NAME: {
              displayName: 'POLY_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'fews_admin_1_ngviewer',
          // legend: {
          //   style: 'fews_admin_1_ngviewer',
          //   customImageURL: null,
          //   title: 'Legend Title Here',
          // },
        },
        {
          type: 'layer',
          id: 'globalAdmin2',
          name: 'fews_g2008_2:g2008_2',
          title: 'Admin 2',
          description: '',
          source: {
            wms: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/wms?',
            gwc: 'https://chc-ewx3.chc.ucsb.edu:8443/geoserver/gwc/service/wms?',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          srs: 'EPSG:4326',
          featureInfo: {
            ADM2_CODE: {
              displayName: 'ADM2_CODE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            ADM1_NAME: {
              displayName: 'ADM2_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            ADM1_CODE: {
              displayName: 'ADM1_CODE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            POLY_NAME: {
              displayName: 'POLY_NAME',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'fews_admin_2_ngviewer',
          // legend: {
          //   style: 'fews_admin_2_ngviewer',
          //   customImageURL: null,
          //   title: 'Legend Title Here',
          // },
        },
      ],
    },

  ],

  baselayers: [
    {
      type: 'folder',
      title: 'Base Layers',
      expanded: true,
      folder: [
        {
          type: 'layer',
          name: 'osm_0',
          title: 'Standard OpenStreetMap',
          description: '',
          loadOnly: false,
          display: true,
          mask: false,
          srs: 'EPSG:3857',
          loaded: 'true',
          brand: 'osm',
          source: {
            url: 'https://osm-{1-4}.gs.mil/tiles/default/{z}/{x}/{y}.png',
          },
          comments: '',
        },
      ],
    },
  ],
};

