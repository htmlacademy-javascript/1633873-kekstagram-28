// функция для получения рандомного положительного числа
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// функция для получения рандомного описания фотограии
const getRandomDescription = (descriptions) => {
  let result = '';
  for (let i = 0; i < getRandomPositiveInteger(2, 5); i++) {
    result += `${descriptions[getRandomPositiveInteger(0, descriptions.length - 1)] } `;
  }
  return result.trim();
};

export {getRandomPositiveInteger, getRandomDescription};
