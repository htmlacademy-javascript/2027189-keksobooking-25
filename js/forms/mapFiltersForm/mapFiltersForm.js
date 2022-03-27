import {getElementFromDocument} from '../../getterGenerationTemplate.js';
import {
  setDisabledFields,
  setDisabledModifierClass,
  setActiveModifierClass,
  setActiveFields,
} from '../settersForms.js';

const mapFiltersForm = getElementFromDocument('.map__filters');
const mapFiltersFormSelects = mapFiltersForm.querySelectorAll('.map__filter');
const mapFiltersFormFields = mapFiltersForm.querySelectorAll('fieldset');

const setDisabledMapFiltersForm = () => {
  setDisabledModifierClass(mapFiltersForm);
  setDisabledFields(mapFiltersFormSelects);
  setDisabledFields(mapFiltersFormFields);
};

const setActiveMapFiltersForm = () => {
  setActiveModifierClass(mapFiltersForm);
  setActiveFields(mapFiltersFormSelects);
  setActiveFields(mapFiltersFormFields);
};

export {
  setDisabledMapFiltersForm,
  setActiveMapFiltersForm,
};
