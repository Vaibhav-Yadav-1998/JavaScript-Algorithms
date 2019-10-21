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

  for (let i in str1) {
    const str1Char = str1[i];
    const str2Char = str2[i];

    if (!map1[str1Char]) {
      map1[str1Char] = 1;
    } else {
      map1[str1Char]++;
    }
    
    if (!map2[str2Char]) {
      map2[str2Char] = 1;
    } else {
      map2[str2Char]++;
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