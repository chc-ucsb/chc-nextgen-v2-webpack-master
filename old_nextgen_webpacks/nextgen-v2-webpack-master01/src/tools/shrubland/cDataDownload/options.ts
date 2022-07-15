import { Dictionary } from 'src/@types';

const MAXAREA = 350000; // kms^2

export const options: Dictionary = {
  addQueueLocation: '/viewerRest/addQueue.php',
  fixedDownloadBox: false,
  alwaysDisplayRedirect: false,
  alwaysDisplayDownloadPanel: false,
  redirectButton: false,
  redirectText:
    `<b>NOTICE:</b><br> The extent of your download box<br>is too large. (Greater than ` +
    `${MAXAREA}` +
    `<br>square km).
  <br><br>Please select a smaller area of<br>interest or go <a href="/data" target="_blank">here</a><br>to download a complete<br>dataset.`,
  maxDownloadBoxHeight: 274, // kilometers
  maxDownloadBoxWidth: 255, // kilometers
  earthRadius: 6371, // kilometers
  maxArea: MAXAREA,
  noBox:
    'A box has not been drawn yet. <br><br> To draw one, please select the <br>Data Download tool <i class="fa fa-arrow-circle-o-down"></i><br>in the map window toolbar.',
  geoserver: 'https://dmsdata.cr.usgs.gov/geoserver/wfs?',
  shapeFile: 'viewer_layers_extent_shrub_20200522',
  workspace: 'mrlc_viewer_layers_extent_shrub_20200522',
};
