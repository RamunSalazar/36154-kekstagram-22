'use strict';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const socialCommentsListElement = document.querySelector('.social__comments');
const socialCommentsItemElement = document.querySelector('.social__comment');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const fragment = document.createDocumentFragment();
const commentsLoaderElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('.body');

const DEFAULT_COMMENT_COUNTER = 5;
const ESCAPE_KEY_CODE = 27;

const displayFullSizePhoto = (picture) => {
  return (evt) => {
    evt.preventDefault();
    bigPictureElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');

    while (socialCommentsListElement.firstChild) {
      socialCommentsListElement.removeChild(socialCommentsListElement.firstChild);
    }

    document.querySelector('.big-picture__img').firstElementChild.setAttribute('src', picture.url);
    document.querySelector('.social__caption').textContent = picture.description;
    document.querySelector('.likes-count').textContent = picture.likes;

    if (picture.comments.length <= DEFAULT_COMMENT_COUNTER) {
      socialCommentCountElement.textContent = picture.comments.length + ' из ' + picture.comments.length + ' комментариев';
      document.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      socialCommentCountElement.textContent = DEFAULT_COMMENT_COUNTER + ' из ' + picture.comments.length + ' комментариев';
      document.querySelector('.social__comments-loader').classList.remove('hidden');
    }

    picture.comments.forEach((element, index) => {
      const comment = socialCommentsItemElement.cloneNode(true);
      comment.firstElementChild.setAttribute('src', element.avatar);
      comment.firstElementChild.setAttribute('alt', element.name);
      comment.querySelector('.social__text').textContent = element.message;
      if (index >= DEFAULT_COMMENT_COUNTER) {
        comment.classList.add('hidden');
      }
      fragment.appendChild(comment);
    });

    socialCommentsListElement.appendChild(fragment);

    bigPictureCancelElement.addEventListener('click', () => {
      bigPictureElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
    });

    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === ESCAPE_KEY_CODE) {
        bigPictureElement.classList.add('hidden');
        bodyElement.classList.remove('modal-open');
      }
    });
  }
}

commentsLoaderElement.addEventListener('click', () => {
  const commentsElement = document.querySelectorAll('.social__comment');
  let comments = 0;
  let commentsHidden = 0;

  commentsElement.forEach((element) => {
    if (!element.classList.contains('hidden')) {
      comments++;
    }
  });

  commentsHidden = commentsElement.length - comments;

  let makeIterator = (index, lastIndex, array) => {
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        return array[index] !== array[lastIndex] ? {value: array[index++], done: false} : {done: true}
      },
    }
  }

  if (commentsHidden <= DEFAULT_COMMENT_COUNTER) {
    for (let element of makeIterator(comments, commentsElement.length, commentsElement)) {
      element.classList.remove('hidden');
    }
    socialCommentCountElement.textContent = commentsElement.length + ' из ' + commentsElement.length + ' комментариев';
    document.querySelector('.social__comments-loader').classList.add('hidden');
  } else {
    for (let element of makeIterator(comments, comments + DEFAULT_COMMENT_COUNTER, commentsElement)) {
      element.classList.remove('hidden');
    }
    comments += DEFAULT_COMMENT_COUNTER;
    socialCommentCountElement.textContent = comments + ' из ' + commentsElement.length + ' комментариев';
  }
});

export {displayFullSizePhoto};
