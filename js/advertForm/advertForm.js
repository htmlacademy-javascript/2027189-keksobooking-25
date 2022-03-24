import {getElementFromDocument} from '../getterGenerationTemplate.js';
import {setInvalidMessageRoom, setInvalidMessageCapacity} from './advertFormMessages.js';
import {configPristineAdvertFrom} from './advertFormPristineConfig.js';
import {getValidStatus} from './gettersAdvertForm.js';
import {getRoomsOption} from '../constants.js';

const setValidateAdvertForm = () => {
  const advertForm = getElementFromDocument('.ad-form');
  const roomsField = getElementFromDocument('#room_number');
  const capacityField = getElementFromDocument('#capacity');
  const pristineForm = new Pristine(advertForm, configPristineAdvertFrom());

  const checkValidRooms = () => getValidStatus(getRoomsOption(), roomsField, capacityField);
  pristineForm.addValidator(roomsField, checkValidRooms, setInvalidMessageRoom);
  pristineForm.addValidator(capacityField, checkValidRooms, setInvalidMessageCapacity);

  roomsField.addEventListener('change', () => {
    pristineForm.validate(capacityField);
  });

  capacityField.addEventListener('change', () => {
    pristineForm.validate(roomsField);
  });

  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(pristineForm.validate());
  });
};

export {setValidateAdvertForm};
