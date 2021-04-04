const Port = require("../src/port");

describe("Port", () => {
  let port;
  let ship;
  let ship2;

  beforeEach(() => {
    port = new Port("Dover");
    ship = jest.fn();
    ship2 = jest.fn();
  });

  describe("constructor", () => {
    it("returns an object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("has a name property", () => {
      expect(port.name).toEqual("Dover");
    });
    it("can add a ship", () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });
    it("can remove a ship", () => {
      port.addShip(ship);
      port.addShip(ship2);
      port.removeShip(ship2);

      expect(port.ships).toEqual([ship]);
    });
  });
});
