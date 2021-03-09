const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const socialCommentsListElement = document.querySelector('.social__comments');
const socialCommentsItemElement = document.querySelector('.social__comment');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const fragment = document.createDocumentFragment();
const commentsLoaderElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('.body');

const DEFAULT_COMMENT_COUNTER = 5;

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
  }
}

commentsLoaderElement.addEventListener('click', () => {
  const commentsElement = document.querySelectorAll('.social__comment');
  const commentCounter = commentsElement.length;
  let comments = 0;
  let commentsHidden = 0;

  for (let i = 0; i < commentCounter; i++) {
    if (!commentsElement[i].classList.contains('hidden')) {
      comments++;
    } else {
      commentsHidden++;
    }
  }

  if (commentsHidden <= DEFAULT_COMMENT_COUNTER) {
    for (let i = comments; i < commentCounter; i++) {
      commentsElement[i].classList.remove('hidden');
    }
    socialCommentCountElement.textContent = commentCounter + ' из ' + commentCounter + ' комментариев';
    document.querySelector('.social__comments-loader').classList.add('hidden');
  } else {
    let j = 0;
    for (let i = comments; j < DEFAULT_COMMENT_COUNTER; i++) {
      j++;
      commentsElement[i].classList.remove('hidden');
    }
    comments = 0;
    for (let i = 0; i < commentCounter; i++) {
      if (!commentsElement[i].classList.contains('hidden')) {
        comments++;
      }
    }
    socialCommentCountElement.textContent = comments + ' из ' + commentCounter + ' комментариев';
  }
});

bigPictureCancelElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});

export {displayFullSizePhoto};
