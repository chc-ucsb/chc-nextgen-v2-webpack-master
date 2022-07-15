import { generateBoundary, generateRCMAPTimeSeries, generateRCMAPTimeSeriesTrendLayer } from './layerGenerators';

import BITHeightLegend from '../../assets/images/shrubland/legends/BIT_component_height_legend.png';
import DepartureLegend from '../../assets/images/shrubland/legends/EP_departure_legend.png';
import RCMAPCoverLegend from '../../assets/images/shrubland/legends/RCMAP_cover_legend.png';
import legendConfidence from '../../assets/images/shrubland/legends/legend_confidence.png';
import legendPercentCover from '../../assets/images/shrubland/legends/legend_percentCover.png';

import TrendsBreakPoint from '../../assets/images/shrubland/legends/break_point_count.png';
import TrendsLinearSlope from '../../assets/images/shrubland/legends/linear_slope_break_point.png';
import TrendsIntensity from '../../assets/images/shrubland/legends/total_change_intensity_index.png';
import TrendsBreakYear from '../../assets/images/shrubland/legends/year_of_most_recent_break.png';

const dmsdata = 'https://dmsdata.cr.usgs.gov/geoserver/';
const mrlc = 'https://devmrlc.cr.usgs.gov/geoserver/';
const geoengine = 'https://stagegeoengine.cr.usgs.gov/api/rest/version/5.0/config';

const dmsdataWMS = dmsdata.concat('wms?');
const dmsdataWCS = dmsdata.concat('wcs?');
const dmsdataGWC = dmsdata.concat('gwc/service/wms?');

const mrlcWMS = mrlc.concat('wms?');
const mrlcWFS = mrlc.concat('wfs?');
const mrlcWCS = mrlc.concat('wcs?');

const dmsDataSource = {
  wms: dmsdataWMS,
  wcs: dmsdataWCS,
  gwc: dmsdataGWC,
};

const mrlcSource = {
  wms: mrlcWMS,
  wcs: mrlcWCS,
  wfs: mrlcWFS,
};

