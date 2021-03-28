const Port = require("../src/port");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("has a name property", () => {
    const port = new Port("Dover");

    expect(port.name).toEqual("Dover");
  });
});
