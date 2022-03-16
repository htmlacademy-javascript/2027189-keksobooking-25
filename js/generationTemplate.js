import {getNameApartmentTypeList} from './constants.js';
import {getTemplateFromDocument} from './getterGenerationTemplate.js';
import {
  setTextContent,
  setAvatar,
  setApartmentPhotos,
  setFacilitiesType,
  setApartmentType,
} from './setterGenerationTemplate.js';

const createTemplateCard = (author, offer) => {
  const cardTemplate = getTemplateFromDocument('#card', '.popup');
  const cloneCardTemplate = cardTemplate.cloneNode(true);
  setTextContent(cloneCardTemplate, '.popup__title', offer.title);
  setTextContent(cloneCardTemplate, '.popup__text--address', offer.address);
  setTextContent(cloneCardTemplate, '.popup__text--price', `${offer.price} ₽/ночь`);
  setTextContent(cloneCardTemplate, '.popup__text--capacity',  `${offer.rooms} комнаты для ${offer.guests} гостей`);
  setTextContent(cloneCardTemplate, '.popup__text--time',  `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  setTextContent(cloneCardTemplate, '.popup__description',  offer.description);
  setAvatar(cloneCardTemplate, '.popup__avatar', author.avatar);
  setApartmentPhotos(cloneCardTemplate,'.popup__photos', offer.photos);
  setFacilitiesType(cloneCardTemplate, '.popup__features', offer.features);
  setApartmentType(cloneCardTemplate, '.popup__type', offer.type, getNameApartmentTypeList());
  return cloneCardTemplate;
};

const createTemplateCards = (cardData) => {
  const carsFragment = document.createDocumentFragment();

  cardData.forEach(({author, offer}) => {
    carsFragment.append(createTemplateCard(author, offer));
  });

  return carsFragment;
};

export {createTemplateCards, createTemplateCard};
