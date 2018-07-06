/*
 *  Algorithm that returns an array of symmetric difference of provided arrays 
 */

function sym(args) {
  // storing arguments in an array
  const arr = Object.values(arguments);

  // function for finding symmetric diff between two arrays
  function diff(a, b) {
    // converting arrays to set to remove duplicate values
    let setA = new Set(a);
    let setB = new Set(b);

    let arrA = [];
    let arrB = [];

    // object for storing number of times a value occurs
    let valueMap = {};

    // result => for storing symmetric diff
    let result = [];

    // converting set back to array
    for (let i of setA) {
      arrA.push(i);
    }

    for (let i of setB) {
      arrB.push(i);
    }

    // checking occurrence of a value
    arrA.map(x => {
      valueMap[x] ? valueMap[x]++ : (valueMap[x] = 1);
    });

    arrB.map(x => {
      valueMap[x] ? valueMap[x]++ : (valueMap[x] = 1);
    });

    // storing valid values to result array
    for (let i in valueMap) {
      valueMap[i] === 1 ? result.push(parseInt(i)) : false;
    }

    return result;
  }

  // reducing arr to get the final result
  return arr.reduce(diff);
}

//////////////////////////////////////////////////////
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
