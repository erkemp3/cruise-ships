const Ship = require("./src/ship.js");

const port = "Southampton";
const ship = new Ship(port);

console.log(ship.port);

ship.setSail();

console.log(ship.port);
