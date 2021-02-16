import {isStringLength} from './util.js';
import {generateArrayDescriptionPhotos} from './description-photo.js';
import {generateCommentMessage} from './comment.js';
import './thumbnail.js';

isStringLength(generateCommentMessage().message);
generateArrayDescriptionPhotos();
