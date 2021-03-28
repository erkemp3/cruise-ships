const Ship = require("./src/ship.js");

const ship = new Ship("Southampton");

const nextPort = new Port("Dover");

console.log(ship.startingPort);
console.log(nextPort.name);

ship.setSail();

console.log(ship.startingPort);
