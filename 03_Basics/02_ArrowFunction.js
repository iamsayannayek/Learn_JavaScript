//! 'this' keyword refer to current context
const user = {
    username: "Sayan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}
/*
* Note:
&   In Node Environment --> Print Globally:
^       console.log(this)
?       Output: {}
&   In Browser --> Print Globally:
^       console.log(this)
?       Output: Window Object (It's a global Object of Browser)
*/

//! Arrow function define
const car = (name) =>{
    return name; //* It's called Explicit return
}

// console.log(car("BMW"));
//& We define arrow function by another way that's called "Implicit return"
const car1 = (name) => (name); //* Here we don't used return keyword
//* If we use return statement then we need to add curly parenthesis

//? For returning object by this method type
const obj = () => ({username: "Sayan"})

console.log(obj());