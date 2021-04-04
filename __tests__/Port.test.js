const Port = require("../src/port");

describe("Port", () => {
  let port;
  let titanic;
  let queenMary;

  beforeEach(() => {
    port = new Port("Dover");
    titanic = {};
    queenMary = {};
  });

  describe("constructor", () => {
    it("returns an object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
    it("has a name property", () => {
      expect(port.name).toEqual("Dover");
    });
    it("can add a ship", () => {
      port.addShip(titanic);

      expect(port.ships).toContain(titanic);
    });
    it("can remove a ship", () => {
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});
