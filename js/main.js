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

const shuffleElements = (array) => array.slice().sort(() => Math.random() - 0.5);

const APARTMENT_INFO = [
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
  {
    title: 'Hampton Inn Miami-Coconut Grove/Coral Gables',
    description: 'Этот отель расположен в старинном живописном районе Коконат-Гроув в предместье Майами, всего в 10 км от парка Хисторик Вирджиния Ки Бич.',
  },
  {
    title: 'SpringHill Suites Miami Airport South',
    description: 'Отель SpringHill Suites Miami Airport South расположен в 10 минутах езды от международного аэропорта Майами. К услугам гостей бесплатный трансфер от/до аэропорта и трансфер в радиусе 3,2 км от отеля.',
  },
  {
    title: 'Nuvo Suites Hotel - Miami / DoralОткроется в новом окне',
    description: 'Эти современные люксы расположены между 2 большими торговыми центрами, в 13 минутах езды от международного аэропорта Майами и 27 минутах езды от города Майами-Бич.',
  },
  {
    title: 'Sonesta Miami Airport',
    description: 'Just 800 metres from Miami International Airport, Sonesta Miami Airport in Miami, Florida offers convenient services such as free, 24-hour airport shuttle service and free Wi-Fi in all guest rooms.',
  },
  {
    title: 'Hampton Inn & Suites Miami Wynwood Design District, FL',
    description: 'Отель Miami Midtown, FL сети Hampton Inn & Suites расположен в районе Дизайн-Дистрикт в Майами, в 7 км от центра и в 8 км от порта, обслуживающего круизные суда.',
  }
];

const SIMILAR_ADVERTS_COUNT = 10;

const APARTMENT_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const APARTMENT_CHECKIN_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FACILITIES_TYPE = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const APARTMENT_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomItemFromArray = (array) => array[getRandomUnsignedInteger(0, array.length - 1)];

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
      type: getRandomItemFromArray(APARTMENT_TYPE),
      rooms: getRandomUnsignedInteger(1, 10),
      guests: getRandomUnsignedInteger(1, 20),
      checkin: getRandomItemFromArray(APARTMENT_CHECKIN_CHECKOUT),
      checkout: getRandomItemFromArray(APARTMENT_CHECKIN_CHECKOUT),
      features: getFacilities(FACILITIES_TYPE),
      description: advertInfo.description,
      photos: getPhotos(APARTMENT_PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    }
  };
};

const createSimilarAdverts = () => {
  const similarAdverts = [];

  for (let i = 0; i < SIMILAR_ADVERTS_COUNT; i++) {
    const avatarPath = getAvatarAdvertPath(i + 1);
    const advertInfo = APARTMENT_INFO[i];
    similarAdverts[i] = createAdvert(avatarPath, advertInfo);
  }

  return similarAdverts;
};

// eslint-disable-next-line no-console
console.log(createSimilarAdverts());
