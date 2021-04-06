const Port = require("./src/port.js");
const Ship = require("./src/ship.js");
const Itinerary = require("./src/itinerary.js");

const dover = new Port("Dover");
const plymouth = new Port("Plymouth");
console.log(dover);
console.log(plymouth);
const ports = [dover, plymouth];
const itinerary = new Itinerary(ports);
const explorer = new Ship(itinerary);

console.log(explorer.currentPort);
console.log(explorer.previousPort);
explorer.setSail();
explorer.dock();

console.log(explorer.currentPort);
console.log(explorer.previousPort);
