
//--- COIN FLIP STREAK GAME ---

var coinFlip;
do {    
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads")
    } else {
        console.log(" You finally got tails")
    }
} while (coinFlip === 0);

