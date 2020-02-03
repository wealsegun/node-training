// Using Process.argv[]
// var totalCost = 14.99;

// var sizeOfParty = process.argv[2];
// var averageCost = totalCost/ sizeOfParty;
// console.log( "$" + averageCost);

var dice = require("./dice");
var die = dice.die;
die.size = 10;
console.log(die.size);
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);
