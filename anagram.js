/*
A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.
write a function that takes two strings and tells whether they are anagram or not
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {};
  const map2 = {};

  for (let i of str1) {
    if (!map1[i]) {
      map1[i] = 1;
    } else {
      map1[i]++;
    }
  }

  for (let i of str2) {
    if (!map2[i]) {
      map2[i] = 1;
    } else {
      map2[i]++;
    }
  }

  for (let i in map1) {
    if (!map2[i] || map1[i] !== map2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
