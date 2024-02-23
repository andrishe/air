const readlineSync = require("readline-sync");

const pyramid = (rows, str) => {
  if (!isNaN(str)) {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  let pyramidStr = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      pyramidStr += " ";
    }

    for (let k = 0; k != 2 * i - 1; k++) {
      pyramidStr += str;
    }

    for (let j = i + 1; j <= rows; j++) {
      pyramidStr += " ";
    }
    pyramidStr += "\n";
  }
  return pyramidStr;
};
const rows = readlineSync.question("Entrez le nombre de ligne: ");
const str = readlineSync.question("Entrez un caractère: ");

console.log(pyramid(rows, str));

module.exports = pyramid;
