/* Взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return null;
  } else if (max < min) {
    return null;
  } else if ( max == min) {
    return null;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getLengthString = (string, length = '140') => (string.length <= length) ? true : false;

export {getRandomNumber, getLengthString};
