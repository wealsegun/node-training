getDieRoll = function (dieSize) {

    var result =Math.ceil(dieSize * Math.random());
    return  result;
    };
    // var things =[1,2,3, "food", "pizza"];
    // console.log(things [3]);
    for (var i = 0; i < process.argv.length; i++) {
        console.log(process.argv[i]);
    }
    var roll = getDieRoll(6);


    // for (var i = 0; i < roll; i += 1) {
    //     console.log("*");
    //     // roll = getDieRoll(6);
    // }
    // while (roll <4) {
    //     console.log(roll);
    //     roll = getDieRoll(6);
    // }



    // do {
    //     roll = getDieRoll(6);
    //     console.log(roll);
    // } while(roll >4);


    // if (!(roll == 1 || roll == 6)) {
    //     console.log("Great roll");
    // }
    
    // console.log("You rolled a " + roll);
