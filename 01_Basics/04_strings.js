const name = "Sayan"; //!String Declaration
const repoCount = 50;

//? console.log(name + repoCount + " Value"); Don't do this because it's not used in today's date
//? We use String Interpolation instead of this
console.log(`Hello My name is ${name}, my repo count in github is ${repoCount}`);

//!Declaring String in another way
const gameName = new String("Sayan");

console.log(gameName.toUpperCase());
//* Output: SAYAN
console.log(gameName.charAt(2));
//* Output: y
console.log(gameName.indexOf("y"));
//* Output: 2

let url = "https://imsayannayek.com/github.com%20ffda%20hgfdav/";
console.log(url.replace('%20', '-'));