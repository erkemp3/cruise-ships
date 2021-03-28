const { prototype } = require("../src/ship.js");
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toEqual(port);
  });

  it("has a previous port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.previousPort).toEqual(null);
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const dover = new Port("Dover");
    const plymouth = new Port("Plymouth");
    const itinerary = new Itinerary([dover, plymouth]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });
  it("can't sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const plymouth = new Port("Plymouth");
    const itinerary = new Itinerary([dover, plymouth]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });
});

describe("dock", () => {
  it("can dock at a new port", () => {
    const dover = new Port("Dover");
    const plymouth = new Port("Plymouth");
    const itinerary = new Itinerary([dover, plymouth]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toEqual(plymouth);
  });
});
