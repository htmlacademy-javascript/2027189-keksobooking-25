import {getElementFromDocument} from '../../getterGenerationTemplate.js';
import {setInvalidMessageRoom, setInvalidMessageCapacity} from './advertFormMessages.js';
import {configPristineAdvertFrom} from './advertFormPristineConfig.js';
import {getValidStatus, getValueSelectedElement} from './gettersAdvertForm.js';
import {getRoomsOption, getMinPriceApartmentTypeList, getMaxPriceApartmentTypeList} from '../../constants.js';
import {
  setDisabledElements,
  setActiveElements,
  toggledDisabledModifierClass,
} from '../settersForms.js';

const advertForm = getElementFromDocument('.ad-form');
const advertFormDisabledClasses = 'ad-form--disabled';
const advertFormFields = advertForm.querySelectorAll('fieldset');

const checkValidCapacity = (pristineForm, roomsField, capacityField) => {
  const checkValidRooms = () => getValidStatus(getRoomsOption(), roomsField, capacityField);
  pristineForm.addValidator(roomsField, checkValidRooms, setInvalidMessageRoom);
  pristineForm.addValidator(capacityField, checkValidRooms, setInvalidMessageCapacity);

  roomsField.addEventListener('change', () => {
    pristineForm.validate(capacityField);
  });
  capacityField.addEventListener('change', () => {
    pristineForm.validate(roomsField);
  });
};

const checkValidPrice = (pristineForm, priceField, apartmentTypeField) => {
  const getMinPriceField = () => Number(priceField.min);
  const checkPriceField = (value) => Number(value) >= getMinPriceField() && Number(value) <= getMaxPriceApartmentTypeList();
  const setInvalidMessagePrice = (value) => Number(value) < getMinPriceField() ? `Минимальное значение ${getMinPriceField()}` : 'Максимальное значение 100 000';

  priceField.setAttribute('max', getMaxPriceApartmentTypeList());
  pristineForm.addValidator(priceField, checkPriceField, setInvalidMessagePrice);

  const setDataPriceField = (priceElement, priceValue) => {
    priceElement.placeholder = getMinPriceApartmentTypeList()[priceValue];
    priceElement.setAttribute('min', getMinPriceApartmentTypeList()[priceValue]);
  };

  setDataPriceField(priceField, getValueSelectedElement(apartmentTypeField));
  apartmentTypeField.addEventListener('change', (evt) => {
    setDataPriceField(priceField, evt.target.value);
    pristineForm.validate(priceField);
  });
};

const checkValidTime = (pristineForm, timeInField, timeOutField) => {
  timeInField.addEventListener('change', (evt) => {
    timeOutField.value = evt.target.value;
  });
  timeOutField.addEventListener('change', (evt) => {
    timeInField.value = evt.target.value;
  });
};

const setValidateAdvertForm = () => {
  const roomsField = getElementFromDocument('#room_number');
  const capacityField = getElementFromDocument('#capacity');
  const apartmentTypeField = getElementFromDocument('#type');
  const priceField = getElementFromDocument('#price');
  const timeInField = getElementFromDocument('#timein');
  const timeOutField = getElementFromDocument('#timeout');
  const pristineForm = new Pristine(advertForm, configPristineAdvertFrom());

  checkValidCapacity(pristineForm, roomsField, capacityField);
  checkValidPrice(pristineForm, priceField, apartmentTypeField);
  checkValidTime(pristineForm, timeInField, timeOutField);


  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(pristineForm.validate());
  });
};

const setDisabledAdvertForm = () => {
  toggledDisabledModifierClass(advertForm, advertFormDisabledClasses, true);
  setDisabledElements(advertFormFields);
};

const setActiveAdvertForm = () => {
  toggledDisabledModifierClass(advertForm, advertFormDisabledClasses, false);
  setActiveElements(advertFormFields);
};

export {
  setValidateAdvertForm,
  setDisabledAdvertForm,
  setActiveAdvertForm,
};
