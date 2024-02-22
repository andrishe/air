const readlineSync = require("readline-sync");

const merge = (left, right) => {
  let result = [];
  let leftI = 0;
  let rightI = 0;

  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      result.push(left[leftI]);
      leftI++;
    } else {
      result.push(right[rightI]);
      rightI++;
    }
  }
  return result.concat(left.slice(leftI)).concat(right.slice(rightI));
};

const sortMerge = (numberArray, numberArray2) => {
  if (numberArray.length <= 1 && numberArray2.length <= 1) {
    return numberArray.concat(numberArray2);
  }

  const divide = Math.floor(numberArray.length / 2);
  const left = numberArray.slice(0, divide);
  const right = numberArray.slice(divide);

  const divide2 = Math.floor(numberArray2.length / 2);
  const left2 = numberArray2.slice(0, divide2);
  const right2 = numberArray2.slice(divide2);

  const mergedLeft = sortMerge(left, left2);
  const mergedRight = sortMerge(right, right2);

  return merge(mergedLeft, mergedRight);
};

const number = readlineSync.question("Entrez une liste de nombres: ");
const number2 = readlineSync.question("Entrez une deuxième liste de nombres: ");

const sortedArray = sortMerge(
  number.split(" ").map(Number),
  number2.split(" ").map(Number)
);

console.log(sortedArray.join(" "));

module.exports = sortMerge;
