class Port {
  constructor(portName) {
    this.name = portName;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    const shipIndex = this.ships.indexOf(ship);
    this.ships.splice(shipIndex, 1);
  }
}

module.exports = Port;
