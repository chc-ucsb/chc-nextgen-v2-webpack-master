import logoPaigh from '../../../../assets/images/geosur/logo_paigh.png';
import cafLogoSp from '../../../../assets/images/geosur/caf_logo_sp.png';
import geosurSp from '../../../../assets/images/geosur/geosur_sp.png';

export const template = {
  theme: 'ExtJSNeptune',
  cssFallback: true,
  analytics: {
    matomo: {
      baseUrl: '//edcintl.cr.usgs.gov/piwik/',
      id: '14',
    },
    google: {
      id: 'UA-21406562-5',
    },
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
      content: `<div id='header-logo-left'><a href='https://www.geosur.info' target='_blank'><img src='${geosurSp}'></a></div><div id='header-logo-right'><a href='https://www.caf.com/' target='_blank'><img src='${cafLogoSp}' style='padding: 0px 10px'></a><a href='http://www.aag.org/paigh' target='_blank'><img src='${logoPaigh}'></a></div><h1 class='main'></h1>`,
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
            tooltip: 'GEOSUR - Inicio',
            icon: 'fa-home',
            width: 30,
          },
          {
            name: 'cPopupButtonTool',
            import: 'js.tools.shared.cPopupButtonTool.cPopupButtonTool',
            add: true,
            showOnFirstLoad: false,
            popupTitle: 'Anuncio',
            popupHeight: 610,
            popupWidth: 600,
            popupBody: '<p></p>',
            tooltip: 'Anuncio',
            text: 'Anuncio',
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
      title: 'TDC',
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
              title: 'Contenido',
              name: 'cTocContentsTab',
              import: 'js.tools.shared.cTocContentsTab.cTocContentsTab',
              blocks: [
                {
                  block: 'center',
                  add: true,
                  width: '100%',
                  height: '100%',
                  title: 'Mapas',
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
                        tooltip: 'Añadir capas WMS',
                      },
                      {
                        name: 'cRemoveWMSLayerTool',
                        import: 'js.tools.shared.cRemoveWMSLayerTool.cRemoveWMSLayerTool',
                        add: false,
                        tooltip: 'Remover capas WMS',
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
                        title: 'Añadir capas WMS',
                        progressMessage: 'Cargando capas ...',
                        additionalLayersTitle: 'Capas adicionales',
                        wmsLayersTitle: 'Capas WMS',
                        getLayersBtnTxt: 'Obtener capas',
                        addSelectedLayersBtnTxt: 'Adicionar capas seleccionadas',
                        wmsLayerTitleTxt: 'Capas',
                        wmsUrlFieldLbl: 'URL:',
                        titleTxtFieldLbl: 'Título',
                        legendStyleTxtFieldLbl: 'Estilo leyenda',
                        legendUrlTxtFieldLbl: 'URL leyenda',
                        legendTitleHereTitle: 'Título leyenda',
                        errorRequestMessage: 'Parámetro de solicitud inválido',
                        errorServiceMessage: 'Parámetro de servicio inválido',
                        errorCapabilitiesRequestMessage: 'Solicitud de GetCapabilities inválido',
                        errorUrlRequestMessage: 'Solicitud no pudo ser completada. Por favor revise el URL.<br> Cóodigo de estado: ',
                        errorDuplicateLayersMessage: 'Algunas capas seleccionadas ya existen en',
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
                        title: 'Remover capas WMS',
                        progressMessage: 'Removiendo capas ...',
                        wmsLayerTitleTxt: 'Capas',
                        removeSelectedLayersBtnTxt: 'Remover capas seleccionadas',
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
                      progressMessage: 'Cargando TDC ...',
                    },
                    {
                      name: 'cTransparency',
                      import: 'js.tools.shared.cTransparency.cTransparency',
                      add: true,
                      width: '90%',
                      height: '5%',
                      fieldLabel: 'Transparencia (Capa resaltada)',
                    },
                    {
                      name: 'cLayersToc',
                      import: 'js.tools.shared.cLayersToc.cLayersToc',
                      add: false,
                      progressMessage: 'Cargando TDC ...',
                    },
                  ],
                },
              ],
            },
            {
              add: true,
              title: 'Leyenda',
              name: 'cTocLegendTab',
              import: 'js.tools.shared.cTocLegendTab.cTocLegendTab',
              width: 335,
              progressMessage: 'Cargando Leyenda ...',
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
            tooltip: 'Extensión máxima',
          },
          {
            name: 'cPanTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cPanTool.cPanTool',
            cssClass: '',
            tooltip: 'Deslizamiento',
          },
          {
            name: 'cExtentDragBoxTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cExtentDragBoxTool.cExtentDragBoxTool',
            cssClass: '',
            tooltip: 'Acercar',
          },
          {
            name: 'cRevertExtentTool',
            title: '',
            add: true,
            import: 'js.tools.shared.cRevertExtentTool.cRevertExtentTool',
            cssClass: '',
            tooltip: 'Extensión anterior',
          },
          {
            name: 'cIdentifyTool',
            title: '',
            add: false,
            import: 'js.tools.shared.cIdentifyTool.cIdentifyTool',
            cssClass: '',
            tooltip: 'Identificar',
          },
          {
            name: 'cLandsatLook',
            import: 'js.tools.shared.cLandsatLook.cLandsatLook',
            title: '',
            add: false,
            cssClass: '',
            tooltip: 'Abrir LandsatLook usando la extensión del mapa actual. Requiere una escala mínima de 1:1M',
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
            tooltip: 'Guardar',
            items: [
              {
                name: 'cMenuLabel',
                add: true,
                import: 'js.tools.shared.cMenuLabel.cMenuLabel',
                label: 'Descargar:',
              },
              {
                name: 'cMapDownloadsMenuItem',
                add: false,
                import: 'js.tools.shared.cMapDownloadsMenuItem.cMapDownloadsMenuItem',
                type: 'wcs',
                format: 'image/geotiff',
                text: 'GeoTiff (Datos originales)',
              },
              {
                name: 'cMapDownloadsMenuItem',
                add: false,
                import: 'js.tools.shared.cMapDownloadsMenuItem.cMapDownloadsMenuItem',
                type: 'wms',
                format: 'image/geotiff',
                text: 'Vista del mapa (GeoTIFF)',
              },
              {
                name: 'cMapDownloadsMenuItemPNG',
                add: true,
                import: 'js.tools.shared.cMapDownloadsMenuItemPNG.cMapDownloadsMenuItemPNG',
                type: 'wms',
                format: 'image/png',
                text: 'Vista del mapa (PNG)',
                progressMessage: 'Generando descarga ...',
              },
            ],
          },
          {
            name: 'cPopupButtonTool',
            import: 'js.tools.shared.cPopupButtonTool.cPopupButtonTool',
            add: true,
            popupTitle: 'Bienvenidos al Visualizador Regional de Mapas (VRM) de GEOSUR',
            popupBody:
              "<p>El Programa GEOSUR, liderado por CAF y el Instituto Panamericano de Geografía e Historia (IPGH), coloca a disposición del público información geográfica de América Latina y el Caribe, útil para planificar y analizar actividades de desarrollo. Los servicios Web desarrollados o auspiciados por GEOSUR ofrecen acceso a mapas, fotos aéreas y datos geográficos elaborados por las agencias participantes en temas como topografía, medio ambiente e infraestructura, entre muchos otros.</p><p>Más información en los enlaces siguientes: </p><p><a href='/geosur/index.php/es'>Programa GEOSUR </a><br><a href='/geosur/index.php/es/ejes-de-integracion-y-desarrollo'>Ejes de Integración y Desarrollo - Mapas</a><br><a href='/geosur/index.php/es/datos-disponibles/datos'>Centro de Descarga de Datos</a><br><a href='/geosur/index.php/es/nota-legal'>Nota Legal</a></p>",
            popupHeight: 550,
            popupWidth: 600,
            tooltip: 'Más información',
            text: 'Más información',
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
          zoomInTip: 'Acercar',
          zoomOutTip: 'Alejar',
          progressMessage: 'Cargando Capas ...',
          interactions: ['pan', 'zoom'],
          mouseCoordinates: {
            show: true,
            projection: 'EPSG:4326',
          },
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
          title: 'Identificar - Resultados',
          height: 600,
          width: '100%',
          cssClass: '',
        },
      ],
    },
  ],
  host: 'www.geosur.info',
};
