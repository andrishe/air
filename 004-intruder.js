const readlineSync = require("readline-sync");

const intruderNum = (numb) => {
  let number = numb.split(" ").map(Number);

  if (number.some(isNaN)) {
    console.log("Error entrez des chiffres");
    process.exit(1);
  }

  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum ^= number[i];
  }
  return sum;
};

const numb = readlineSync.question("Entrez des numéros: ");
console.log(intruderNum(numb));

module.exports = intruderNum;
