const quickSort = require("./013-quickSort");

describe("function de trie rapide", () => {
  test("tableau de nombre à trier", () => {
    const numbArray = [18, 16, 15, 14, 13];

    const numberSort = quickSort(numbArray);
    expect(numberSort).toEqual([13, 14, 15, 16, 18]);
  });
});
