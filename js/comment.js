import {getRandomNumber} from './util.js';

const NAMES = [
  'Иван',
  'Виктор',
  'Артем',
  'Мария',
  'Юлия',
  'Екатерина',
];


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DEFAULT_COMMENT_INDEX = 7;

const getCommentId = () => {
  const commentIndexes = [];
  const commentId = getRandomNumber(0, 10000000);

  commentIndexes.push(commentId);

  if (commentIndexes.length > 1) {
    commentIndexes.forEach((value) => {
      if (value == commentId) {
        commentIndexes.pop();
      } else {
        return commentId;
      }
    });
  }

  return commentId;
};

const generateCommentMessage = () => {
  const randomID = getCommentId();
  const randomNameIndex = getRandomNumber(0, NAMES.length - 1);
  const avatarIndex = randomNameIndex + 1;
  const randomMessageIndex = getRandomNumber(0, MESSAGES.length - 1);

  return {
    id: randomID,
    avatar: 'img/avatar-' + avatarIndex + '.svg',
    message: MESSAGES[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const generateArrayComments = () => {
  const index = getRandomNumber(1, DEFAULT_COMMENT_INDEX);
  const arrayComments = [];

  for (let i = 0; i < index; i++) {
    arrayComments.push(generateCommentMessage());
  }

  return arrayComments;
};

export {generateCommentMessage, generateArrayComments};
