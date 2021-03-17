/* global noUiSlider */
'use strict';

const upLoadFileElement = document.querySelector('#upload-file');
const imageUpLoadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('.body');
const imageUpLoadCancelElement = document.querySelector('#upload-cancel');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const previewImageElement = document.querySelector('.img-upload__preview').firstElementChild;
const scaleInputElement = document.querySelector('.scale__control--value');
const sliderElement = document.querySelector('.effect-level__slider');
const effectRadioListElement = document.querySelectorAll('.effects__radio');
const effectSpanListElement = document.querySelectorAll('.effects__preview');
const effectInputElement = document.querySelector('.effect-level__value');
const hashtagInputElement = document.querySelector('.text__hashtags');
const commentTextAreaElement = document.querySelector('.text__description');

const ESCAPE_KEY_CODE = 27;
const SCALE_STEP = 25;
const SCALE_DIVIDER = 100;
const IMAGE_SCALE_MIN = 25;
const IMAGE_SCALE_MAX = 100;
const EFFECT_REVIEW_MIN = 0;
const EFFECT_REVIEW_MAX = 100;
const EFFECT_REVIEW_STEP = 1;
const EFFECT_REVIEW_START = 100;
const EFFECT_REVIEW_CHROME_MIN = 0;
const EFFECT_REVIEW_CHROME_MAX = 1;
const EFFECT_REVIEW_CHROME_STEP = 0.1;
const EFFECT_REVIEW_CHROME_START = 1;
const EFFECT_REVIEW_MARVIN_MIN = 0;
const EFFECT_REVIEW_MARVIN_MAX = 100;
const EFFECT_REVIEW_MARVIN_STEP = 1;
const EFFECT_REVIEW_MARVIN_START = 100;
const EFFECT_REVIEW_PHOBOS_MIN = 0;
const EFFECT_REVIEW_PHOBOS_MAX = 3;
const EFFECT_REVIEW_PHOBOS_STEP = 0.1;
const EFFECT_REVIEW_PHOBOS_START = 3;
const EFFECT_REVIEW_HEAT_MIN = 1;
const EFFECT_REVIEW_HEAT_MAX = 3;
const EFFECT_REVIEW_HEAT_STEP = 0.1;
const EFFECT_REVIEW_HEAT_START = 3;
const DEFAULT_SCALE_VALUE = '100%';
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECT_REVIEW_MIN,
    max: EFFECT_REVIEW_MAX,
  },
  start: EFFECT_REVIEW_START,
  step: EFFECT_REVIEW_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const cleanEditModal = () => {
  upLoadFileElement.value = '';
  imageUpLoadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  sliderElement.style.display = 'none';
  effectInputElement.setAttribute('value', '');
  scaleInputElement.setAttribute('value', DEFAULT_SCALE_VALUE);
  previewImageElement.style.transform = String('scale(' + parseInt(DEFAULT_SCALE_VALUE.slice(0, -1))/SCALE_DIVIDER + ')');
  previewImageElement.className = '';
  document.querySelector('#effect-none').checked = 'true';
  scaleControlSmallerElement.removeAttribute('disabled');
  hashtagInputElement.value = '';
  commentTextAreaElement.value = '';
}

const displayEditModal = () => {
  upLoadFileElement.addEventListener('change', () => {
    imageUpLoadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    previewImageElement.style.filter = 'none';
    scaleControlBiggerElement.setAttribute('disabled', 'disabled');
    scaleInputElement.setAttribute('value', DEFAULT_SCALE_VALUE);

    const file = upLoadFileElement.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewImageElement.setAttribute('src', reader.result);
      });

      reader.readAsDataURL(file);
    }
  });
}

const closeEditModal = () => {
  imageUpLoadCancelElement.addEventListener('click', () => {
    cleanEditModal();
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === ESCAPE_KEY_CODE && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
      cleanEditModal();
    }
  });
};

