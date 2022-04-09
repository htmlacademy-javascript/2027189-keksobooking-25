import {setActiveForms} from '../forms/forms.js';
import {getElementFromDocument} from '../getterGenerationTemplate.js';
import {createSimilarAdverts} from '../data.js';
import {
  getMapZoom,
  getViewCenter,
  getMapMainIconMarkerConfig,
  getMapIconMarkerConfig
} from './mapConfig.js';
import {createTemplateCard} from '../generationTemplate.js';

const getLat = (markerElement) => markerElement.getLatLng().lat;
const getLng = (markerElement) => markerElement.getLatLng().lng;

const getRoundLat = (markerElement, roundNum = 5) => getLat(markerElement).toFixed(roundNum);
const getRoundLng = (markerElement, roundNum = 5) => getLng(markerElement).toFixed(roundNum);

const setAddressField = (addressField, markerElement) => (addressField.value = `${getRoundLat(markerElement)}, ${getRoundLng(markerElement)}`);

const setMap = () => L.map('map-canvas').on('load', () => {
  setActiveForms();
}).setView(getViewCenter(), getMapZoom());
const setTileLayer = (mapElement) => L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapElement);
const setIcon = (iconConfig) => L.icon(iconConfig);
const setMarker = (mapElement, markerConfig, markerLatLng) => L.marker(markerLatLng, markerConfig).addTo(mapElement);

const initMap = () => {
  const map = setMap();
  setTileLayer(map);
  const mapMainMarker = setMarker(map,{
    draggable: true,
    icon: setIcon(getMapMainIconMarkerConfig()),
  }, getViewCenter());

  const addressField = getElementFromDocument('#address');
  setAddressField(addressField, mapMainMarker);
  mapMainMarker.on('moveend', (evt) => {
    setAddressField(addressField, evt.target);
  });

  createSimilarAdverts().forEach(({location, author, offer}) => {
    setMarker(map, {icon: setIcon(getMapIconMarkerConfig())}, location).bindPopup(createTemplateCard(author, offer));
  });
};

export {initMap};
