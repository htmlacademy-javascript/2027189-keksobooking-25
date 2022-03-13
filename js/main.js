import {createTemplateCards} from './generationTemplate.js';
import {createSimilarAdverts} from './data.js';

createTemplateCards(createSimilarAdverts(), '#map-canvas'); // TODO временно выводим вместо карты

