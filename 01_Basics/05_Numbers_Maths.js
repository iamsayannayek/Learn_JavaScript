//Declaration of A Number
const num = 120;
const num1 = new Number(111);

//Number methods
const anotherNum = new Number(123.423);
console.log(anotherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
console.log(Number.MAX_SAFE_INTEGER);

// +++++++++++++++++++++++++Maths++++++++++++++++++++++++
console.log(Math.abs(-4));
console.log(Math.round(3.6));
console.log(Math.ceil(3.6));
console.log(Math.floor(3.6));

console.log(Math.random()); //Gives a value b/w 0 & 1

//For getting random number b/w a range then we use this formula
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //This gives a number b/w 10 & 20
