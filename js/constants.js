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

const APARTMENT_NAME_TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const MIN_PRICE_FOR_APARTMENT_TYPE = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const MAX_PRICE_FOR_APARTMENT_TYPE = 100000;

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

const ROOMS_OPTION = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const getApartmentInfoList = () => APARTMENT_INFO;
const getSimilarAdvertsCount = () => SIMILAR_ADVERTS_COUNT;
const getApartmentTypeList = () => APARTMENT_TYPE;
const getNameApartmentTypeList = () => APARTMENT_NAME_TYPE;
const getMinPriceApartmentTypeList = () => MIN_PRICE_FOR_APARTMENT_TYPE;
const getMaxPriceApartmentTypeList = () => MAX_PRICE_FOR_APARTMENT_TYPE;
const getApartmentCheckinCheckoutList = () => APARTMENT_CHECKIN_CHECKOUT;
const getFacilitiesTypeList = () => FACILITIES_TYPE;
const getApartmentPhotosList = () => APARTMENT_PHOTOS;
const getRoomsOption = () => ROOMS_OPTION;

export {
  getApartmentInfoList,
  getSimilarAdvertsCount,
  getApartmentTypeList,
  getApartmentCheckinCheckoutList,
  getFacilitiesTypeList,
  getApartmentPhotosList,
  getNameApartmentTypeList,
  getRoomsOption,
  getMinPriceApartmentTypeList,
  getMaxPriceApartmentTypeList,
};
