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

  advertForm.addEventListener('submit', (evt) => {
    if (!pristineForm.validate()) {
      evt.preventDefault();
    }
  });
};

export {setValidateAdvertForm};
