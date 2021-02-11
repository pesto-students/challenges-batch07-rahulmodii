function duplicateLetters(inputString) {
  const charMap = Array(26).fill(0);

  for (const character of inputString) {
    const charIndex = character.charCodeAt() - 97;
    // eslint-disable-next-line no-plusplus
    charMap[charIndex]++;
  }

  const maxOccurance = Math.max(...charMap);
  return maxOccurance > 1 && maxOccurance;
}

export {
  duplicateLetters,
};
