const readlineSync = require("readline-sync");

const intruderNum = (numb) => {
  let number = numb.split(" ").map(Number);

  if (number.some(isNaN)) {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  let array = 0;

  for (let i = 0; i < number.length; i++) {
    array ^= number[i];
  }
  return array;
};

const numb = readlineSync.question("Entrez votre phrase: ");
console.log(intruderNum(numb));
