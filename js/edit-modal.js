const upLoadFileElement = document.querySelector('#upload-file');
const imageUpLoadOverlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const imageUpLoadCancelElement = document.querySelector('#upload-cancel');
const scaleControlSmallerElement = document.querySelector('.scale__control--smaller');
const scaleControlBiggerElement = document.querySelector('.scale__control--bigger');
const previewImageElement = document.querySelector('.img-upload__preview').firstElementChild;
const scaleInputElement = document.querySelector('.scale__control--value');
const sliderElement = document.querySelector('.effect-level__slider');
const effectRadioListElement = document.querySelectorAll('.effects__radio');
const effectSpanListElement = document.querySelectorAll('.effects__preview');
const effectInputElement = document.querySelector('.effect-level__value');

const ESCAPE_KEY_CODE = 27;
const SCALE_STEP = 25;
const SCALE_DIVIDER = 100;

noUiSlider.create(sliderElement, {
  range: {
      min: 0,
      max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

const displayEditModal = () => {
  upLoadFileElement.addEventListener('change', () => {
    imageUpLoadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    previewImageElement.style.filter = 'none';
    scaleControlBiggerElement.setAttribute('disabled', 'disabled');
  });
}

const closeEditModal = () => {
  imageUpLoadCancelElement.addEventListener('click', () => {
    upLoadFileElement.value = '';
    imageUpLoadOverlayElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    sliderElement.style.display = 'none';
    effectInputElement.setAttribute('value', '');
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode == ESCAPE_KEY_CODE) {
      upLoadFileElement.value = '';
      imageUpLoadOverlayElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
      sliderElement.style.display = 'none';
      effectInputElement.setAttribute('value', '');
    }
  });
};

const scaleUpLoadImage = () => {
  let value = parseInt(scaleInputElement.value.slice(0, -1));

  scaleControlSmallerElement.addEventListener('click', () => {
    value -= SCALE_STEP;

    if (value == 25) {
      scaleControlSmallerElement.setAttribute('disabled', 'disabled');
    }

    scaleInputElement.setAttribute('value', String(value + '%'));
    previewImageElement.style.transform = String('scale(' + value/SCALE_DIVIDER + ')');
    scaleControlBiggerElement.removeAttribute('disabled');
  });

  scaleControlBiggerElement.addEventListener('click', () => {
    value += SCALE_STEP;

    if (value == 100) {
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

      if (effectSpanListElement[i].classList[1] == 'effects__preview--none') {
        previewImageElement.className = '';
        sliderElement.style.display = 'none';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
      } else if (effectSpanListElement[i].classList[1] == 'effects__preview--chrome' || effectSpanListElement[i].classList[1] == 'effects__preview--sepia') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
      } else if (effectSpanListElement[i].classList[1] == 'effects__preview--marvin') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
        });
      } else if (effectSpanListElement[i].classList[1] == 'effects__preview--phobos') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      } else if (effectSpanListElement[i].classList[1] == 'effects__preview--heat') {
        sliderElement.style.display = 'block';
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 3,
          step: 0.1,
        });
      }

      sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
        effectInputElement.setAttribute('value', unencoded[handle]);

        if (effectSpanListElement[i].classList[1] == 'effects__preview--none') {
          previewImageElement.style.filter = 'none';
        } else if (effectSpanListElement[i].classList[1] == 'effects__preview--chrome') {
          previewImageElement.style.filter = String('grayscale(' + unencoded[handle] + ')');
        } else if (effectSpanListElement[i].classList[1] == 'effects__preview--sepia') {
          previewImageElement.style.filter = String('sepia(' + unencoded[handle] + ')');
        } else if (effectSpanListElement[i].classList[1] == 'effects__preview--marvin') {
          previewImageElement.style.filter = String('invert(' + unencoded[handle] + '%)');
        } else if (effectSpanListElement[i].classList[1] == 'effects__preview--phobos') {
          previewImageElement.style.filter = String('blur(' + unencoded[handle] + 'px)');
        } else if (effectSpanListElement[i].classList[1] == 'effects__preview--heat') {
          previewImageElement.style.filter = String('brightness(' + unencoded[handle] + ')');
        }
      });
    });
  }
}


export {displayEditModal, closeEditModal, scaleUpLoadImage, changeFilterEffect};
