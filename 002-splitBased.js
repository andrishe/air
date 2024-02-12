const readlineSync = require("readline-sync");

const splitStr = (str) => {
  if (!isNaN(str)) {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  const strArray = str.split(" ");
  strArray.splice(3, 1);
  const separator = strArray.splice(3);

  const newStr = `${strArray.join(" ")} \n ${separator.join(" ")}`;

  return console.log(newStr);
};

const str = readlineSync.question("Entrez votre phrase: ");

splitStr(str);
