import {getNameApartmentTypeList} from './constants.js';
import {setStylesList} from './utilStylesGenerationTemplate.js';
import {getElementFromDocument, getTemplateFromDocument} from './getterGenerationTemplate.js';
import {
  setTextContent,
  setAvatar,
  setApartmentPhotos,
  setFacilitiesType,
  setApartmentType,
} from './setterGenerationTemplate.js';

const createTemplateCards = (data, placeClass) => {
  const advertsList = getElementFromDocument(placeClass);
  setStylesList(advertsList); // TODO для украшательства

  const card = getTemplateFromDocument('#card', '.popup');
  const carsFragment = document.createDocumentFragment();

  data.forEach(({author, offer}) => {
    const newCard = card.cloneNode(true);

    setTextContent(newCard, '.popup__title', offer.title);
    setTextContent(newCard, '.popup__text--address', offer.address);
    setTextContent(newCard, '.popup__text--price', `${offer.price} ₽/ночь`);
    setTextContent(newCard, '.popup__text--capacity',  `${offer.rooms} комнаты для ${offer.guests} гостей`);
    setTextContent(newCard, '.popup__text--time',  `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
    setTextContent(newCard, '.popup__description',  offer.description);
    setAvatar(newCard, '.popup__avatar', author.avatar);
    setApartmentPhotos(newCard,'.popup__photos', offer.photos);
    setFacilitiesType(newCard, '.popup__features', offer.features);
    setApartmentType(newCard, '.popup__type', offer.type, getNameApartmentTypeList());

    carsFragment.append(newCard);
  });

  advertsList.append(carsFragment);
};

export {createTemplateCards};
