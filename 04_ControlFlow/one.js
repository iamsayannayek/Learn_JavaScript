//! if / else if/ else Statement
/*
*   < : less than / > : Greater than
*  <= : less than equal-to / >= : Greater than equal to / != : not equal to
* === : Triple equal-to => It's check Value as well as Type
*  == : Double equal to => It's Check only Values are same or not.
*/
if (2!=2) {
    console.log("Amii");
}else if(2==0){
    console.log("Sayan");
}else{
    console.log("Nayek");
}

//& ++++++++++++++ switch-case +++++++++++++++++
const month = 2;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Please enter the current month value");
        break;
}

//& Nullish Coalescing Operator (??): Works on only null/undefined values
let val1;
val1 = null ?? 10;
//* Output: val1 => 10

val1 = undefined ?? 15;
//* Output: val1 => 15

val1 = null ?? 10 ?? 20;
//* Output: val1 => 10

//& Ternary Operator: condition ? true : false
const icePrice = 100;
icePrice <= 80 ? console.log("Price Less than 80") : console.log("Price More than 80");