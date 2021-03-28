const { prototype } = require("../src/ship.js");
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    expect(ship.currentPort).toEqual(port);
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });
});

describe("dock", () => {
  it("can dock at a new port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);

    const plymouth = new Port("Plymouth");
    ship.dock(plymouth);

    expect(ship.currentPort).toEqual(plymouth);
  });
});
