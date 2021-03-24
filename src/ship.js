class Ship {
  constructor(startingPort) {
    this.port = startingPort;
  }

  setSail() {
    this.port = null;
  }
}

module.exports = Ship;
