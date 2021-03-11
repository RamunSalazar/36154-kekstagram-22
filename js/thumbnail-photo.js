'use strict';

import {displayFullSizePhoto} from './fullsize-photo.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const drawingThumbnailPhoto = (thumbnailsPhotos) => {
  thumbnailsPhotos.forEach((element) => {
    const picture = pictureTemplateElement.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', element.url);
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comments.length;

    picture.addEventListener('click', displayFullSizePhoto(element));

    fragment.appendChild(picture);
  });


  while (picturesElement.querySelector('.picture')) {
    picturesElement.removeChild(picturesElement.querySelector('.picture'));
  }

  picturesElement.appendChild(fragment);
}

export {drawingThumbnailPhoto};
