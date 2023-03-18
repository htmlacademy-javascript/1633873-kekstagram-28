import {getArrayObject} from './data.js';

// контейнер для изображений
const containerForImages = document.querySelector('.pictures');

// шаблон изображения случайного пользователя
const imageTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// клонируем шаблон
// const copyImageTemplate = imageTemplate.cloneNode(true);

// добавляем копию шаблона в контейнер
// containerForImages.appendChild(copyImageTemplate);

const temporaryFragment = document.createDocumentFragment();

const arrayWithPhotos = getArrayObject();
arrayWithPhotos.forEach((photo) => {
  const copyImageTemplate = imageTemplate.cloneNode(true);
  copyImageTemplate.querySelector('.picture__img').src = photo.url;
  copyImageTemplate.querySelector('.picture__likes').textContent = photo.likes;
  copyImageTemplate.querySelector('.picture__comments').textContent = photo.comments.length;
  temporaryFragment.appendChild(copyImageTemplate);
});

containerForImages.appendChild(temporaryFragment);
