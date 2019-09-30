/*
A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.
write a function that take a string and tell whether it is a palindrome or not
*/

function isPalindrome(str) {
  const word = str.toLowerCase();
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
}

module.exports = isPalindrome;
