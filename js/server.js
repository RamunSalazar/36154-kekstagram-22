'use strict';

import {showAlert} from './util.js';
import {cleanEditModal} from './edit-modal.js';

const ESCAPE_KEY_CODE = 27;
const GET_DATA_API_URL = 'https://22.javascript.pages.academy/kekstagram/data';
const SEND_DATA_API_URL = 'https://22.javascript.pages.academy/kekstagram';

const mainElement = document.querySelector('.main');
const formElement = mainElement.querySelector('.img-upload__form');
const bodyElement = document.querySelector('.body');

const displayFetchMEssage = (str) => {
  const templateElement = document.querySelector(`#${str}`).content.querySelector(`.${str}`);
  const section = templateElement.cloneNode(true);
  const sectionButtonElement = section.querySelector(`.${str}__button`);

  mainElement.appendChild(section);
  bodyElement.classList.add('modal-open');
  section.classList.add('fetch-modal');

  sectionButtonElement.addEventListener('click', () => {
    bodyElement.classList.remove('modal-open');
    section.classList.add('hidden');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESCAPE_KEY_CODE) {
      bodyElement.classList.remove('modal-open');
      section.classList.add('hidden');
    }
  });

  window.addEventListener('click', (evt) => {
    if (evt.target.className == 'success') {
      bodyElement.classList.remove('modal-open');
      section.classList.add('hidden');
    }
  });
}

const getServerData = (onSuccess) => {
  fetch(GET_DATA_API_URL).then((response) => {
    if (response.ok) {
      document.querySelector('.img-filters').classList.remove('img-filters--inactive');
      return response.json();
    } else {
      showAlert('Ошибка сервера!');
    }
  }).then((photo) => onSuccess(photo));
}

const sendServerData = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch(SEND_DATA_API_URL, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        cleanEditModal();
        displayFetchMEssage('success');
      } else {
        displayFetchMEssage('error');
      }
    });
  });
}


export {getServerData, sendServerData};
