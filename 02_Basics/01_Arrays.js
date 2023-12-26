const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr);

myArr.push(63); //^ Add element from the end side
myArr.pop(); //^ Remove element from the end side
myArr.unshift(9); //& Add element from the beginning side
myArr.shift(); //& Remove element from the beginning end

console.log(myArr.includes(2)); //! Check the element is present or not
console.log(myArr.indexOf(4)); //! Give element position no.

const newArr = myArr.join(); //? Convert the Array into String

//* Difference b/w Slice() & Splice()
console.log("Original Array: " + myArr);

const useSlice = myArr.slice(0, 2);
console.log(`Using Slice: ${useSlice}`);
console.log("Original Array: " + myArr);

const useSplice = myArr.splice(0, 2);
console.log(`Using Splice: ${useSplice}`);
console.log("Original Array: " + myArr);

/*
! So, Using Splice() the Main Array is manipulated but using Slice() the Main
! Array is not Manipulated
? Original Array: 1,2,3,4,5,6
* Using Slice: 1,2
? Original Array: 1,2,3,4,5,6
* Using Splice: 1,2
? Original Array: 3,4,5,6
*/

