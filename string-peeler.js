/*
Your goal is to create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. You can choose to have your function return null or simply ignore.
*/

function stringPeeler(str) {
  if (str.length <= 2) {
    return null;
  } else {
    return str
      .split("")
      .map((c, i) => (i === 0 || i === str.length - 1 ? "" : c))
      .join("");
  }
}

module.exports = stringPeeler;
