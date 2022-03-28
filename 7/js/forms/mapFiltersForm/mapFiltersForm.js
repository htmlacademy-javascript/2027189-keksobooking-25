import {getElementFromDocument} from '../../getterGenerationTemplate.js';
import {
  setDisabledElements,
  setDisabledModifierClass,
  setActiveModifierClass,
  setActiveElements,
} from '../settersForms.js';

const mapFiltersForm = getElementFromDocument('.map__filters');
const mapFiltersFormSelects = mapFiltersForm.querySelectorAll('.map__filter');
const mapFiltersFormFields = mapFiltersForm.querySelectorAll('fieldset');

const setDisabledMapFiltersForm = () => {
  setDisabledModifierClass(mapFiltersForm);
  setDisabledElements(mapFiltersFormSelects);
  setDisabledElements(mapFiltersFormFields);
};

const setActiveMapFiltersForm = () => {
  setActiveModifierClass(mapFiltersForm);
  setActiveElements(mapFiltersFormSelects);
  setActiveElements(mapFiltersFormFields);
};

export {
  setDisabledMapFiltersForm,
  setActiveMapFiltersForm,
};
