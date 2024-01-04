//! Singleton, who is made by constructor
//? Object.create

//! Object Literals
const JsUser = {
    name: "Sayan",
    age: 18,
    email: "sayannayek02@gmail.com",
    isLoggedIn: false
};

//* Array Access by dot(.) operator
console.log(JsUser.email);

//* Array Access by Square notation ["keyName"]
console.log(JsUser["name"]);

//& Create a Symbol and take it as a key and print the value of the object
const mySym = Symbol("key1");

const JSUser = {
    name: "Sayan",
    [mySym]: "myKey1",
    age: 18,
    email: "sayannayek02@gmail.com",
    isLoggedIn: false
};

console.log(JSUser[mySym]); //* Access Symbol like this

JSUser.greeting = function () {
    console.log(`Hi, My Name is ${this.name}`);
};

console.log(JSUser.greeting());
