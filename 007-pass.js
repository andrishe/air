const readlineSync = require("readline-sync");

const removeContainsStr = (str, char) => {
  if (!isNaN(str)) {
    console.log("Erreur: Veuillez entrer une phrase.");
    process.exit(1);
  }
  const array = str.split(" ");
  const newArray = array.filter((arr) => !arr.toLowerCase().includes(char));

  return newArray.join(" ");
};

const str = readlineSync.question("Entrez votre phrase: ");
const char = readlineSync.question("Entrez une caractère: ");

console.log(removeContainsStr(str, char));

module.exports = removeContainsStr;
