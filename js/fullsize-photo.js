const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const socialCommentsItem = document.querySelector('.social__comment');
const fragment = document.createDocumentFragment();
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const displayFullSizePhoto = (picture) => {
  return (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    while (socialCommentsList.firstChild) {
      socialCommentsList.removeChild(socialCommentsList.firstChild);
    }

    document.querySelector('.big-picture__img').firstElementChild.setAttribute('src', picture.url);
    document.querySelector('.social__caption').textContent = picture.description;
    document.querySelector('.likes-count').textContent = picture.likes;
    document.querySelector('.comments-count').textContent = picture.comment.length;

    picture.comment.forEach((element) => {
      const comment = socialCommentsItem.cloneNode(true);
      comment.firstElementChild.setAttribute('src', element.avatar);
      comment.firstElementChild.setAttribute('alt', element.name);
      comment.querySelector('.social__text').textContent = element.message;
      fragment.appendChild(comment);
    });

    socialCommentsList.appendChild(fragment);
  }
}

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

export {displayFullSizePhoto};
