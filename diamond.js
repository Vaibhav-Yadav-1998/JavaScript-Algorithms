/*
The shape that the print method will return should resemble a diamond. A number provided as input will represent the number of asterisks printed on the middle line. The line above and below will be centered and will have two less asterisks than the middle line. This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.
Return null if input is an even number or a negative number.
*/

function rows(num, x) {
  const space = " ".repeat(Math.floor((num - x) / 2));
  return space + "*".repeat(x) + space;
}

function diamond(num) {
  if (num % 2 === 0) {
    return null;
  } else {
    const result = [];
    for (let i = 1; i <= num; i += 2) {
      result.push(rows(num, i));
    }

    for (let i = num; i > 0; i -= 2) {
      if (num === i) {
        continue;
      }
      result.push(rows(num, i));
    }

    return result.join("\n");
  }
}

module.exports = diamond;
