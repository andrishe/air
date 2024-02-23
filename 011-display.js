const fs = require("fs");

const display = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        reject(err);
      }
      resolve(data);
    });
  });
};

module.exports = display;
