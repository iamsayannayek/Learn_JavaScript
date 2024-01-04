const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num * 10);


//! Chaining Rules
const modifiedNums = myNums
    .map((num) => num * 10) //* After map() the Values pass on the next map() not store in variable
    .map((num) => num + 1)//* After map() that values pass on the next method filter()
    .filter((num) => num >= 40); //* Now after filter() the results store in the modufiedNums

console.log(modifiedNums);