const fs = require("fs");
const display = require("./011-display");

describe("fonction qui affiche le contenu d'un fichier", () => {
  test("display retourne le contenu du fichier", async () => {
    const mockReadFile = jest.spyOn(fs, "readFile");
    mockReadFile.mockImplementation((path, encoding, callback) => {
      callback(null, "Je ai appris à coder en JavaScript !");
    });

    const path = "a.txt";
    const displayFile = await display(path);

    expect(displayFile).toBe("Je ai appris à coder en JavaScript !");
  });
});
