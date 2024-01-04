//! reduce() method for sum total
/*
*   const InitialValue = 0;
*   const result = arr.reduce((Accumulator, CurrentValue)=>{
*       return accumulator + currentValue
*   }, InitialValue);
*/

const arr = [1, 2, 3];
const result = arr.reduce((acc, currval) => acc + currval, 0);

console.log(result);

//! Add all price of the courses
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);