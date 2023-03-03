// Функция для проверки длины строки
const isStringLenght = (string, maxLength) => string.length <= length;
isStringLenght('проверяемая строка', 10);

// Функция для проверки, является ли строка палиндромом.
//  Палиндром — это слово или фраза, которые одинаково читаются
//   и слева направо и справа налево.
const isStringPalindrome = (string) => {
  const result = string.replaceAll(' ', '').toLowerCase() === string.replaceAll(' ', '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
  return result;
};
isStringPalindrome('ДовОд');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры
//  от 0 до 9 и возвращает их в виде целого положительного числа.

// Функция, которая принимает число,
//  и возвращает целое положительное число.
const getStringFigure = (figure) => {
  let result = '';
  figure = figure.toString().split('');
  for (let i = 0; i < figure.length; i++) {
    if (!isNaN(parseFloat(figure[i]))) {
      result += parseFloat(figure[i]);
    }
  }

  return parseFloat(result);
};
getStringFigure(-1);

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку
//  с добавочными символами — и возвращает исходную строку, дополненную указанными
//   символами до заданной длины.
const getStringSymbols = (string, minLength, stringDop) => {
  const actualStringDop = minLength - string.length;

  if (actualStringDop <= 0) {
    return string;
  }
  return stringDop.slice(0, actualStringDop % stringDop.length) +
  stringDop.repeat(actualStringDop / stringDop.length) + string;
};
getStringSymbols('qwerty', 4, '0');

