import {getRandomUnsignedInteger} from './util.js';

const getRandomItemFromArray = (array) => array[getRandomUnsignedInteger(0, array.length - 1)];

const shuffleElements = (array) => array.slice().sort(() => Math.random() - 0.5);

export {
  getRandomItemFromArray,
  shuffleElements,
};
