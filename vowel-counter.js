/*
Write a function that returns the number (count) of vowels in a given string. Letters considered as vowels are: a, i, e, o, and u. The function should be able to take all types of characters as input, including lower case letters, upper case letters, symbols, and numbers.
*/

function vowelCounter(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const word = str.toString().toLowerCase();
  let count = 0;

  for (const char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = vowelCounter;
