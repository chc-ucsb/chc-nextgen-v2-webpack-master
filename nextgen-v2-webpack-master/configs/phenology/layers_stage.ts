export const layers = {
  overlays: [
    {
      type: 'folder',
      title: 'Dataset',
      expanded: true,
      folder: [
        {
          type: 'folder',
          title: 'AMP',
          description: 'Amplitude: Difference between MAXN and SOSN',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologyamp:phenologyamp_phenologyusstates_1-day-365-{{year}}_mm_data',
              title: '',
              isWMST: true,
              wmstName: 'phenology_amp_conus_year_data:amp_conus_year_data',
              description: 'Amplitude: Difference between MAXN and SOSN',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_amp',
              legend: {
                style: 'phenology_amp_legend',
                customImageURL: null,
                title: 'Amplitude',
                panelTitle: 'AMP',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'amp_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'DUR',
          description: 'Duration: Number of days from the SOST to the EOST',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologydur:phenologydur_phenologyusstates_1-day-365-{{year}}_mm_data',
              title: '',
              isWMST: true,
              wmstName: 'phenology_dur_conus_year_data:dur_conus_year_data',
              description: 'Duration: Number of days from the SOST to the EOST',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_dur',
              legend: {
                style: 'phenology_dur_legend',
                customImageURL: null,
                title: 'Number of Days',
                panelTitle: 'DUR',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'dur_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EOSN',
          description:
            'End of Season - NDVI: NDVI value corresponding with the day of year identified at the end of a consistent downward trend in time series NDVI',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologyeosn:phenologyeosn_phenologyusstates_1-day-365-{{year}}_mm_data',
              title: '',
              isWMST: true,
              wmstName: 'phenology_eosn_conus_year_data:eosn_conus_year_data',
              description:
                'End of Season - NDVI: NDVI value corresponding with the day of year identified at the end of a consistent downward trend in time series NDVI',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_eosn',
              legend: {
                style: 'phenology_eosn_legend',
                customImageURL: null,
                title: 'NDVI',
                panelTitle: 'EOSN',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'eosn_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EOST',
          description: 'End of Season - Time: Day of year identified at the end of a consistent downward trend in time series NDVI',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologyeost:phenologyeost_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_eost_conus_year_data:eost_conus_year_data',
              title: '',
              description: 'End of Season - Time: Day of year identified at the end of a consistent downward trend in time series NDVI',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_eost',
              legend: {
                style: 'phenology_eost_legend',
                customImageURL: null,
                title: 'Day of the year (Pixel Value Range)',
                panelTitle: 'EOST',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'eost_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'MAXN',
          description: 'Maximum NDVI: Maximum NDVI in an annual time series',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologymaxn:phenologymaxn_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_maxn_conus_year_data:maxn_conus_year_data',
              title: '',
              description: 'Maximum NDVI: Maximum NDVI in an annual time series',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_maxn',
              legend: {
                style: 'phenology_maxn_legend',
                customImageURL: null,
                title: 'NDVI',
                panelTitle: 'MAXN',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'maxn_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'MAXT',
          description: 'Time of Maximum: Day of year corresponding to the maximum NDVI in an annual time series',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologymaxt:phenologymaxt_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_maxt_conus_year_data:maxt_conus_year_data',
              title: '',
              description: 'Time of Maximum: Day of year corresponding to the maximum NDVI in an annual time series',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_maxt',
              legend: {
                style: 'phenology_maxt_legend',
                customImageURL: null,
                title: 'Day of the year (Pixel Value Range)',
                panelTitle: 'MAXT',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'maxt_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'SOSN',
          description:
            'Start of Season - NDVI: NDVI value (or baseline) identified at the day of year identified as a consistent upward trend in time series NDVI',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologysosn:phenologysosn_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_sosn_conus_year_data:sosn_conus_year_data',
              title: '',
              description:
                'Start of Season - NDVI: NDVI value (or baseline) identified at the day of year identified as a consistent upward trend in time series NDVI',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_sosn',
              legend: {
                style: 'phenology_sosn_legend',
                customImageURL: null,
                title: 'NDVI',
                panelTitle: 'SOSN',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'sosn_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'SOST',
          description: 'Start of Season Time: Day of year identified as having a consistent upward trend in time series NDVI',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologysost:phenologysost_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_sost_conus_year_data:sost_conus_year_data',
              title: '',
              description: 'Start of Season Time: Day of year identified as having a consistent upward trend in time series NDVI',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: true,
              active: true,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_sost',
              legend: {
                style: 'phenology_sost_legend',
                customImageURL: null,
                title: 'Day of the year (Pixel Value Range)',
                panelTitle: 'SOST',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'sost_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'TIN',
          description:
            'Time Integrated NDVI: Daily (interpolated) integration of NDVI above the baseline for the entire duration of the growing season',
          expanded: false,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              name: 'phenologytin:phenologytin_phenologyusstates_1-day-365-{{year}}_mm_data',
              isWMST: true,
              wmstName: 'phenology_tin_conus_year_data:tin_conus_year_data',
              title: '',
              description:
                'Time Integrated NDVI: Daily (interpolated) integration of NDVI above the baseline for the entire duration of the growing season',
              source: {
                wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
                gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/gwc/service/wms?',
                wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
              },
              resolution: '0.05',
              pixelWidth: '1178',
              pixelHeight: '510',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              transparency: true,
              regionIds: ['us'],
              chartIds: [],
              srs: 'EPSG:3857',
              wcsOutputSRS: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              style: 'phenology_tin',
              legend: {
                style: 'phenology_tin_legend',
                customImageURL: null,
                title: 'Time Integrated NDVI',
                panelTitle: 'TIN',
              },
              unit: '',
              additionalAttributes: {
                statistic: 'data',
                rasterDataset: 'tin_conus_year_data',
              },
              timeseries: {
                type: 'year',
                format: 'f1',
                source: 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config',
              },
            },
          ],
        },
      ],
    },
  ],
  boundaries: [
    {
      type: 'folder',
      title: 'Reference Data',
      regionId: 'us',
      expanded: true,
      folder: [
        {
          type: 'layer',
          name: 'phenology_MODIS_250m_Water:MODIS_250m_Water',
          title: 'Water Mask',
          description: '',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
          },
          loadOnly: true,
          display: false,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            GRAY_INDEX: {
              displayName: 'Pixel Value',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'phenology_watermask',
          legend: {
            style: 'phenology_watermask_legend',
            title: 'Water Mask',
          },
        },
        {
          type: 'layer',
          name: 'quickdri_uscounties:uscounties',
          title: 'U.S. County Boundaries',
          description: '',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
            gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
            wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            COUNTY: {
              displayName: 'COUNTY',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            FIPS: {
              displayName: 'FIPS',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            STATE: {
              displayName: 'STATE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            STATE_FIPS: {
              displayName: 'STATE_FIPS',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: '',
        },
        {
          type: 'layer',
          name: 'quickdri_usstates3857:usstates3857',
          title: 'U.S. State Boundaries',
          description: '',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
            gwc: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
            wcs: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wcs',
          },
          loadOnly: false,
          display: true,
          active: true,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            STATE: {
              displayName: 'STATE',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            STPOSTAL: {
              displayName: 'STPOSTAL',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            STFIPS: {
              displayName: 'STFIPS',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: '',
        },
        {
          type: 'layer',
          name: 'quickdri_MIrAD250m_2002v3:MIrAD250m_2002v3',
          title: '2002 MIrAD',
          description:
            '2002 Moderate Resolution Imaging Spectroradiometer (MODIS) Irrigated Agriculture Dataset for the United States (MIrAD-US).  For more information: https://earlywarning.usgs.gov/USirrigation',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            GRAY_INDEX: {
              displayName: 'Pixel Value',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'qdri_mirad_2002',
          legend: {
            style: 'qdri_mirad_2002_display',
            title: '2002 MIrAD',
          },
        },
        {
          type: 'layer',
          name: 'quickdri_MIrAD250m_2007v3:MIrAD250m_2007v3',
          title: '2007 MIrAD',
          description:
            '2007 Moderate Resolution Imaging Spectroradiometer (MODIS) Irrigated Agriculture Dataset for the United States (MIrAD-US).  For more information: https://earlywarning.usgs.gov/USirrigation',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            GRAY_INDEX: {
              displayName: 'Pixel Value',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'qdri_mirad_2007',
          legend: {
            style: 'qdri_mirad_2007_display',
            title: '2007 MIrAD',
          },
        },
        {
          type: 'layer',
          name: 'quickdri_MIrAD250m_2012v3:MIrAD250m_2012v3',
          title: '2012 MIrAD',
          description:
            '2012 Moderate Resolution Imaging Spectroradiometer (MODIS) Irrigated Agriculture Dataset for the United States (MIrAD-US).  For more information: https://earlywarning.usgs.gov/USirrigation',
          source: {
            wms: 'https://igskmncnlxvs226.cr.usgs.gov:8443/geoserver/wms?',
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          regionIds: ['us'],
          srs: 'EPSG:3857',
          featureInfo: {
            GRAY_INDEX: {
              displayName: 'Pixel Value',
              displayValue: null,
              value: null,
              mapValues: [],
            },
          },
          style: 'qdri_mirad_2012',
          legend: {
            style: 'qdri_mirad_2012_display',
            title: '2012 MIrAD',
          },
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
