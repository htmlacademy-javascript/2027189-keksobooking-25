const checkCorrectNumber = (value) => {
  if (!Number.isFinite(value)) {
    throw new RangeError('Числа должны быть положительными или 0.');
  }

  if (value < 0) {
    return 0;
  }

  if (value > Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }

  return value;
};

const getRandomNumber = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => {
  let minCheckedNum = checkCorrectNumber(minNum);
  let maxCheckedNum = checkCorrectNumber(maxNum);
  const checkedAccuracy = checkCorrectNumber(accuracy);

  [minCheckedNum, maxCheckedNum] = minCheckedNum > maxCheckedNum ? [maxCheckedNum, minCheckedNum] : [minCheckedNum, maxCheckedNum];

  const diff = maxCheckedNum - minCheckedNum;
  const random = Math.random() * 1.000000000000001; // чтобы могла выпасть единица
  const factor = Math.pow(10, checkedAccuracy);

  return Math.round((random * diff + minCheckedNum) * factor) / factor;
};


const  getRandomUnsignedInteger = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER) => getRandomNumber(minNum, maxNum);

const getRandomUnsignedFloat = (minNum = 0, maxNum = Number.MAX_SAFE_INTEGER, accuracy = 0) => getRandomNumber(minNum, maxNum, accuracy);

// для ESlint
getRandomUnsignedInteger(1, 4);
// для ESlint
getRandomUnsignedFloat(1, 4, 3);
