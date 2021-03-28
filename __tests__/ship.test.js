const Ship = require("../src/ship.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has the given starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toEqual("Dover");
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });
});
