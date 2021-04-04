const { prototype } = require("../src/ship.js");
const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe("Ship", () => {
  let dover;
  let plymouth;

  beforeEach(() => {
    dover = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Dover",
      ships: [],
    };
    plymouth = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Plymouth",
      ships: [],
    };
    itinerary = new Itinerary([dover, plymouth]);
    ship = new Ship(itinerary);
  });

  describe("with ports and an itinerary", () => {
    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toEqual(dover);
    });

    it("has a previous port", () => {
      expect(ship.previousPort).toEqual(null);
    });
  });

  describe("setSail", () => {
    it("can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(dover);
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
    it("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
    it("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });

  describe("dock", () => {
    it("can dock at a new port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toEqual(plymouth);
      expect(plymouth.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