export const layers = {
  overlays: [
    {
      type: 'folder',
      title: 'RCMAP Time Series',
      expanded: false,
      folder: [
        generateRCMAPTimeSeries({
          id: 'anhb_westernconus_year_data',
          title: 'RCMAP Annual Herbaceous',
          description:
            'Annual Herbaceous is a continuous field component including grasses and forbs whose life history is complete in one growing season. This component is primarily dominated by annual invasive species including Cheatgrass (Bromus tectorum), Medusahead (Taeniatherum caput-medusae), Red Brome (Bromus rebens), or annual mustards such as Tumble Mustard (Sisymbrium altissimum) and Tansy Mustard (Descurainia pinnata). But may contain substantial native annual herbaceous vegetation at higher elevations and in California. This component is nested within Herbaceous as a secondary component.',
          name: 'rcmap_annual_herbaceous_YYYY',
          wmstName: 'mrlc_anhb_westernconus_year_data:anhb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'anhb_westernconus_year_data',
          geoengine,
          display: true,
        }),
        generateRCMAPTimeSeries({
          id: 'shrub_westernconus_year_data',
          title: 'RCMAP Shrub',
          description:
            'Shrub is a continuous field component encompassing all shrub species discriminated by the presence of woody stems and < 6-m in height.',
          name: 'rcmap_shrub_YYYY',
          wmstName: 'mrlc_shrub_westernconus_year_data:shrub_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'shrub_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'litter_westernconus_year_data',
          title: 'RCMAP Litter',
          description:
            'Litter is a continuous field component including dead standing woody vegetation, detached plant organic matter and biological soil crusts.',
          name: 'rcmap_litter_YYYY',
          wmstName: 'mrlc_litter_westernconus_year_data:litter_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'litter_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'sage_westernconus_year_data',
          title: 'RCMAP Sagebrush',
          description:
            'Sagebrush is a continuous field component encompassing almost all species of Sagebrush (Artemisia spp.) including Big Sagebrush (A tridentata spp.), Low Sagebrush (A arbuscular), Black Sagebrush (A nova), Three-tip Sagebrush (A triparta) and Silver Sagebrush (A cana). This component is nested within Shrub as a secondary component. Excludes the low stature prairie sage (A. frigida) and white sagebrush (A. ludoviciana).',
          name: 'rcmap_sagebrush_YYYY',
          wmstName: 'mrlc_sage_westernconus_year_data:sage_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'sage_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'bare_westernconus_year_data',
          title: 'RCMAP Bare Ground',
          description: 'Bare Ground is a continuous field component including exposed soil, sand and rocks.',
          name: 'rcmap_bare_ground_YYYY',
          wmstName: 'mrlc_bare_westernconus_year_data:bare_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'bare_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'herb_westernconus_year_data',
          title: 'RCMAP Herbaceous',
          description:
            'Herbaceous is a continuous field component consisting of grasses, forbs and cacti which were photosynthetically active at any point in the year of mapping',
          name: 'rcmap_herbaceous_YYYY',
          wmstName: 'mrlc_herb_westernconus_year_data:herb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'herb_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'non-sagebrush-shrub_westernconus_year_data',
          title: 'RCMAP Non-sagebrush Shrub',
          description:
            'Non-sagebrush Shrub is a continuous field component encompassing all shrub species not of the sagebrush (Artemisia spp) genus. Shrubs, in general, are discriminated by the presence of woody stems and < 6-m in height.',
          name: 'rcmap_non_sagebrush_shrub_YYYY',
          wmstName: 'mrlc_non-sagebrush-shrub_westernconus_year_data:non-sagebrush-shrub_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'non-sagebrush-shrub_westernconus_year_data',
          geoengine,
        }),
        generateRCMAPTimeSeries({
          id: 'per-herb_westernconus_year_data',
          title: 'RCMAP Perennial Herbaceous',
          description:
            'Perennial Herbaceous is a continuous field component consisting of grasses, forbs and cacti which were photosynthetically active at any point in the year of mapping and whose lifecycle includes more than one growing season (includes biennials).',
          name: 'rcmap_perennial_herbaceous_YYYY',
          wmstName: 'mrlc_per-herb_westernconus_year_data:per-herb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'per-herb_westernconus_year_data',
          geoengine,
        }),
      ],
    },
    {
      type: 'folder',
      title: 'RCMAP Time Series',
      expanded: false,
      folder: [
        generateRCMAPTimeSeries({
          id: 'anhb_westernconus_year_data_loadOnly',
          title: 'RCMAP Annual Herbaceous',
          description:
            'Annual Herbaceous is a continuous field component including grasses and forbs whose life history is complete in one growing season. This component is primarily dominated by annual invasive species including Cheatgrass (Bromus tectorum), Medusahead (Taeniatherum caput-medusae), Red Brome (Bromus rebens), or annual mustards such as Tumble Mustard (Sisymbrium altissimum) and Tansy Mustard (Descurainia pinnata). But may contain substantial native annual herbaceous vegetation at higher elevations and in California. This component is nested within Herbaceous as a secondary component.',
          name: 'rcmap_annual_herbaceous_YYYY',
          wmstName: 'mrlc_anhb_westernconus_year_data:anhb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'anhb_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'shrub_westernconus_year_data_loadOnly',
          title: 'RCMAP Shrub',
          description:
            'Shrub is a continuous field component encompassing all shrub species discriminated by the presence of woody stems and < 6-m in height.',
          name: 'rcmap_shrub_YYYY',
          wmstName: 'mrlc_shrub_westernconus_year_data:shrub_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'shrub_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'litter_westernconus_year_data_loadOnly',
          title: 'RCMAP Litter',
          description:
            'Litter is a continuous field component including dead standing woody vegetation, detached plant organic matter and biological soil crusts.',
          name: 'rcmap_litter_YYYY',
          wmstName: 'mrlc_litter_westernconus_year_data:litter_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'litter_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'sage_westernconus_year_data_loadOnly',
          title: 'RCMAP Sagebrush',
          description:
            'Sagebrush is a continuous field component encompassing almost all species of Sagebrush (Artemisia spp.) including Big Sagebrush (A tridentata spp.), Low Sagebrush (A arbuscular), Black Sagebrush (A nova), Three-tip Sagebrush (A triparta) and Silver Sagebrush (A cana). This component is nested within Shrub as a secondary component. Excludes the low stature prairie sage (A. frigida) and white sagebrush (A. ludoviciana).',
          name: 'rcmap_sagebrush_YYYY',
          wmstName: 'mrlc_sage_westernconus_year_data:sage_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'sage_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'bare_westernconus_year_data_loadOnly',
          title: 'RCMAP Bare Ground',
          description: 'Bare Ground is a continuous field component including exposed soil, sand and rocks.',
          name: 'rcmap_bare_ground_YYYY',
          wmstName: 'mrlc_bare_westernconus_year_data:bare_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'bare_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'herb_westernconus_year_data_loadOnly',
          title: 'RCMAP Herbaceous',
          description:
            'Herbaceous is a continuous field component consisting of grasses, forbs and cacti which were photosynthetically active at any point in the year of mapping',
          name: 'rcmap_herbaceous_YYYY',
          wmstName: 'mrlc_herb_westernconus_year_data:herb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'herb_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'non-sagebrush-shrub_westernconus_year_data_loadOnly',
          title: 'RCMAP Non-sagebrush Shrub',
          description:
            'Non-sagebrush Shrub is a continuous field component encompassing all shrub species not of the sagebrush (Artemisia spp) genus. Shrubs, in general, are discriminated by the presence of woody stems and < 6-m in height.',
          name: 'rcmap_non_sagebrush_shrub_YYYY',
          wmstName: 'mrlc_non-sagebrush-shrub_westernconus_year_data:non-sagebrush-shrub_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'non-sagebrush-shrub_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
        generateRCMAPTimeSeries({
          id: 'per-herb_westernconus_year_data_loadOnly',
          title: 'RCMAP Perennial Herbaceous',
          description:
            'Perennial Herbaceous is a continuous field component consisting of grasses, forbs and cacti which were photosynthetically active at any point in the year of mapping and whose lifecycle includes more than one growing season (includes biennials).',
          name: 'rcmap_perennial_herbaceous_YYYY',
          wmstName: 'mrlc_per-herb_westernconus_year_data:per-herb_westernconus_year_data',
          source: dmsDataSource,
          rasterDataset: 'per-herb_westernconus_year_data',
          geoengine,
          loadOnly: true,
        }),
      ],
    },
    {
      type: 'folder',
      title: 'RCAMP Time Series Trends',
      expanded: false,
      folder: [
        {
          type: 'folder',
          title: 'Breakpoint Count',
          expanded: false,
          folder: [
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Annual Herbaceous',
              name: 'mrlc_display:rcmap_annual_herbaceous_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Bare Ground',
              name: 'mrlc_display:rcmap_bare_ground_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Herbaceous',
              name: 'mrlc_display:rcmap_herbaceous_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Litter',
              name: 'mrlc_display:rcmap_litter_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Non Sagebrush Shrub',
              name: 'mrlc_display:rcmap_non_sagebrush_shrub_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Perennial Herbaceous',
              name: 'mrlc_display:rcmap_perennial_herbaceous_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Sagebrush',
              name: 'mrlc_display:rcmap_sagebrush_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Shrub',
              name: 'mrlc_display:rcmap_shrub_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakPoint,
              index: 'PALETTE_INDEX',
            }),
          ],
        },
        {
          type: 'folder',
          title: 'Slope of Linear Model',
          expanded: false,
          folder: [
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Annual Herbaceous',
              name: 'mrlc_display:rcmap_annual_herbaceous_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Bare Ground',
              name: 'mrlc_display:rcmap_bare_ground_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Herbaceous',
              name: 'mrlc_display:rcmap_herbaceous_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Litter',
              name: 'mrlc_display:rcmap_litter_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Non Sagebrush Shrub',
              name: 'mrlc_display:rcmap_non_sagebrush_shrub_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Perennial Herbaceous',
              name: 'mrlc_display:rcmap_perennial_herbaceous_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Sagebrush',
              name: 'mrlc_display:rcmap_sagebrush_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Shrub',
              name: 'mrlc_display:rcmap_shrub_linear_model_slope',
              source: mrlcSource,
              customImageUrl: TrendsLinearSlope,
            }),
          ],
        },
        {
          type: 'folder',
          title: 'Year of Most Recent Break',
          expanded: false,
          folder: [
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Annual Herbaceous',
              name: 'mrlc_display:rcmap_annual_herbaceous_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Bare Ground',
              name: 'mrlc_display:rcmap_bare_ground_most_recent_break_point',
              source: mrlcSource,
              customImageUr: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Herbaceous',
              name: 'mrlc_display:rcmap_herbaceous_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Litter',
              name: 'mrlc_display:rcmap_litter_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Non Sagebrush Shrub',
              name: 'mrlc_display:rcmap_non_sagebrush_shrub_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Perennial Herbaceous',
              name: 'mrlc_display:rcmap_perennial_herbaceous_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Sagebrush',
              name: 'mrlc_display:rcmap_sagebrush_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
            generateRCMAPTimeSeriesTrendLayer({
              title: 'Shrub',
              name: 'mrlc_display:rcmap_shrub_most_recent_break_point',
              source: mrlcSource,
              customImageUrl: TrendsBreakYear,
            }),
          ],
        },
        generateRCMAPTimeSeriesTrendLayer({
          title: 'Total Change Intensity Index',
          name: 'mrlc_display:rcmap_total_change_intensity_index',
          source: mrlcSource,
          customImageUrl: TrendsIntensity,
          index: 'PALETTE_INDEX',
        }),
      ],
    },
    {
      type: 'folder',
      title: 'RCMAP Ecological Potential (EP)',
      expanded: false,
      folder: [
        {
          type: 'folder',
          title: '2018 EP Departure Bare Ground Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: '2018_departure_bare_ground_cover',
              isWMST: false,
              name: 'mrlc_display:2018_departure_bare_ground_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: DepartureLegend,
                title: 'Ecological Potential Component Cover Departure',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: '2018 EP Departure Litter Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: '2018_departure_litter_cover',
              isWMST: false,
              name: 'mrlc_display:2018_departure_litter_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 0,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: DepartureLegend,
                title: 'Ecological Potential Component Cover Departure',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: '2018 EP Departure Perennial Herbaceous Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: '2018_departure_per_herb_cover',
              isWMST: false,
              name: 'mrlc_display:2018_departure_per_herb_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: DepartureLegend,
                title: 'Ecological Potential Component Cover Departure',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: '2018 EP Departure Sagebrush Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: '2018_departure_sagebrush_cover',
              isWMST: false,
              name: 'mrlc_display:2018_departure_sagebrush_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: DepartureLegend,
                title: 'Ecological Potential Component Cover Departure',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: '2018 EP Departure Shrub Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: '2018_departure_shrub_cover',
              isWMST: false,
              name: 'mrlc_display:2018_departure_shrub_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: DepartureLegend,
                title: 'Ecological Potential Component Cover Departure',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EP Bare Ground Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: 'ecological_potential_bare_cover',
              isWMST: false,
              name: 'mrlc_display:ecological_potential_bare_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: 'Component Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EP Litter Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: 'ecological_potential_litter_cover',
              isWMST: false,
              name: 'mrlc_display:ecological_potential_litter_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: 'Component Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EP Perennial Herbaceous Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: 'ecological_potential_perennial_herbaceous_cover',
              isWMST: false,
              name: 'mrlc_display:ecological_potential_perennial_herbaceous_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: 'Component Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EP Sagebrush Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: 'ecological_potential_sagebrush_cover',
              isWMST: false,
              name: 'mrlc_display:ecological_potential_sagebrush_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: 'Component Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'EP Shrub Cover',
          expanded: true,
          regionId: 'us',
          folder: [
            {
              type: 'layer',
              id: 'ecological_potential_shrub_cover',
              isWMST: false,
              name: 'mrlc_display:ecological_potential_shrub_cover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: 'Component Cover',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'folder',
      title: 'RCMAP Basemap',
      expanded: false,
      folder: [
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Annual Herbaceous Cover',
          description:
            'Annual Herbaceous is a continuous field component including grasses and forbs whose life history is complete in one growing season. This component is primarily dominated by annual invasive species including Cheatgrass (Bromus tectorum), Medusahead (Taeniatherum caput-medusae), Red Brome (Bromus rebens), or annual mustards such as Tumble Mustard (Sisymbrium altissimum) and Tansy Mustard (Descurainia pinnata). But may contain substantial native annual herbaceous vegetation at higher elevations and in California. This component is nested within Herbaceous as a secondary component.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandAnnualHerb',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Annual_Herb_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Annual Herbaceous Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Bare Ground Cover',
          description: 'Bare Ground is a continuous field component including exposed soil, sand and rocks.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandBareGround',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Bare_Ground_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Bare Ground Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Big Sagebrush Cover',
          description:
            'Big Sagebrush is a continuous field component dominated by Big Sagebrush (A tridentata spp.) may include Three-tip Sagebrush (A triparta) and Silver Sagebrush (A cana). This component is nested within Shrub and Sagebrush as a secondary component.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandBigSagebrush',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Big_Sagebrush_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Big Sagebrush Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Herbaceous Cover',
          description:
            'Herbaceous is a continuous field component consisting of grasses, forbs and cacti which were photosynthetically active at any point in the year of mapping',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandHerbaceous',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Herbaceous_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Herbaceous Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Litter Cover',
          description:
            'Litter is a continuous field component including dead standing woody vegetation, detached plant organic matter and biological soil crusts.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandLitter',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Litter_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Litter Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Sagebrush Cover',
          description:
            'Sagebrush is a continuous field component encompassing almost all species of Sagebrush (Artemisia spp.) including Big Sagebrush (A tridentata spp.), Low Sagebrush (A arbuscular), Black Sagebrush (A nova), Three-tip Sagebrush (A triparta) and Silver Sagebrush (A cana). This component is nested within Shrub as a secondary component. Excludes the low stature prairie sage (A. frigida) and white sagebrush (A. ludoviciana).',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandSagebrush',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Sagebrush_Shrubland_Fractional_Component',
              title: '2016 Sagebrush Cover',
              description:
                'Sagebrush is a continuous field component encompassing almost all species of Sagebrush (Artemisia spp.) including Big Sagebrush (A tridentata spp.), Low Sagebrush (A arbuscular), Black Sagebrush (A nova), Three-tip Sagebrush (A triparta) and Silver Sagebrush (A cana). This component is nested within Shrub as a secondary component. Excludes the low stature prairie sage (A. frigida) and white sagebrush (A. ludoviciana).',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Sagebrush Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Sagebrush Height',
          description:
            'Sagebrush Height is the average height of all Shrub in centimeters. This component only occurs where the Shrub component has a prediction.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandSagebrushHeight',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Sagebrush_Height_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: BITHeightLegend,
                title: '2016 Sagebrush Height',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Shrub Cover',
          description:
            'Shrub is a continuous field component encompassing all shrub species discriminated by the presence of woody stems and < 6-m in height.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandShrub',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Shrub_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wcs: mrlcWCS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: RCMAPCoverLegend,
                title: '2016 Shrub Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          expanded: true,
          regionId: 'us',
          title: '2016 Shrub Height',
          description:
            'Shrub Height is the average height of all Shrub in centimeters. This component only occurs where the Shrub component has a prediction.',
          folder: [
            {
              type: 'layer',
              id: 'allconusUsgs2016ShrublandShrubHeight',
              isWMST: false,
              name: 'mrlc_display:NLCD_2016_Shrub_Height_Shrubland_Fractional_Component',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                PALETTE_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: BITHeightLegend,
                title: '2016 Shrub Height',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'folder',
      title: 'Exotic Annual Grass',
      expanded: false,
      folder: [
        {
          type: 'folder',
          title: 'June 03, 2022 Confidence',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides modelling confidence for each mapped pixel of exotic annual grasses (EAG) fractional cover predicted on June 3, 2022. Confidence Level is unitless, ranges from 0 (low confidence) to 10 (high confidence).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_June032022_Confidence',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_June032022_Confidence',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendConfidence,
                title: 'Exotic Grass June 03, 2022  Confidence',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'June 03, 2022 Percent Cover',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides early estimates of 2022 exotic annual grasses (EAG) fractional cover predicted on June 3 using satellite observation data available until May 27. EAG is a continuous field consisting of abundance of non-native grass species whose life history is complete in one growing season. Cheatgrass (Bromus tectorum) is a dominant species, but this dataset also includes Bromus arvensis L., Bromus briziformis Fisch. & C.A. Mey. Bromus catharticus Vahl, Bromus commutatus Schrad, Bromus diandrus Roth, Bromus hordeaceus L., Bromus hordeaceus spp. Hordeaceus, Bromus japonicus Thunb, Bromus madritensis L., Bromus madritensis L. ssp. rubens (L.) Duvin, Bromus racemosus L., Bromus rubens L., Bromus secalinus L., Bromus texensis (Shear) Hitchc, and medusahead (Taeniatherum caput-medusae (L.) Nevski).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_June032022_PercentCover',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_June032022_PercentCover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendPercentCover,
                title: 'Exotic Grass June 03, 2022 Percent Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 18, 2022 Confidence',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides modelling confidence for each mapped pixel of exotic annual grasses (EAG) fractional cover predicted on May 18, 2022. Confidence Level is unitless, ranges from 0 (low confidence) to 10 (high confidence).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_May182022_Confidence',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_May182022_Confidence',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendConfidence,
                title: 'Exotic Grass May 18, 2022 Confidence',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 18, 2022 Percent Cover',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides early estimates of 2022 exotic annual grasses (EAG) fractional cover predicted on May 18 using satellite observation data available until May 13. EAG is a continuous field consisting of abundance of non-native grass species whose life history is complete in one growing season. Cheatgrass (Bromus tectorum) is a dominant species, but this dataset also includes Bromus arvensis L., Bromus briziformis Fisch. & C.A. Mey. Bromus catharticus Vahl, Bromus commutatus Schrad, Bromus diandrus Roth, Bromus hordeaceus L., Bromus hordeaceus spp. Hordeaceus, Bromus japonicus Thunb, Bromus madritensis L., Bromus madritensis L. ssp. rubens (L.) Duvin, Bromus racemosus L., Bromus rubens L., Bromus secalinus L., Bromus texensis (Shear) Hitchc, and medusahead (Taeniatherum caput-medusae (L.) Nevski).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_May182022_PercentCover',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_May182022_PercentCover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendPercentCover,
                title: 'Exotic Grass May 18, 2022 Percent Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 06, 2022 Confidence',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides modelling confidence for each mapped pixel of exotic annual grasses (EAG) fractional cover predicted on May 6, 2022. Confidence Level is unitless, ranges from 0 (low confidence) to 10 (high confidence).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_May062022_Confidence',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_May062022_Confidence',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendConfidence,
                title: 'Exotic Grass May 06, 2022 Confidence',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 06, 2022 Percent Cover',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides early estimates of 2022 exotic annual grasses (EAG) fractional cover predicted on May 6 using satellite observation data available until April 29. EAG is a continuous field consisting of abundance of non-native grass species whose life history is complete in one growing season. Cheatgrass (Bromus tectorum) is a dominant species, but this dataset also includes Bromus arvensis L., Bromus briziformis Fisch. & C.A. Mey. Bromus catharticus Vahl, Bromus commutatus Schrad, Bromus diandrus Roth, Bromus hordeaceus L., Bromus hordeaceus spp. Hordeaceus, Bromus japonicus Thunb, Bromus madritensis L., Bromus madritensis L. ssp. rubens (L.) Duvin, Bromus racemosus L., Bromus rubens L., Bromus secalinus L., Bromus texensis (Shear) Hitchc, and medusahead (Taeniatherum caput-medusae (L.) Nevski).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_May062022_PercentCover',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_May062022_PercentCover',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendPercentCover,
                title: 'Exotic Grass May 06, 2022 Percent Cover',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'July 2021 Confidence',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides modelling confidence for each mapped pixel of exotic annual grasses (EAG) fractional cover predicted on July 1, 2021. Confidence Level is unitless, ranges from 0 (low confidence) to 10 (high confidence).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_July2021_Confidence_WM',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_July2021_Confidence_WM',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendConfidence,
                title: 'Exotic Grass July 2021  Confidence',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'July 2021 Percent Cover',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides early estimates of 2021 exotic annual grasses (EAG) fractional cover predicted on July 1st using satellite observation data available until June 28th. EAG is a continuous field consisting of abundance of non-native grass species whose life history is complete in one growing season. Cheatgrass (Bromus tectorum) is a dominant species but this dataset also includes Bromus arvensis L., Bromus briziformis, Bromus catharticus Vahl, Bromus commutatus, Bromus diandrus, Bromus hordeaceus L., Bromus hordeaceus spp. Hordeaceus, Bromus japonicus, Bromus madritensis L., Bromus madritensis L. ssp. rubens (L.) Duvin, Bromus racemosus, Bromus rubens L., Bromus secalinus L., Bromus texensis (Shear) Hitch, and medusahead (Taeniatherum caput-medusae).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_july2021_percentCover',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_July2021_PercentCover_WM   ',
              currentGranuleName: '',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              resolution: '0.05',
              pixelWidth: '3400',
              pixelHeight: '2000',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 1,
              transparency: true,
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
              style: '',
              legend: {
                customImageURL: legendPercentCover,
                title: 'Exotic Grass July 2021 Percent Cover',
              },
              additionalAttributes: {
                format: 'yyyy',
                statistic: 'data',
                rasterDataset: 'anhb_westernconus_year_data',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 2021 Confidence',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides modelling confidence for each mapped pixel of exotic annual grasses (EAG) fractional cover predicted on May 3, 2021. Confidence Level is unitless, ranges from 0 (low confidence) to 10 (high confidence).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_may2021_confidence',
              isWMST: false,
              name: 'mrlc_display:ExoticAnnualGrass_May2021_Confidence_WM   ',
              currentGranuleName: '',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              resolution: '0.05',
              pixelWidth: '3400',
              pixelHeight: '2000',
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 1,
              transparency: true,
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
              style: '',
              legend: {
                customImageURL: legendConfidence,
                title: 'Exotic Grass May 2021  Confidence',
              },
              additionalAttributes: {
                format: 'yyyy',
                statistic: 'data',
                rasterDataset: 'anhb_westernconus_year_data',
              },
            },
          ],
        },
        {
          type: 'folder',
          title: 'May 2021 Percent Cover',
          expanded: true,
          regionId: 'us',
          description:
            'This data provides early estimates of 2021 exotic annual grasses (EAG) fractional cover predicted on May 3rd using satellite observation data available until April 26th. EAG is a continuous field consisting of abundance of non-native grass species whose life history is complete in one growing season. Cheatgrass (Bromus tectorum) is a dominant species but this dataset also includes Bromus arvensis L., Bromus briziformis, Bromus catharticus Vahl, Bromus commutatus, Bromus diandrus, Bromus hordeaceus L., Bromus hordeaceus spp. Hordeaceus, Bromus japonicus, Bromus madritensis L., Bromus madritensis L. ssp. rubens (L.) Duvin, Bromus racemosus, Bromus rubens L., Bromus secalinus L., Bromus texensis (Shear) Hitch, and medusahead (Taeniatherum caput-medusae).',
          folder: [
            {
              type: 'layer',
              id: 'ExoticAnnualGrass_may2021_percentCover',
              name: 'mrlc_display:ExoticAnnualGrass_May2021_PercentCover_WM',
              isWMST: false,
              currentGranuleName: '',
              title: '',
              source: {
                wms: mrlcWMS,
                wfs: mrlcWFS,
              },
              loadOnly: false,
              display: false,
              mask: false,
              zIndex: 1,
              transparency: true,
              srs: 'EPSG:3857',
              featureInfo: {
                GRAY_INDEX: {
                  displayName: 'Pixel Value',
                  displayValue: null,
                  value: null,
                  mapValues: [],
                },
              },
              legend: {
                customImageURL: legendPercentCover,
                title: 'Exotic Grass May 2021 Percent Cover',
              },
              additionalAttributes: {
                format: 'yyyy',
                statistic: 'data',
                rasterDataset: 'anhb_westernconus_year_data',
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
      title: 'Boundaries',
      expanded: true,
      folder: [
        generateBoundary({
          id: 'shapefile_BLM_USFS_Pastures',
          name: 'mrlc_shapefile_BLM_USFS_Pastures:shapefile_BLM_USFS_Pastures',
          title: 'BLM USFS Pastures',
          source: dmsDataSource,
          includeManager: true,
        }),
        generateBoundary({
          id: 'shapefile_USFS_BLM_Allotments_wm',
          name: 'mrlc_shapefile_USFS_BLM_Allotments_wm:shapefile_USFS_BLM_Allotments_wm',
          title: 'USFS BLM Allotments',
          source: dmsDataSource,
          includeManager: true,
        }),
        generateBoundary({
          id: 'shapefile_HUC_level_6',
          name: 'mrlc_shapefile_HUC_level_6:shapefile_HUC_level_6',
          title: 'HUC Level 6',
          source: dmsDataSource,
        }),
        generateBoundary({
          id: 'shapefile_HUC_level_8',
          name: 'mrlc_shapefile_HUC_level_8:shapefile_HUC_level_8',
          title: 'HUC Level 8',
          source: dmsDataSource,
        }),
        generateBoundary({
          id: 'shapefile_HUC_level_10',
          name: 'mrlc_shapefile_HUC_level_10:shapefile_HUC_level_10',
          title: 'HUC Level 10',
          source: dmsDataSource,
        }),
        generateBoundary({
          id: 'shapefile_BLM_Priority_Habitat_Area',
          name: 'mrlc_shapefile_BLM_Priority_Habitat_Area:shapefile_BLM_Priority_Habitat_Area',
          title: 'BLM Priority Habitat Area',
          source: dmsDataSource,
        }),
        generateBoundary({
          id: 'shapefile_BLM_herd_managment_area',
          name: 'mrlc_shapefile_BLM_herd_managment_area:shapefile_BLM_herd_managment_area',
          title: 'BLM Herd Management Area',
          source: dmsDataSource,
        }),
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
          name: 'stamen',
          title: 'Stamen Terrain',
          loadOnly: false,
          display: true,
          mask: false,
          srs: 'EPSG:3857',
          loaded: 'true',
          brand: 'stamen',
          layer: 'terrain',
          comments: 'imagery set values can be Road,Aerial,AerialWithLabels,collinsBart,ordnanceSurvey',
        },
        {
          type: 'layer',
          name: 'Aerial Imagery',
          title: 'Aerial Imagery',
          description: '',
          loadOnly: false,
          display: false,
          mask: false,
          srs: 'EPSG:3857',
          loaded: 'true',
          brand: 'osm',
          source: {
            url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
          },
          comments: '',
        },
        {
          type: 'layer',
          id: 'allStates',
          name: 'mrlc_display:mrlc_cb_2016_us_state_5m_web_mercator',
          title: 'National Atlas States',
          source: {
            wms: mrlcWMS,
            wfs: mrlcWFS,
          },
          loadOnly: false,
          display: true,
          mask: false,
          srs: 'EPSG:3857',
        },
        {
          type: 'layer',
          id: 'allCounties',
          name: 'mrlc_display:mrlc_uscounties',
          title: 'National Atlas Counties 2001',
          source: {
            wms: mrlcWMS,
            wfs: mrlcWFS,
          },
          loadOnly: false,
          display: false,
          mask: false,
          zIndex: 0,
          srs: 'EPSG:3857',
          featureInfo: {
            COUNTY: {
              displayName: 'County Name',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            STATE: {
              displayName: 'State',
              displayValue: null,
              value: null,
              mapValues: [],
            },
            AREA_: {
              displayName: 'Area',
              displayValue: null,
              value: null,
              mapValues: [],
              significantDigits: 6,
            },
            PERIMETER: {
              displayName: 'Perimeter',
              displayValue: null,
              value: null,
              mapValues: [],
              significantDigits: 6,
            },
          },
        },
      ],
    },
  ],
};
