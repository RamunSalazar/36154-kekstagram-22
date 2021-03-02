import {drawingThumbnailPhoto} from './thumbnail-photo.js';
import {showAlert} from './util.js';
import {closeEditModal} from './edit-modal.js';

const ESCAPE_KEY_CODE = 27;

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const mainElement = document.querySelector('.main');
const formElement = mainElement.querySelector('.img-upload__form');
const bodyElement = document.querySelector('.body');

const displayFetchSuccessMessage = () => {
  const successSection = successTemplateElement.cloneNode(true);
  const successSectionButtonElement =  successSection.querySelector('.success__button');

  mainElement.appendChild(successSection);
  bodyElement.classList.add('modal-open');
  successSection.style.zIndex = 100;

  successSectionButtonElement.addEventListener('click', () => {
    bodyElement.classList.remove('modal-open');
    successSection.classList.add('hidden');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      bodyElement.classList.remove('modal-open');
      successSection.classList.add('hidden');
    }
  });

  window.addEventListener('click', (evt) => {
    if (evt.target.className == 'success') {
      bodyElement.classList.remove('modal-open');
      successSection.classList.add('hidden');
    }
  })
}

const displayFetchErrorMessage = () => {
  const errorSection = errorTemplateElement.cloneNode(true);
  const errorSectionButtonElement =  errorSection.querySelector('.error__button');

  mainElement.appendChild(errorSection);
  bodyElement.classList.add('modal-open');
  errorSection.style.zIndex = 100;

  errorSectionButtonElement.addEventListener('click', () => {
    bodyElement.classList.remove('modal-open');
    errorSection.classList.add('hidden');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      bodyElement.classList.remove('modal-open');
      errorSection.classList.add('hidden');
    }
  });

  window.addEventListener('click', (evt) => {
    if (evt.target.className == 'error') {
      bodyElement.classList.remove('modal-open');
      errorSection.classList.add('hidden');
    }
  })
}

const getServerData = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data').then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      showAlert('Ошибка сервера!');
    }
  }).then((photo) => drawingThumbnailPhoto(photo)).catch(() => showAlert('Ошибка сервера!'));
}

const sendServerData = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch('https://22.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response) {
        closeEditModal();
        displayFetchSuccessMessage();
      } else {
        displayFetchErrorMessage();
      }
    }).catch(() => displayFetchErrorMessage());
  });
}


export {getServerData, sendServerData};
