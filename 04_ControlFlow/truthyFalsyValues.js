/*
*   In JS there is some value is consider as Truthy & Falsy Value, whenever you used
*  it, it's act like a truthy value or Falsy Value

&   Falsy Values in JavaScript
^   false, 0, -0, BigInt: 0n, ""(Empty String), null, undefined, NaN

&   Truthy Values in JavaScript
^   "0", 'false', " ", [], {}, function(){}
*/

//! Check Array is Empty or Not
const arr = [];
if(arr.length === 0){
    console.log("Array is Empty");
}

//! Check Object is Empty or Not
const myObj = {};
if(Object.keys(myObj).length === 0){
    console.log("Object is Empty");
}

/*
& Note => Output of Some condition check
* false == 0  => true
* false == '' => true
*   0   == '' => true
*/