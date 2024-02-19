const readlineSync = require("readline-sync");

const splitStr = (str) => {
  if (!isNaN(str)) {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  const strSplit = str.split(" ");
  return strSplit.join(" \n ");
};

const str = readlineSync.question("Entrez votre phrase: ");

console.log(splitStr(str));

module.exports = splitStr;
