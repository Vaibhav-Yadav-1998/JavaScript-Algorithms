/*
* Algorithm converts given string to caesar cipher by incrementing each letter by 3
*/

function cipher(str) {
  // array for storing char codes
  const code = [];

  for (let i = 0; i < str.length; i++) {
    code.push(str.charCodeAt(i));
  }

  // array for storing incremented codes
  const incremented = [];

  // iterating over code array and changing char code, while chekcing if letter is x or greater and if the string contain spaces
  code.map(i => {
    (i >= 88 && i <= 90) || (i >= 120 && i <= 122)
      ? incremented.push(i - 23)
      : i === 32
        ? incremented.push(32)
        : incremented.push(i + 3);
  });

  // array for storing character
  const cipherArr = [];

  // iterating over incremented array and converting codes back to character
  incremented.map(i => cipherArr.push(String.fromCharCode(i)));

  return cipherArr.join("");
}

module.exports = cipher;
