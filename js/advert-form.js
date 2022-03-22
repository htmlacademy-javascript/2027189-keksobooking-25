import {getElementFromDocument} from './getterGenerationTemplate.js';

const advertForm = getElementFromDocument('.ad-form');

const pristineForm = new Pristine(advertForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__message'
});

const roomsField = getElementFromDocument('#room_number');
const capacityField = getElementFromDocument('#capacity');

const roomsOption = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const checkValidRooms = () => roomsOption[roomsField.value].includes(Number(capacityField.value));

const getInvalidMessageRoom = () => 'Количество комнат не подходит для количества гостей';
const getInvalidMessageCapacity = () => 'Количество гостей не подходит для количества комнат';

const validateCapacityField = () => pristineForm.addValidator(capacityField, checkValidRooms, getInvalidMessageCapacity);
const validateRoomsField = () => pristineForm.addValidator(roomsField, checkValidRooms, getInvalidMessageRoom);

validateCapacityField();
validateRoomsField();

advertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValidForm = pristineForm.validate();
  if (isValidForm) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
