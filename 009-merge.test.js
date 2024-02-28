const sortMerge = require("./009-merge");

describe("fonction de trie par fusion", () => {
  test("trier deux tableau", () => {
    const numberArray = "10 20 30";
    const numberArray2 = "15 25 35";
    const fusionArray = sortMerge(
      numberArray.split(" ").map(Number),
      numberArray2.split(" ").map(Number)
    );

    expect(fusionArray).toEqual([10, 15, 20, 25, 30, 35]);
  });
});
