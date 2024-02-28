const intruderNum = require("./005-adjacent");

describe("fonction qui supprime l'intrus", () => {
  test("intruderNum retourne l'intrus", () => {
    const intrus = "2 3 4 5 2 4 3";
    const intruder = intruderNum(intrus);

    expect(intruder).toBe(5);
  });
});
