import logoPaigh from '../../../../assets/images/geosur/logo_paigh.png';
import cafLogoEn from '../../../../assets/images/geosur/caf_logo_en.png';
import geosurEn from '../../../../assets/images/geosur/geosur_en.png';

export const template = {
  theme: 'ExtJSNeptune',
  cssFallback: true,
  // analytics: {
  //   matomo: {
  //     baseUrl: '//edcintl.cr.usgs.gov/piwik/',
  //     id: '14',
  //   },
  //   google: {
  //     id: 'UA-21406562-5',
  //   },
  // },
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
      content: `<div id='header-logo-left'><a href='https://www.geosur.info' target='_blank'><img src='${geosurEn}'></a></div><div id='header-logo-right'><a href='https://www.caf.com/' target='_blank'><img src='${cafLogoEn}' style='height: 35px;'></a><a href='http://www.aag.org/paigh' target='_blank'><img src='${logoPaigh}'></a></div><h1 class='main'></h1>`,
      link: 'https://www.geosur.info',
      toolbar: {
        position: 'bottom',
        add: false,
        style: 'background-color: white;',
        overflowMenu: false,
        items: [
          {
            name: 'cExternalLinkButtonTool',
            add: true,
            import: 'js.tools.shared.cExternalLinkButtonTool.cExternalLinkButtonTool',
            url: 'https://www.geosur.info',
            tooltip: 'GEOSUR - Home',
            icon: 'fa-home',
            width: 30,
          },
          {
            name: 'cPopupButtonTool',
            import: 'js.tools.shared.cPopupButtonTool.cPopupButtonTool',
            add: true,
            showOnFirstLoad: false,
            popupTitle: 'Disclaimer',
            popupHeight: 610,
            popupWidth: 600,
            popupBody: '<p></p>',
            tooltip: 'Disclaimer',
            text: 'Disclaimer',
            width: 100,
          },
        ],
      },
    },
    {
      block: 'left',
      name: 'cToc',
      import: 'js.tools.shared.cToc.cToc',
      add: true,
      width: 335,
      height: '100%',
      title: 'TOC',
      collapsible: true,
      collapsed: false,
      blocks: [
        {
          block: 'center',
          name: 'cTocTabPanel',
          import: 'js.tools.shared.cTocTabPanel.cTocTabPanel',
          add: true,
          blocks: [
            {
              add: true,
              title: 'TOC',
              name: 'cTocContentsTab',
              import: 'js.tools.shared.cTocContentsTab.cTocContentsTab',
              blocks: [
                {
                  block: 'center',
                  add: true,
                  width: '100%',
                  height: '100%',
                  title: 'Maps',
                  name: 'cTocContainer',
                  import: 'js.tools.shared.cTocContainer.cTocContainer',
                  toolbar: {
                    position: 'top',
                    overflowMenu: false,
                    items: [
                      {
                        name: 'cAddWMSLayerTool',
                        import: 'js.tools.shared.cAddWMSLayerTool.cAddWMSLayerTool',
                        add: false,
                        tooltip: 'Add WMS Layers',
                      },
                      {
                        name: 'cRemoveWMSLayerTool',
                        import: 'js.tools.shared.cRemoveWMSLayerTool.cRemoveWMSLayerTool',
                        add: false,
                        tooltip: 'Remove WMS Layers',
                      },
                      {
                        block: 'relative',
                        name: 'cAddWMSLayerForm',
                        import: 'js.tools.shared.cAddWMSLayerForm.cAddWMSLayerForm',
                        add: false,
                        width: 350,
                        height: 105,
                        x: 150,
                        y: 150,
                        addNewFolder: true,
                        title: 'Add WMS layers',
                        progressMessage: 'Loading layers ...',
                        additionalLayersTitle: 'Additional layers',
                        wmsLayersTitle: 'WMS layers',
                        getLayersBtnTxt: 'Get layers',
                        addSelectedLayersBtnTxt: 'Add selected layers',
                        wmsLayerTitleTxt: 'Layers',
                        wmsUrlFieldLbl: 'URL:',
                        titleTxtFieldLbl: 'Title',
                        legendStyleTxtFieldLbl: 'Legend style:',
                        legendUrlTxtFieldLbl: 'Legend URL:',
                        legendTitleHereTitle: 'Legend title',
                        errorRequestMessage: 'Invalid request parameter',
                        errorServiceMessage: 'Invalid service parameter',
                        errorCapabilitiesRequestMessage: 'Request must be valid GetCapabilities',
                        errorUrlRequestMessage: 'Request could not complete. Please check the URL.<br> Status code: ',
                        errorDuplicateLayersMessage: 'Some selected layers already exist in',
                      },
                      {
                        block: 'relative',
                        name: 'cRemoveWMSLayerForm',
                        import: 'js.tools.shared.cRemoveWMSLayerForm.cRemoveWMSLayerForm',
                        add: false,
                        width: 350,
                        height: 105,
                        x: 150,
                        y: 150,
                        title: 'Remove WMS Layers',
                        progressMessage: 'Removing layers ...',
                        wmsLayerTitleTxt: 'Layers',
                        removeSelectedLayersBtnTxt: 'Remove selected layers',
                      },
                    ],
                  },
                  blocks: [
                    {
                      name: 'cDefaultToc',
                      import: 'js.tools.geosur.cDefaultToc.cDefaultToc',
                      add: true,
                      width: '100%',
                      height: '95%',
                      titleLength: 200,
                      hideDatePicker: true,
                      progressMessage: 'Loading TOC ...',
                    },
                    {
                      name: 'cTransparency',
                      import: 'js.tools.shared.cTransparency.cTransparency',
                      add: true,
                      width: '90%',
                      height: '5%',
                      fieldLabel: 'Transparency (Highlighted Layer)',
                    },
                    {
                      name: 'cLayersToc',
                      import: 'js.tools.shared.cLayersToc.cLayersToc',
                      add: false,
                      progressMessage: 'Loading TOC ...',
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
              width: 335,
              progressMessage: 'Loading Legend ...',
              autoScroll: true,
            },
          ],
        },
      ],
    },
    {
      block: 'center',
      name: 'cMapWindow',
      import: 'js.tools.shared.cMapWindow.cMapWindow',
      add: true,
      collapsible: false,
      hideTitle: true,
      toolbar: {
        position: 'top',
        overflowMenu: true,
        items: [
          {
            name: 'cZoomToRegionTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cZoomToRegionTool.cZoomToRegionTool',
            cssClass: '',
            tooltip: 'Full extent',
          },
          {
            name: 'cPanTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cPanTool.cPanTool',
            cssClass: '',
            tooltip: 'Pan',
          },
          {
            name: 'cExtentDragBoxTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cExtentDragBoxTool.cExtentDragBoxTool',
            cssClass: '',
            tooltip: 'Zoom in',
          },
          {
            name: 'cRevertExtentTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cRevertExtentTool.cRevertExtentTool',
            cssClass: '',
            tooltip: 'Previous extent',
          },
          {
            name: 'cIdentifyTool',
            title: '',
            add: false,
            import: 'js.tools.shared.cIdentifyTool.cIdentifyTool',
            cssClass: '',
            tooltip: 'Identify',
          },
          {
            name: 'cLandsatLook',
            import: 'js.tools.shared.cLandsatLook.cLandsatLook',
            title: '',
            add: false,
            cssClass: '',
            tooltip: 'Open LandsatLook using current map extent. Requires 1:1M minimum scale.',
          },
          {
            name: 'cSpacer',
            import: 'js.tools.shared.cSpacer.cSpacer',
            add: true,
          },
          {
            name: 'cMapDownloadsTool',
            add: true,
            import: 'js.tools.shared.cMapDownloadsTool.cMapDownloadsTool',
            tooltip: 'Save',
            items: [
              {
                name: 'cMenuLabel',
                add: true,
                import: 'js.tools.shared.cMenuLabel.cMenuLabel',
                label: 'Download:',
              },
              {
                name: 'cMapDownloadsMenuItem',
                add: false,
                import: 'js.tools.shared.cMapDownloadsMenuItem.cMapDownloadsMenuItem',
                type: 'wcs',
                format: 'image/geotiff',
                text: 'GeoTiff (source data)',
              },
              {
                name: 'cMapDownloadsMenuItem',
                add: false,
                import: 'js.tools.shared.cMapDownloadsMenuItem.cMapDownloadsMenuItem',
                type: 'wms',
                format: 'image/geotiff',
                text: 'Map view (TIFF)',
              },
              {
                name: 'cMapDownloadsMenuItemPNG',
                add: true,
                import: 'js.tools.shared.cMapDownloadsMenuItemPNG.cMapDownloadsMenuItemPNG',
                type: 'wms',
                format: 'image/png',
                text: 'Map view (PNG)',
                progressMessage: 'Generating download ...',
              },
            ],
          },
          {
            name: 'cPopupButtonTool',
            import: 'js.tools.shared.cPopupButtonTool.cPopupButtonTool',
            add: true,
            popupTitle: 'Welcome to the GEOSUR Regional Map Viewer (RMV)',
            popupBody:
              "<p>Ensuring geographic information is readily available is the mission of the GEOSUR Program, a regional initiative to integrate and disseminate spatial data in South America. GEOSUR was originally developed under the aegis of the Initiative for the Integration of Regional Infrastructure in South America (IIRSA), which promotes the development of transportation, energy and telecommunications infrastructure from a regional viewpoint. Since the Program's inception in 2007, GEOSUR has grown to serve a large audience interested in development objectives, both regionally and within individual countries.</p><p>More information at the links below:</p><p><a href='/geosur/index.php/en'>GEOSUR Program</a><br><a href='/geosur/index.php/es/en/integration-and-development-hubs'>Integration and Development HUBS</a><br><a href='/geosur/index.php/es/en/available-data/data'>Data Download Center</a><br><a href='/geosur/index.php/es/en/legal-note'>Legal Note</a></p>",
            popupHeight: 550,
            popupWidth: 600,
            tooltip: 'More Information',
            text: 'More Information',
            width: 120,
          },
        ],
      },
      blocks: [
        {
          name: 'cMapPanel',
          import: 'js.tools.shared.cMapPanel.cMapPanel',
          add: true,
          addScaleLine: true,
          zoomInTip: 'Zoom in',
          zoomOutTip: 'Zoom out',
          progressMessage: 'Loading Layers ...',
          interactions: ['pan', 'zoom'],
          mouseCoordinates: {
            show: true,
            projection: 'EPSG:4326',
          },
          minZoom: 1,
          maxZoom: 12,
          boundExtent: [-14154859, -9157582, 1726074, 4264628],
        },
      ],
    },
    {
      block: 'right',
      name: 'cTools',
      import: 'js.tools.shared.cTools.cTools',
      add: false,
      width: 250,
      height: 'auto',
      collapsible: true,
      collapsed: true,
      title: '',
      blocks: [
        {
          name: 'cFeatureInfoPanel',
          import: 'js.tools.shared.cFeatureInfoPanel.cFeatureInfoPanel',
          add: true,
          title: 'Identify - Results',
          height: 600,
          width: '100%',
          cssClass: '',
        },
      ],
    },
  ],
  host: 'www.geosur.info',
};
