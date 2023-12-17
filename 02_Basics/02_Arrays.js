const marvelHeros = ["Thor", "IronMan", "SpiderMan"];
const dcHeros = ["Superman", "Flash", "Batman"];

//? Concatenation Methods
//! Using Push() for concatenation
marvelHeros.push(dcHeros);
//^ Output: [ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'Flash', 'Batman' ]]

//! Using concat() for concatenation
const allHeros = marvelHeros.concat(dcHeros);
//^ Output: [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]

//! Using Spread Operator (...v) for concatenation
const allNewHeros = [...marvelHeros, ...dcHeros];
//^ Output: [ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Flash', 'Batman' ]

//? different depth of array merge into a simple one array
//& Using flat(depthValue)
const anotherArray = [1, 5, 7, [65, 98, 12], 76, 9, [23, 27, [56, 90, 45]]];
const mergeArray = anotherArray.flat(Infinity);
//^ Output: [ 1, 5,  7, 65, 98, 12, 76, 9, 23, 27, 56, 90, 45 ]
console.log(mergeArray);

//? Check whether it's a Array or not
console.log(Array.isArray("SayanNayek")); //^ Output: False

//? Convert the String or anything into Array
//& Using Array.from()
console.log(Array.from("SayanNayek"));
//^ Output: ['S', 'a', 'y', 'a', 'n', 'N', 'a', 'y', 'e', 'k']

//& Using Array.of(element1, element2, element3)
const score1 = 100;
const score2 = 800;
const score3 = 900;
console.log(Array.of(score1, score2, score3)); //^ Output: [ 100, 800, 900 ]
