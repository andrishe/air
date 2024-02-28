const operator = require("./006-operation");

describe("fonction operator", () => {
  test("operator retourne le add ou sub", () => {
    const operation = "add";
    const numb = "10 20";
    const numb2 = 5;

    const result = operator(operation, numb, numb2);

    expect(result).toBe("15 25");
  });

  test("operator retourne sub", () => {
    const operation = "sub";
    const numb = "10 20";
    const numb2 = 5;

    const result = operator(operation, numb, numb2);

    expect(result).toBe("5 15");
  });
});
