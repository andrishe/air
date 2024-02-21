const removeStrDuplicate = require("./005-adjacent");

describe("fonction qui supprime caractères identiques", () => {
  test("removeStrDuplicate retourne caractères identiques", () => {
    const characters = "je code en javascript !!!!";
    const charactersRemove = removeStrDuplicate(characters);

    expect(charactersRemove).toBe("je code en javascript !");
  });
});
