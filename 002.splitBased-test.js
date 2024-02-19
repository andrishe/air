const splitStr = require("./002-splitBased");

describe("test de la function découpe ", () => {
  test("test function qui enlève et sépare le str en tableau ", () => {
    const str = "Crevette magique dans la mer des étoiles";
    const newStr = splitStr(str);
    expect(newStr).toBe("Crevette magique dans\nmer des étoiles");
  });
});
