//Singleton Object Declaration 
const tinderUser = new Object()

//Object Literals
const fbUser = {}

const User1 = {1:"a", 2:"b"}
const User2 = {3:"c", 4:"d"}
const User3 = {5:"e", 6:"f"}
//& Objects Merge by Using Object.assign(target, source)
const UserMerge1 = Object.assign({}, User1, User2, User3)

//& Objects Merge by Using Spread Operator
const UserMerge2 = {...User1, ...User2,...User3}
// console.log(UserMerge2);

//^ Get all the keys or values into a Array format
const keyArr = Object.keys(UserMerge1); //& For Getting Keys
const valuesArr = Object.values(UserMerge1) //& For Getting Values
//& For Getting all the keys & Values in Array Form
const entriesArr = Object.entries(UserMerge1);
// console.log(entriesArr);

//^ Check that this property or key is present or not in Object
const JSUser = {
    name: "Sayan",
    mySym: "myKey1",
    age: 18,
    email: "sayannayek02@gmail.com",
    isLoggedIn: false
}

// console.log(JSUser.hasOwnProperty("isLogged"));

//! ++++++++++++++ Objects Destructuring +++++++++++++++++
const Course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Sayan"
}

const {courseInstructor} = Course;

console.log(courseInstructor);