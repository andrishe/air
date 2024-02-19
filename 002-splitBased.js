const readlineSync = require("readline-sync");

const splitStr = (str) => {
  if (typeof str !== "string") {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  const strArray = str.split(" ");
  strArray.splice(3, 1);
  const separator = strArray.splice(3);

  const newStr = `${strArray.join(" ")}\n${separator.join(" ")}`;

  return newStr;
};

const str = readlineSync.question("Entrez votre phrase: ");

console.log(splitStr(str));

module.exports = splitStr;
