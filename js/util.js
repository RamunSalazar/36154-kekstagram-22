'use strict';

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

  alertContainer.classList.add('show-alert');
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {getRandomNumber, isStringLength, showAlert};
