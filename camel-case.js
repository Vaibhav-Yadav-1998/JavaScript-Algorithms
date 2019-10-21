/*
Write simple .camelCase algorithm for strings. All words must have their first letter capitalized without spaces.

For instance:

camelcase("hello case") => HelloCase
camelcase("camel case word") => CamelCaseWord
*/

function camelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(x => x[0].toUpperCase() + x.substring(1))
    .join("");
}

module.exports = camelCase;
