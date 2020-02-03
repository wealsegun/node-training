// Rolling a random number with Dice

getDieRoll = function (dieSize) {

var result =Math.ceil(dieSize * Math.random());
return  result;
};
var showResult = function() {
    console.log(firstDie);
    console.log(secondDie);
    console.log(firstDie + secondDie);
};
var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);

// var value =6 * Math. ();
// var roll = Math.ceil(value);
// var rolls = Math.floor(value);
showResult();

