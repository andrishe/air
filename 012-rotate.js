const readlineSync = require("readline-sync");
const rotateArray = (str) => {
  if (!isNaN(str)) {
    console.log("Error entrez une phrase");
    process.exit(1);
  }

  let strArray = str.split(" ");
  let strRotate = strArray[0];

  for (let i = 0; i < strArray.length - 1; i++) {
    strArray[i] = strArray[i + 1];
  }
  strArray[strArray.length - 1] = strRotate;

  return strArray.join(" ");
};

const str = readlineSync.question("Entrez le nombre de ligne: ");

console.log(rotateArray(str));
