import {createTemplateCard} from './generationTemplate.js';
import {createSimilarAdverts} from './data.js';
import {getElementFromDocument} from './getterGenerationTemplate.js';

const placeExample = getElementFromDocument('#map-canvas');
placeExample.append(createTemplateCard(createSimilarAdverts()[0].author, createSimilarAdverts()[0].offer));
