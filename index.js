const Ship = require("./src/ship");

const port = "Southampton";
const ship = new Ship(port);

console.log(ship.port);

ship.setSail();

console.log(ship.port);
