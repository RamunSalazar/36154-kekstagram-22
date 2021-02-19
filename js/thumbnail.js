import {generateArrayDescriptionPhotos} from './description-photo.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const thumbnailsPhoto = generateArrayDescriptionPhotos();

const drawingThumbnailPhoto = () => {
  thumbnailsPhoto.forEach((element) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', element.url);
    picture.querySelector('.picture__likes').textContent = element.likes;
    picture.querySelector('.picture__comments').textContent = element.comment.length;
    fragment.appendChild(picture);
  });

  pictures.appendChild(fragment);
}

export {drawingThumbnailPhoto};
