const checkCorrectNumber = (value) => {
  if (Number.isNaN(value) === true || typeof value !== 'number' || Number.isFinite(value) !== true) {
    throw new RangeError('Числа должны быть положительными или 0.');
  }

  if (value < 0) {
    value = 0;
  } else if (value > Number.MAX_SAFE_INTEGER) {
    value = Number.MAX_SAFE_INTEGER;
  }

  return value;
};

const getRandomNumber = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => {
  try {
    minNum = checkCorrectNumber(minNum);
    maxNum = checkCorrectNumber(maxNum);
    accuracy = checkCorrectNumber(accuracy);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.name);
    // eslint-disable-next-line no-console
    console.log(error.message);
  }


  if (minNum > maxNum) {
    const currentNum = minNum;
    minNum = maxNum;
    maxNum = currentNum;
  }

  const diff = maxNum - minNum;
  const random = Math.random() * 1.000000000000001; // чтобы могла выпасть единица
  const factor = Math.pow(10, accuracy);

  return Math.round((random * diff + minNum) * factor) / factor;
};


const  getRandomUnsignedInteger = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER) => getRandomNumber(minNum, maxNum);

const getRandomUnsignedFloat = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => getRandomNumber(minNum, maxNum, accuracy);

// для ESlint
getRandomUnsignedInteger(1, 4);
// для ESlint
getRandomUnsignedFloat(1, 4, 3);
