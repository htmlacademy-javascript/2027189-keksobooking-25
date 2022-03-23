import {createTemplateCard} from './generationTemplate.js';
import {createSimilarAdverts} from './data.js';
import {getElementFromDocument} from './getterGenerationTemplate.js';
import {setValidateAdvertForm} from './advertForm/advertForm.js';


const placeExample = getElementFromDocument('#map-canvas');
const [{author, offer}] = createSimilarAdverts();

placeExample.append(createTemplateCard(author, offer));

setValidateAdvertForm();
