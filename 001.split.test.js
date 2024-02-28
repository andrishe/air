const splitStr = require("./001-split");

describe("test de la fonction splitStr", () => {
  test("la fonction splitStr sépare la chaîne en tableau avec des sauts de ligne", () => {
    const inputStr = "bonjour comment cava";
    const expectedOutput = "bonjour\ncomment\ncava";

    const result = splitStr(inputStr);

    expect(result).toBe(expectedOutput);
  });
});
