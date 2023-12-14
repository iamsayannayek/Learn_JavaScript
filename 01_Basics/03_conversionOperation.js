const num = undefined;

const num1 = Number(num);
console.log(num1);
console.log(typeof num1);
// "33" => 33
// "" => 0
// null => 0
// true => 1
// undefined => NaN

// ***************Operation**********
console.log(1 + 2 + "3");
// Output: 33

console.log("1" + 2 + 3);
// Output: 123

let gameCounter = 100;
//Postfix Operator = 1st assign then increment
gameCounter++;
console.log(gameCounter);
//Prefix Operator = 1st increment then assign
++gameCounter;
console.log(gameCounter);
