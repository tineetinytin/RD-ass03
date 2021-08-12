
//--- COIN FLIP GAME ---

var coinFlip;
var ask = prompt('Give me a number.');
for ( i = 0; i < ask ; i++) {
    var mathRan = Math.round(Math.random());
    if (mathRan === 0) {
        console.log("Heads")
    }else if (mathRan === 1) {
        console.log("Tails");
    }
}

