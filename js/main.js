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

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies neque sit amet bibendum rhoncus. Donec in laoreet mi. Etiam at quam ut magna tincidunt pellentesque. Vivamus ac neque vitae sem luctus consequat. Nullam mollis libero felis, in egestas lorem mattis id. Integer eu metus fermentum purus tristique consectetur sed ac purus. Mauris at mauris gravida felis consequat rutrum vitae consequat diam. Aliquam erat volutpat. Curabitur posuere ex et mauris tincidunt, vel posuere nibh venenatis. Vivamus euismod convallis metus, vitae finibus urna consequat vitae. Quisque faucibus lacus eget quam blandit, ut viverra neque mollis. Aliquam id tortor sit amet ex sodales vulputate. Praesent varius, quam id bibendum luctus, diam elit feugiat urna, ac vulputate turpis dolor nec augue.',
  'Suspendisse quis varius mauris, interdum aliquam dolor. Maecenas sit amet diam in orci scelerisque vulputate nec eu est. Mauris suscipit tempor nulla at mattis. Aliquam id odio tempus, finibus magna id, vehicula velit. Aenean accumsan mauris sed nisl mollis facilisis. Fusce id lorem vel ex consectetur dapibus at eu dolor. Proin tellus risus, rhoncus aliquet libero in, mattis elementum felis. Cras ullamcorper nunc eget nisl efficitur posuere. Praesent tristique eu nunc sed molestie.',
  'Praesent dignissim libero sapien, sit amet eleifend nunc tempus vitae. Curabitur sit amet ante vel risus imperdiet pharetra. Mauris et dui eu metus feugiat pellentesque ut id arcu. Fusce vel eros tempus, sollicitudin purus non, suscipit lacus. In dapibus, nibh et tincidunt commodo, nibh nisl gravida velit, sit amet gravida metus libero ac risus. Etiam scelerisque velit quis tellus fringilla tristique. Quisque sit amet odio malesuada, facilisis enim vitae, fermentum est. Quisque urna velit, egestas eu pulvinar at, lacinia eu mi. Nulla efficitur tincidunt suscipit. Fusce pretium tincidunt nibh, vitae vehicula turpis facilisis nec. In hendrerit sem lacus, at maximus lacus finibus in. Suspendisse euismod ipsum nisi, eu vestibulum felis pulvinar sit amet. Cras cursus nisi erat, ac rhoncus odio sollicitudin ut. Nullam est est, viverra in massa sed, efficitur aliquam metus. Aenean egestas ligula ante, eget ullamcorper nibh mattis quis.',
  'Vivamus laoreet eros non justo rutrum fringilla. Cras ut tortor est. Nunc at dolor sed dolor lobortis dignissim sed sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed neque sed odio consequat consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse viverra purus ante, id iaculis lorem cursus et. Pellentesque mattis mattis iaculis.',
  'Proin mollis convallis ligula sed finibus. Pellentesque ultrices iaculis accumsan. Curabitur placerat, orci luctus porttitor tincidunt, nisi ante maximus felis, vel dignissim augue dui ut turpis. Proin ullamcorper libero elit, non tristique nulla tincidunt quis. In volutpat auctor mi sit amet dictum. Ut efficitur porta nunc. Aliquam malesuada quam orci, sed molestie erat dictum vel. Ut eget ligula in eros varius elementum. Aliquam tincidunt rhoncus erat, vestibulum ultrices massa scelerisque posuere. Aliquam tincidunt magna et est tempus pretium. Suspendisse maximus ullamcorper risus et tempor. Suspendisse urna ex, malesuada quis egestas quis, ultrices fermentum nisi. Pellentesque metus dolor, fermentum sed felis eget, faucibus eleifend turpis. Sed vitae elit ligula.',
  'Nunc ullamcorper blandit posuere. Ut sit amet sem eu felis luctus vulputate a sed est. Nullam condimentum eu justo vel consequat. Donec venenatis neque nisi, in dignissim orci pulvinar non. Duis congue lectus a feugiat iaculis. Pellentesque et ante sit amet dolor porttitor egestas. Nullam vel mauris eget ligula cursus iaculis quis ut turpis. Etiam et rutrum mi. Nullam blandit vitae ante at pulvinar. Sed et dui ac nisl rhoncus tristique. Phasellus ac velit eget nulla dapibus consectetur. Quisque consectetur pretium commodo. Phasellus non diam nec metus gravida semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse nec odio ac dui convallis porttitor vitae vel orci. Integer efficitur pulvinar luctus.',
  'Duis vitae dolor ultrices, faucibus ipsum vel, aliquam orci. Vestibulum eu eros eros. Fusce leo felis, cursus a suscipit eget, sodales ac dui. Maecenas sit amet euismod velit, vel porta tortor. Vestibulum leo sapien, pharetra ac tincidunt eu, condimentum quis sapien. Maecenas nunc velit, auctor quis sem at, eleifend dignissim eros. Suspendisse potenti. Cras vel pretium elit, sit amet sollicitudin enim. Fusce volutpat metus sapien, id tempor arcu accumsan sed. Phasellus pellentesque lacus in tellus laoreet luctus eget sed magna. Morbi sapien neque, sodales sit amet vestibulum quis, fringilla ut dui.',
  'Proin eu gravida nunc. Ut molestie vel massa et porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Vivamus sapien neque, porttitor ut commodo a, lobortis vitae felis. Etiam ultricies efficitur interdum. Nulla at quam erat. Sed pretium bibendum quam, ut placerat orci varius vel.',
  'Nulla et aliquet urna. Vestibulum quis fermentum dui, eget cursus velit. Cras vestibulum, sem sit amet placerat lacinia, ex ipsum convallis lectus, in placerat enim erat eu sem. Pellentesque sed mattis ipsum, consequat rhoncus erat. Vestibulum rutrum finibus quam ac laoreet. Donec urna dui, suscipit at mauris eu, dignissim lobortis ante. Phasellus eleifend sem eget metus fringilla, eu euismod nunc pharetra. Nullam volutpat sodales neque, semper iaculis felis ultrices quis.',
  'Donec non ex sit amet orci vestibulum consectetur. Donec nibh nisi, accumsan a varius a, semper at ligula. Suspendisse vitae mauris sapien. Nunc libero libero, consectetur nec imperdiet id, eleifend id justo. Sed massa magna, accumsan id facilisis eu, euismod sed eros. Nam ornare elit auctor, pretium lectus nec, posuere orci. Donec non turpis ac tortor ullamcorper tristique nec ac dui. Cras vestibulum consequat vulputate. Fusce sed justo id sapien fermentum fermentum. Vivamus dictum hendrerit varius. Etiam eu tempus ex. Ut venenatis lectus vel convallis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris varius diam et risus sollicitudin, nec malesuada risus porttitor. Morbi id ex dignissim, tincidunt nisl vitae, faucibus libero. Aenean lobortis finibus lorem pulvinar molestie.',
];

/* Взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return null;
  } else if (max < min) {
    return null;
  } else if ( max == min) {
    return null;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getLengthString = (string, length = '140') => (string.length <= length) ? true : false;

const checkCommentID = () => {
  const commentIndexes = [];
  const id = getRandomNumber(0, 10000000);

  commentIndexes.push(id);

  if (commentIndexes.length > 1) {
    commentIndexes.forEach((value) => {
      if (value == id) {
        commentIndexes.pop();
      } else {
        return id;
      }
    });
  } else {
    return id;
  }

  return id;
};

const createCommentMessage = () => {
  const randomID = checkCommentID();
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

const addComment = () => {
  const index = getRandomNumber(1, 5);
  const commetMessages = [];

  for (let i = 0; i < index; i++) {
    commetMessages.push(createCommentMessage());
  }

  return commetMessages;
};

const createDescriptionPhoto = (index) => {
  const randomDescriptionIndex = getRandomNumber(0, DESCRIPTIONS.length - 1);
  const commentArray = addComment();
  const descriptionId = index + 1;
  const randomLikes = getRandomNumber(15, 200);

  return {
    id: descriptionId,
    url: 'photos/' + descriptionId,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: randomLikes,
    comment: commentArray,
  };
};

const addDescriptionPhoto = () => {
  const descriptionPhotos = [];

  for (let i = 0; i < 25; i++) {
    descriptionPhotos.push(createDescriptionPhoto(i));
  }

  return descriptionPhotos;
};

getLengthString();

addDescriptionPhoto();
