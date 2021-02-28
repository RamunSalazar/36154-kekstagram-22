const DEFAULT_STRING_LENGTH = 140;

/* Взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min || max === min) {
    return null;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const isStringLength = (string, length = DEFAULT_STRING_LENGTH) => (string.length <= length) ? true : false;

export {getRandomNumber, isStringLength};
