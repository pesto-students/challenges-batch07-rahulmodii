/* eslint-disable no-throw-literal */
function abbreviateString(inputString) {
  if (typeof inputString !== 'string') {
    throw `${inputString} is not of type 'string'`;
  }

  const splitWord = inputString.trim().split(' ');

  let firstWord = splitWord[0];

  let abbreviatedLastWord = '';
  if (splitWord.length > 1) {
    const lastWord = splitWord[splitWord.length - 1];
    abbreviatedLastWord = lastWord.charAt(0).toUpperCase();
    firstWord = firstWord.charAt(0).toUpperCase() + firstWord.substring(1).toLowerCase();
  }

  // eslint-disable-next-line prefer-template
  return `${firstWord}${abbreviatedLastWord && (' ' + abbreviatedLastWord + '.')}`;
}

export { abbreviateString };
