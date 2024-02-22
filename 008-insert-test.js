const pushNumber = require("./008-insert");

describe("function qui ajoute liste trié par ordre croissant", () => {
  test("tester avec un element ajouté", () => {
    const number = "1 3 4";
    const insert = "2";

    const result = pushNumber(number, insert);

    expect(result).toBe("1 2 3 4");
  });
});
