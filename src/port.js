(function exportPort() {
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
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
