import {setDisabledAdvertForm, setActiveAdvertForm} from './advertForm/advertForm.js';
import {setDisabledMapFiltersForm, setActiveMapFiltersForm} from './mapFiltersForm/mapFiltersForm.js';

const setDisabledForms = () => {
  setDisabledAdvertForm();
  setDisabledMapFiltersForm();
};

const setActiveForms = () => {
  setActiveAdvertForm();
  setActiveMapFiltersForm();
};

export {
  setDisabledForms,
  setActiveForms,
};
