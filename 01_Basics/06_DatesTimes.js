//^ Dates Basics

let myDate = new Date();
console.log(myDate);

console.log(`toDateString(): ${myDate.toDateString()}`);
console.log(`toISOString(): ${myDate.toISOString()}`);
console.log(`toJSON(): ${myDate.toJSON()}`);
console.log(`toLocaleString(): ${myDate.toLocaleString()}`);
console.log(`toLocaleDateString(): ${myDate.toLocaleDateString()}`);
/* 
* Output: 
! toDateString(): Sat Dec 16 2023
! toISOString(): 2023-12-16T11:07:13.234Z
! toJSON(): 2023-12-16T11:07:13.234Z
! toLocaleString(): 16/12/2023, 4:37:13 pm
! toLocaleDateString(): 16/12/2023

& Date in JS is a Object
*/
console.log(" ");

let myCreateDate1 = new Date(2023, 0, 23); //^ Output: 23/1/2023, 12:00:00 am
let myCreateDate2 = new Date(2023, 0, 23, 5, 3); //^ Output: 23/1/2023, 5:03:00 am
let myCreateDate3 = new Date("12-16-2023"); //^ Output: 16/12/2023, 12:00:00 am
console.log(myCreateDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //& Give Us Values in milliseconds
console.log(myCreateDate3.getTime());
console.log(Math.floor(Date.now() / 1000)); //! Give us Values in Seconds
