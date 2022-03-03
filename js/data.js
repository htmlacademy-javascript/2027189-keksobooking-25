import {getRandomUnsignedInteger, getRandomUnsignedFloat} from './util.js';
import {getRandomItemFromArray, shuffleElements} from './utilArray.js';
import {
  getApartmentInfoList,
  getSimilarAdvertsCount,
  getApartmentTypeList,
  getApartmentCheckinCheckoutList,
  getFacilitiesTypeList,
  getApartmentPhotosList,
} from './constants.js';

const getAvatarAdvertPath = (indexItem) => `img/avatars/user${indexItem.toString().padStart(2, '0')}.png`;

const getFacilities = (facilities) => {
  const maxCountFacilities = getRandomUnsignedInteger(1, facilities.length);
  return shuffleElements(facilities).slice(facilities.length - maxCountFacilities);
};

const getPhotos = (photos) => {
  const totalPhotos = Array.from({length: getRandomUnsignedInteger(1, 5)}, () => [].concat(photos));
  return [].concat(...totalPhotos);
};

const createAdvert = (avatarPath, advertInfo) => {
  const locationLat = getRandomUnsignedFloat(35.65000, 35.70000, 5);
  const locationLng = getRandomUnsignedFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: avatarPath,
    },
    offer: {
      title: advertInfo.title,
      address: `${locationLat}, ${locationLng}`,
      price: getRandomUnsignedInteger(1, 5000),
      type: getRandomItemFromArray(getApartmentTypeList()),
      rooms: getRandomUnsignedInteger(1, 10),
      guests: getRandomUnsignedInteger(1, 20),
      checkin: getRandomItemFromArray(getApartmentCheckinCheckoutList()),
      checkout: getRandomItemFromArray(getApartmentCheckinCheckoutList()),
      features: getFacilities(getFacilitiesTypeList()),
      description: advertInfo.description,
      photos: getPhotos(getApartmentPhotosList()),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    }
  };
};

const createSimilarAdverts = () => {
  const similarAdverts = [];
  const apartmentInfoList = getApartmentInfoList();

  for (let i = 0; i < getSimilarAdvertsCount(); i++) {
    const avatarPath = getAvatarAdvertPath(i + 1);
    const advertInfo = apartmentInfoList[i];
    similarAdverts[i] = createAdvert(avatarPath, advertInfo);
  }

  return similarAdverts;
};

export {createSimilarAdverts};
