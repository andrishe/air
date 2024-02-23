const pyramid = require("./012-pyramid");

describe("fonction qui réalise une pyramide", () => {
  test("test de la pyramide", () => {
    const rows = 5;
    const str = "a";
    const result = pyramid(rows, str);

    const equal =
      "    a    \n" +
      "   aaa   \n" +
      "  aaaaa  \n" +
      " aaaaaaa \n" +
      "aaaaaaaaa\n";

    expect(result).toEqual(equal);
  });
});
