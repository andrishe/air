const splitStr = require("./003-concat");
describe("test tableau de chaîne de caractères", () => {
  test("function qui transforme un tableau en chaîne de caractères", () => {
    const str = "je teste mon code";
    const strChar = splitStr(str);
    expect(strChar).toBe("je teste mon code");
  });
});
