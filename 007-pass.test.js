const removeContainsStr = require("./007-pass");

describe("fonction qui supprime des elements qui ne contiennent pas une tra chaîne de caractères", () => {
  test("supprimer les chaines de caractères", () => {
    const strArray = "John Jane anna Doe";
    const char = "n";
    const filterStr = removeContainsStr(strArray, char);

    expect(filterStr).toBe("Doe");
  });
});
