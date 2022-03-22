import {createTemplateCard} from './generationTemplate.js';
import {createSimilarAdverts} from './data.js';
import {getElementFromDocument} from './getterGenerationTemplate.js';
import './advert-form.js';


const placeExample = getElementFromDocument('#map-canvas');
const [{author, offer}] = createSimilarAdverts();

placeExample.append(createTemplateCard(author, offer));
