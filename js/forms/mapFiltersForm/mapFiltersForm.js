import {getElementFromDocument} from '../../getterGenerationTemplate.js';
import {
  setDisabledElements,
  setActiveElements,
  toggledDisabledModifierClass,
} from '../settersForms.js';

const mapFiltersForm = getElementFromDocument('.map__filters');
const mapFiltersFormDisabledClasses = 'map__filters--disabled';
const mapFiltersFormSelects = mapFiltersForm.querySelectorAll('.map__filter');
const mapFiltersFormFields = mapFiltersForm.querySelectorAll('fieldset');

const setDisabledMapFiltersForm = () => {
  toggledDisabledModifierClass(mapFiltersForm, mapFiltersFormDisabledClasses, true);
  setDisabledElements(mapFiltersFormSelects);
  setDisabledElements(mapFiltersFormFields);
};

const setActiveMapFiltersForm = () => {
  toggledDisabledModifierClass(mapFiltersForm, mapFiltersFormDisabledClasses, false);
  setActiveElements(mapFiltersFormSelects);
  setActiveElements(mapFiltersFormFields);
};

export {
  setDisabledMapFiltersForm,
  setActiveMapFiltersForm,
};
