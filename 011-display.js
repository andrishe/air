const fs = require("fs");

fs.readFile("a.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  console.log("Données lues depuis le fichier :", data);
});
