const splitStr = require("./001-split");

describe("test de la function splitStr", () => {
  test("test function split sépare le str en tableau ", () => {
    const splitStr = "bonjour comment cava";

    const strSplit = splitStr.split(" ").join("\n");

    expect(strSplit).toBe("bonjour\ncomment\ncava");
  });
});
