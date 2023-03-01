/* eslint-disable no-unused-vars */
const isStringLenght = (string, length) => string.length <= length;
isStringLenght('проверяемая строка', 10);

const isStringPalindrome = (string) =>
  string
    .replaceAll(' ', '')
    .toLowerCase() ===
  string
    .replaceAll(' ', '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
isStringPalindrome('ДовОд');


const getStringNumber = (string) => {
  let result = '';
  string.split('');
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseFloat(string[i]))) {
      result += parseFloat(string[i]);
    }
  }
  return parseFloat(result);
};
getStringNumber('а я томат');

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

const getStringSymbols = (string, minLength, stringDop) => {
  const actualStringDop = minLength - string.length;

  if (actualStringDop <= 0) {
    return string;
  }
  return stringDop.slice(0, actualStringDop % stringDop.length) +
  stringDop.repeat(actualStringDop / stringDop.length) + string;
};
getStringSymbols('qwerty', 4, '0');

