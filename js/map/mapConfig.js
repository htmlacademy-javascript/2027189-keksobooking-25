const VIEW_CENTER = {
  lat: 35.6895,
  lng: 139.69171,
};

const MAP_ZOOM = 12;

const mapMainIconMarkerConfig = {
  iconUrl: '../img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
};

const mapIconMarkerConfig = {
  iconUrl: '../img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
};

const getViewCenter = () => VIEW_CENTER;
const getMapZoom = () => MAP_ZOOM;
const getMapMainIconMarkerConfig = () => mapMainIconMarkerConfig;
const getMapIconMarkerConfig = () => mapIconMarkerConfig;

export {
  getViewCenter,
  getMapZoom,
  getMapMainIconMarkerConfig,
  getMapIconMarkerConfig,
};