const scaleUpLoadImage = () => {
  scaleControlSmallerElement.addEventListener('click', () => {
    let value = parseInt(scaleInputElement.value.slice(0, -1));
    value -= SCALE_STEP;

    if (value === IMAGE_SCALE_MIN) {
      scaleControlSmallerElement.setAttribute('disabled', 'disabled');
    }

    scaleInputElement.setAttribute('value', String(value + '%'));
    previewImageElement.style.transform = String('scale(' + value/SCALE_DIVIDER + ')');
    scaleControlBiggerElement.removeAttribute('disabled');
  });

  scaleControlBiggerElement.addEventListener('click', () => {
    let value = parseInt(scaleInputElement.value.slice(0, -1));
    value += SCALE_STEP;

    if (value === IMAGE_SCALE_MAX) {
      scaleControlBiggerElement.setAttribute('disabled', 'disabled');
    }

    scaleInputElement.setAttribute('value', String(value + '%'));
    previewImageElement.style.transform = String('scale(' + value/SCALE_DIVIDER + ')');
    scaleControlSmallerElement.removeAttribute('disabled');
  });
}

const changeFilterEffect = () => {
  sliderElement.style.display = 'none';

  for(let i = 0; i < effectRadioListElement.length; i++) {
    effectRadioListElement[i].addEventListener('click', () => {
      previewImageElement.className = '';
      previewImageElement.classList.add(String(effectSpanListElement[i].classList[1]));

      if (effectSpanListElement[i].classList[1] === 'effects__preview--none') {
        previewImageElement.className = '';
        sliderElement.style.display = 'none';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_REVIEW_MIN,
            max: EFFECT_REVIEW_MAX,
          },
          start: EFFECT_REVIEW_START,
          step: EFFECT_REVIEW_STEP,
        });
      } else if (effectSpanListElement[i].classList[1] === 'effects__preview--chrome' || effectSpanListElement[i].classList[1] === 'effects__preview--sepia') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_REVIEW_CHROME_MIN,
            max: EFFECT_REVIEW_CHROME_MAX,
          },
          start: EFFECT_REVIEW_CHROME_START,
          step: EFFECT_REVIEW_CHROME_STEP,
        });
      } else if (effectSpanListElement[i].classList[1] === 'effects__preview--marvin') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_REVIEW_MARVIN_MIN,
            max: EFFECT_REVIEW_MARVIN_MAX,
          },
          start: EFFECT_REVIEW_MARVIN_START,
          step: EFFECT_REVIEW_MARVIN_STEP,
        });
      } else if (effectSpanListElement[i].classList[1] === 'effects__preview--phobos') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_REVIEW_PHOBOS_MIN,
            max:EFFECT_REVIEW_PHOBOS_MAX,
          },
          start: EFFECT_REVIEW_PHOBOS_START,
          step: EFFECT_REVIEW_PHOBOS_STEP,
        });
      } else if (effectSpanListElement[i].classList[1] === 'effects__preview--heat') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_REVIEW_HEAT_MIN,
            max: EFFECT_REVIEW_HEAT_MAX,
          },
          start: EFFECT_REVIEW_HEAT_START,
          step: EFFECT_REVIEW_HEAT_STEP,
        });
      }

      sliderElement.noUiSlider.on('update', (value, handle) => {
        effectInputElement.setAttribute('value', value[handle]);

        switch (effectSpanListElement[i].classList[1]) {
          case 'effects__preview--none': {
            previewImageElement.style.filter = 'none';
            break;
          }
          case 'effects__preview--chrome': {
            previewImageElement.style.filter = String('grayscale(' + value[handle] + ')');
            break;
          }
          case 'effects__preview--sepia': {
            previewImageElement.style.filter = String('sepia(' + value[handle] + ')');
            break;
          }
          case 'effects__preview--marvin': {
            previewImageElement.style.filter = String('invert(' + value[handle] + '%)');
            break;
          }
          case 'effects__preview--phobos': {
            previewImageElement.style.filter = String('blur(' + value[handle] + 'px)');
            break;
          }
          case 'effects__preview--heat': {
            previewImageElement.style.filter = String('brightness(' + value[handle] + ')');
            break;
          }
        }
      });
    });
  }
}

export {displayEditModal, closeEditModal, scaleUpLoadImage, changeFilterEffect, cleanEditModal};
