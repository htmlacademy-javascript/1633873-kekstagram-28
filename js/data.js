// подключаем функцию для получения рандомного описания фотографий
import {getRandomPositiveInteger, getRandomDescription} from './util.js';

// массив из 25 сгенерированных объектов
// каждый объект массива — описание фотографии, опубликованной пользователем
const DESCRIPTIONS_ARRAY = [
  'Дом',
  'Природа',
  'Цветы',
  'Солнце',
  'Котики',
  'Машинки',
  'Комната',
  'Работа',
  'Музей',
  'Отдых'
];

// массив объектов — список комментариев,
//  оставленных другими пользователями к этой фотографии
const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра.
   В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках
   и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат
   на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают.
   Как можно было поймать такой неудачный момент?!`
];

const NAMES = [
  'Артур',
  'Ибрагим',
  'Валера',
  'Андрей',
  'Юля',
  'Юлий',
  'Ольга',
  'Олег',
  'Илья'
];

// функция для создания массива с комментариями
const getComment = () => {
  const result = [];
  for (let i = 0; i < getRandomPositiveInteger(1, 3); i++) {
    const commentsUsers = {
      id: getRandomPositiveInteger(1, 300),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: MASSAGES[getRandomPositiveInteger(1, MASSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(1, NAMES.length - 1)]
    };
    result.push(commentsUsers);
  }
  return result;
};

// функция для создания массива с фотографиями
const NUMBER_OF_PHOTOS = 25;
const getArrayObject = () => {
  const result = [];
  for (let i = 1; i <= NUMBER_OF_PHOTOS; i++) {
    const photoUser = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomDescription(DESCRIPTIONS_ARRAY),
      likes: getRandomPositiveInteger(15, 200),
      comments: getComment()
    };
    result.push(photoUser);
  }
  return result;
};
export {getArrayObject};
