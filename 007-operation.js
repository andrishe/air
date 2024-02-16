const readlineSync = require("readline-sync");

const operator = (operation, number, number2) => {
  const numberArray = number.split(" ").map(Number);

  const num = Number(number2);

  if (numberArray.some(isNaN) || isNaN(num)) {
    console.log(
      "Erreur: Entrez une liste de nombres et un nombre valide à insérer."
    );
    process.exit(1);
  }

  let result = [];

  if (operation === "add") {
    for (let i = 0; i < numberArray.length; i++) {
      result.push(numberArray[i] + num);
    }
  } else if (operation == "sub") {
    for (let i = 0; i < numberArray.length; i++) {
      result.push(numberArray[i] - num);
    }
  }
  console.log(result.join(" "));
};

const operation = readlineSync.question("Quelle opération souhaitez-vous: ");
const number = readlineSync.question("Entrez une liste de nombres: ");
const number2 = readlineSync.question("Entrez un nombre: ");

operator(operation, number, number2);
