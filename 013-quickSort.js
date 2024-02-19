const readlineSync = require("readline-sync");

const quickSort = (numbArray) => {
  if (numbArray.some(isNaN)) {
    console.log("Erreur: veuillez entrer uniquement des chiffres.");
    process.exit(1);
  }

  if (numbArray.length <= 1) {
    return numbArray;
  }

  let pivot = numbArray[0];
  let left = [];
  let right = [];

  for (let i = 1; i < numbArray.length; i++) {
    if (numbArray[i] < pivot) {
      left.push(numbArray[i]);
    } else {
      right.push(numbArray[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const input = readlineSync.question(
  "Entrez des numéros séparés par des espaces: "
);
const numbArray = input.split(" ").map(Number);

console.log("Résultat du tri rapide:", quickSort(numbArray).join(" "));
