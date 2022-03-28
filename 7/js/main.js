import {createTemplateCard} from './generationTemplate.js';
import {createSimilarAdverts} from './data.js';
import {getElementFromDocument} from './getterGenerationTemplate.js';
import {setValidateAdvertForm} from './forms/advertForm/advertForm.js';
import {setDisabledForms, setActiveForms} from './forms/forms.js';


const placeExample = getElementFromDocument('#map-canvas');
const [{author, offer}] = createSimilarAdverts();

placeExample.append(createTemplateCard(author, offer));

setDisabledForms();
setActiveForms();
setValidateAdvertForm();

