const fs = require("fs");
const { execSync } = require("child_process");

const exercises = [
  "001-split.js",
  "002-splitBased.js",
  "003-concat.js",
  "004-intruder.js",
  "005-adjacent.js",
  "006-operation.js",
  "007-pass.js",
  "008-insert.js",
  "009-merge.js",
  "010-rotate.js",
  "011-display.js",
  "012-pyramid.js",
  "013-quickSort.js",
];

let exCount = 0;

exercises.forEach((exercise, index) => {
  if (fs.existsSync(exercise)) {
    console.log(`L'exercice ${exercise} existe 😃.`);

    try {
      execSync(`node ${exercise}`);
      console.log(
        `${exercise} (${index + 1}/${exercise.length}) : 🟩 success.`
      );
      exCount++;
    } catch (error) {
      console.error(`${exercise} : 🟥 failure.`, error);
    }
  } else {
    console.warn(`L'exercice ${exercise} n'existe pas 😡.`);
  }
});

console.log(`Total success: ${exCount}/${exercises.length}`);
