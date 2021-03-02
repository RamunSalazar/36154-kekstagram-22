import {displayEditModal, closeEditModal, scaleUpLoadImage, changeFilterEffect} from './edit-modal.js';
import {validateHashtags, validateComments} from './validate.js';
import {getServerData, sendServerData} from './server.js';

getServerData();
displayEditModal();
closeEditModal();
scaleUpLoadImage();
changeFilterEffect();
validateHashtags();
validateComments();
sendServerData();
