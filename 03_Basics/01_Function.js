//! Type1: Function Definition
function sumTwoNum(num1, num2) { //^ Here the getting value is called parameters
    return (num1 + num2);
}

//! Type2: Function Definition (It's sometimes called Expression)
const sumTwoNum = function (num) {
    return num;
};

/* 
*   Note:
?       We define function by use any type format but in Type 2 there is a one problem
?   that is if we call function before it's define then it's showing error but in Type 1
?   it's doesn't showing error.
*/
//! Calling Function
const solve = sumTwoNum(3, 67); //^ Here the passing value in function called the Arguments

console.log(solve);

//! Passing multiple arguments in Function by Rest Operator
//& Syntax: '...variableName'
function multipleValues(...num) {
    return num;
}
console.log(multipleValues(200, 300, 500));
//* Output: [200, 300, 500]; It's Return an Array

//^ Interview Perspective
function numbersValue(var1, var2, ...vars) {
    console.log(var1, var2, vars);
}
numbersValue(200, 512, 5444, 897876, 343474);
/*
*   Output:
^   var1 = 200
^   var2 = 512
^   vars = [5444, 897876, 343474]
*/

//! Global Scope & Block Scope
let a = 10;
function one() {
    let a = 20;
    console.log(`Inner: ${a}`); //^ Block Scope Variables doesn't access from outer scope
}
one();
console.log(`Outer: ${a}`); //^ Access From anywhere