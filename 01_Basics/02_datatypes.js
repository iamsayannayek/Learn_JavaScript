"use strict"; //treat all js code as newer version of JS

// Number
// bigInt
// null => standalone value
// Symbol => unique value

console.log(`null: ${typeof null}`);
// Output: Object

console.log(`Undefined: ${typeof undefined}`);
// Output: Undefined

//*****************************************
/*
Based on how data store in Memory datatypes are two types in JS
1. Primitive Datatypes (Call By Value):
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

2. References Type/Non-primitive Datatype:
Arrays, Objects, Functions

JavaScript is a Dynamically Typed Language
*/

//Symbol Example
const num = Symbol("123");
console.log(`Symbol: ${typeof num}`);

//BigInt
const bigNumber = 5465246257627626778789n;
console.log(`BigInt: ${typeof bigNumber}`);

//Arrays:
const heros = ["Sayan", "Ananya"];
console.log(`Arrays: ${typeof heros}`);

//Objects:
let myObj = {
  name: "Sayan",
  age: 21,
};
console.log(`Object: ${typeof myObj}`);

//Functions:
const name1 = function () {
  console.log("Hello World");
};
console.log(`Functions: ${typeof name1}`);

//Output of all Datatypes:
/*
null: object
Undefined: undefined
Symbol: symbol
BigInt: bigint
Arrays: object
Object: object
Functions: function
*/

//++++++++++++++++++++++++++++++++++++++
/*  
## All Primitive Datatypes are store into Stack
  # In Stack only copy of a value is pass, 
  Original one is remain same

## All Non-Primitive Datatypes are store into Heap
  # In Heap references of value is passed, 
  if it changed original one is also changed

*/
