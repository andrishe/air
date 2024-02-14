const readlineSync = require("readline-sync");

const removeStrDuplicate = (strDuplicate) => {
  if (!isNaN(strDuplicate)) {
    console.log("Erreur: Veuillez entrer une phrase.");
    process.exit(1);
  }

  let strResult = "";
  let strArray = "";

  for (let str of strDuplicate) {
    if (str !== strArray) {
      strResult += str;
      strArray = str;
    }
  }

  console.log(strResult);
};

const strDuplicate = readlineSync.question("Entrez votre phrase: ");

removeStrDuplicate(strDuplicate);
