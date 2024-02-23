const rotateArray = require("./010-rotate");

describe("function qui décale un element", () => {
  test("décaler un element vers la gauche", () => {
    const str = "Jane Marcus Doe Anna";
    const rotate = rotateArray(str);

    expect(rotate).toEqual("Marcus Doe Anna Jane");
  });
});
