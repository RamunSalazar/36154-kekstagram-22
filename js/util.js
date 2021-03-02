const DEFAULT_STRING_LENGTH = 140;
const ALERT_SHOW_TIME = 5000;

/* Взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || max < min || max === min) {
    return null;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const isStringLength = (string, length = DEFAULT_STRING_LENGTH) => (string.length <= length) ? true : false;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {getRandomNumber, isStringLength, showAlert};
