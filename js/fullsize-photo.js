const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const socialCommentsListElement = document.querySelector('.social__comments');
const socialCommentsItemElement = document.querySelector('.social__comment');
const fragment = document.createDocumentFragment();
const socialCommentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('.body');

const displayFullSizePhoto = (picture) => {
  return (evt) => {
    evt.preventDefault();
    bigPictureElement.classList.remove('hidden');
    socialCommentCountElement.classList.add('hidden');
    commentsLoaderElement.classList.add('hidden');
    bodyElement.classList.add('modal-open');

    while (socialCommentsListElement.firstChild) {
      socialCommentsListElement.removeChild(socialCommentsListElement.firstChild);
    }

    document.querySelector('.big-picture__img').firstElementChild.setAttribute('src', picture.url);
    document.querySelector('.social__caption').textContent = picture.description;
    document.querySelector('.likes-count').textContent = picture.likes;
    document.querySelector('.comments-count').textContent = picture.comment.length;

    picture.comment.forEach((element) => {
      const comment = socialCommentsItemElement.cloneNode(true);
      comment.firstElementChild.setAttribute('src', element.avatar);
      comment.firstElementChild.setAttribute('alt', element.name);
      comment.querySelector('.social__text').textContent = element.message;
      fragment.appendChild(comment);
    });

    socialCommentsListElement.appendChild(fragment);
  }
}

bigPictureCancelElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});

export {displayFullSizePhoto};
