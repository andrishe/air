const readlineSync = require("readline-sync");

const pushNumber = (number, insert) => {
  const numberArray = number.split(" ").map(Number);

  const insertNumber = Number(insert);

  numberArray.push(insertNumber);

  if (numberArray.some(isNaN) || isNaN(insertNumber)) {
    console.log(
      "Erreur: Entrez une liste de nombres et un nombre valide à insérer."
    );
    process.exit(1);
  }

  numberArray.sort((a, b) => a - b);

  return console.log(numberArray.join(" "));
};

const number = readlineSync.question("Entrez une liste de nombres: ");
const insert = readlineSync.question("Entrez une caractère: ");

pushNumber(number, insert);
