const getRandomRangeFloatNum = (minNum, maxNum, qualityNum = 0) => {
  if (minNum < 0) {
    return 'Минимальное число должно быть положительным или 0.';
  }

  if (maxNum < minNum) {
    return 'Максимальное число должно быть больше минимального.';
  }

  if (qualityNum < 0) {
    return 'Значение количества знаков после зарятой должно быть положительным или 0.';
  }

  // Частично код взят отсюда https://habr.com/ru/company/ruvds/blog/534108/
  return +(Math.random() * (maxNum - minNum)).toFixed(qualityNum) + minNum;
};

// для ESlint
getRandomRangeFloatNum(2, 3);


const getRandomRangeNum = (minNum, maxNum) => getRandomRangeFloatNum(minNum, maxNum);


// для ESlint
getRandomRangeNum(5, 10);
