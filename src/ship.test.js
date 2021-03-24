const Ship = require("./ship");

describe("Ship", () => {
  const port = "Southampton";

  it("has the given starting port", () => {
    const ship = new Ship(port);

    expect(ship.port).toEqual(port);
  });
});

describe("setSail", () => {
  const port = "Southampton";

  it("sets the port to null", () => {
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.port).toBe(null);
  });
});
