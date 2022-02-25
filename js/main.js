const checkCorrectNumber = (value) => {
  if (!Number.isFinite(value)) {
    throw new RangeError('Числа должны быть положительными или 0.');
  }

  if (value < 0) {
    return 0;
  }

  if (value > Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }

  return value;
};

const getRandomNumber = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => {
  let minCheckedNum = checkCorrectNumber(minNum);
  let maxCheckedNum = checkCorrectNumber(maxNum);
  const checkedAccuracy = checkCorrectNumber(accuracy);

  [minCheckedNum, maxCheckedNum] = minCheckedNum > maxCheckedNum ? [maxCheckedNum, minCheckedNum] : [minCheckedNum, maxCheckedNum];

  const diff = maxCheckedNum - minCheckedNum;
  const random = Math.random() * 1.000000000000001; // чтобы могла выпасть единица
  const factor = Math.pow(10, checkedAccuracy);

  return Math.round((random * diff + minCheckedNum) * factor) / factor;
};

const  getRandomUnsignedInteger = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER) => getRandomNumber(minNum, maxNum);

const getRandomUnsignedFloat = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => getRandomNumber(minNum, maxNum, accuracy);

const INFO_ADVERTS = [
  {
    title: 'Onyx Hotel Miami AirportОткроется в новом окне',
    description: 'Отель расположен в городе Майами-Спрингс, штат Флорида, в 4,8 км от международного аэропорта Майами и в 3,2 км от поля для гольфа Melreese.',
  },
  {
    title: 'Hilton Garden Inn Miami Dolphin MallОткроется в новом окне',
    description: 'Отель Hilton Garden Inn Miami Dolphin Mall с сезонным открытым бассейном и фитнес-центром расположен в городе Свитуотер, в 15 км от Майами. На территории работает бар.',
  },
  {
    title: 'Sleep Inn Miami Airport',
    description: 'В номерах отеля Sleep Inn Miami Airport есть кофеварка. В числе других удобств — гладильные принадлежности и радио. Стойка регистрации в отеле Sleep Inn Miami Airport работает круглосуточно.',
  },
  {
    title: 'Comfort Inn & Suites Miami International Airport',
    description: 'Отель Comfort Inn & Suites Miami International Airport расположен в Майами, в 8 км от бейсбольного стадиона «Марлинс-парк».',
  },
  {
    title: 'Holiday Inn Miami International Airport, an IHG HotelОткроется в новом окне',
    description: 'В отеле предоставляются многочисленные бесплатные услуги, в том числе круглосуточный трансфер до Международного аэропорта Майами и работает ресторан.',
  },
];

const SIMILAR_ADVERTS_COUNT = 10;

const TYPE_ADVERTS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_CHECKOUT_ADVERTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_ADVERTS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ADVERTS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const locationLat = getRandomUnsignedFloat(35.65000, 35.70000, 5);
const locationLng = getRandomUnsignedFloat(139.70000, 139.80000, 5);

const getRandomElement = (element) => element[getRandomUnsignedInteger(0, element.length - 1)];

const getAvatarAdvertPath = () => {
  const randomNum = getRandomUnsignedInteger(1, 10);
  return `img/avatars/user${randomNum !== 10 ? `0${randomNum}` : randomNum}.png`;
};

const getFeatures = (features) => {
  const featuresList = [];
  const maxCountFeatures = getRandomUnsignedInteger(1, features.length - 1);
  let countContinue = 0;

  for (let i = 0; i < maxCountFeatures; i++) {
    const randomFeature = getRandomElement(features);

    if (featuresList.some((value) => value.includes(randomFeature))) {
      countContinue++;
      continue;
    }

    featuresList[i - countContinue] = randomFeature;
  }

  return featuresList;
};

const getPhotos = (photos) => {
  const photosList = [];
  const maxCountPhotos = getRandomUnsignedInteger(1, 10);

  for (let i = 0; i < maxCountPhotos; i++) {
    photosList[i] = getRandomElement(photos);
  }

  return photosList;
};

const createAdvert = () => ({
  author: {
    avatar: getAvatarAdvertPath(),
  },
  offer: {
    title: getRandomElement(INFO_ADVERTS).title,
    address: `${locationLat}, ${locationLng}`,
    price: getRandomUnsignedInteger(1, 5000),
    type: getRandomElement(TYPE_ADVERTS),
    rooms: getRandomUnsignedInteger(1, 10),
    guests: getRandomUnsignedInteger(1, 20),
    checkin: getRandomElement(CHECKIN_CHECKOUT_ADVERTS),
    checkout: getRandomElement(CHECKIN_CHECKOUT_ADVERTS),
    features: getFeatures(FEATURES_ADVERTS),
    description: getRandomElement(INFO_ADVERTS).description,
    photos: getPhotos(PHOTOS_ADVERTS),
  },
  location: {
    lat: locationLat,
    lng: locationLng,
  }
});

const similarAdverts = Array.from({length: SIMILAR_ADVERTS_COUNT}, createAdvert);

// eslint-disable-next-line no-console
console.log(similarAdverts);
