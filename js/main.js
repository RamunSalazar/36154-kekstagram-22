import {isStringLength} from './util.js';
import {generateArrayDescriptionPhotos} from './description-photo.js';
import {generateCommentMessage} from './comment.js';
import {drawingThumbnailPhoto} from './thumbnail-photo.js';

isStringLength(generateCommentMessage().message);
generateArrayDescriptionPhotos();
drawingThumbnailPhoto();
