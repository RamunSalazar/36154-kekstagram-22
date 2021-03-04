import {getRandomNumber} from './util.js';

const filtersButtonsElements = document.querySelectorAll('.img-filters__button');
const defaultFilterButtonElement = document.querySelector('#filter-default');
const randomFilterButtonElement = document.querySelector('#filter-random');
const discussedFilterButtonElement = document.querySelector('#filter-discussed');

const DEFAULT_FILTER_RANDOM = 10;

const sortByQuantityComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const filterDefault = (photos, cb) => {
  defaultFilterButtonElement.addEventListener('click', () => {
    filtersButtonsElements.forEach(element => element.classList.remove('img-filters__button--active'));
    defaultFilterButtonElement.classList.add('img-filters__button--active');
    cb(photos);
  });
}

const filterRandom = (photos, cb) => {
  randomFilterButtonElement.addEventListener('click', () => {
    filtersButtonsElements.forEach(element => element.classList.remove('img-filters__button--active'));
    randomFilterButtonElement.classList.add('img-filters__button--active');
    let newArray = [];
    for (let i = DEFAULT_FILTER_RANDOM; i > 0; i--) {
      let photo = photos.slice().splice(getRandomNumber(0, photos.length - 1), 1);
      while (newArray.includes(photo[0])) {
        photo = photos.slice().splice(getRandomNumber(0, photos.length - 1), 1);
      }
      newArray.push(photo[0]);
    }
    cb(newArray);
  });
}

const filterDiscussed = (photos, cb) => {
  discussedFilterButtonElement.addEventListener('click', () => {
    filtersButtonsElements.forEach(element => element.classList.remove('img-filters__button--active'));
    discussedFilterButtonElement.classList.add('img-filters__button--active');
    let newArray = photos.slice().sort(sortByQuantityComments);
    cb(newArray);
  });
}

export {filterDefault, filterRandom, filterDiscussed};
