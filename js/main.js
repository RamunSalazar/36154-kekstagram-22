'use strict';
/* global _:readonly */

import {displayEditModal, closeEditModal, scaleUpLoadImage, changeFilterEffect} from './edit-modal.js';
import {validateHashtags, validateComments} from './validate.js';
import {getServerData, sendServerData} from './server.js';
import {drawingThumbnailPhoto} from './thumbnail-photo.js';
import {filterDefault, filterRandom, filterDiscussed} from './filters.js';

const RERENDER_DELAY = 500;

getServerData((photos) => {
  drawingThumbnailPhoto(photos);
  filterDefault(photos, _.debounce(newPhotos => drawingThumbnailPhoto(newPhotos), RERENDER_DELAY));
  filterRandom(photos, _.debounce(newPhotos => drawingThumbnailPhoto(newPhotos), RERENDER_DELAY));
  filterDiscussed(photos, _.debounce(newPhotos => drawingThumbnailPhoto(newPhotos), RERENDER_DELAY));
});
displayEditModal();
closeEditModal();
scaleUpLoadImage();
changeFilterEffect();
validateHashtags();
validateComments();
sendServerData();
