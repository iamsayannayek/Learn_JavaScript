//! For of loops
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
	//* It's take values only
	// console.log(num); 
}

//! Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

for (const [key, value] of map) {
	// console.log(key, ":-", value);
}
//& Note: In object we can't use for-of loop for iteration

//! for-in loop
//* Object
const myObj = {
	sayan: "Ananya",
	sambit: "Ankita",
	guddu: "Sambit"
};

for (const key in myObj) {
	// console.log(myObj[key]);
}
//& Note: We can't use for-in loop for Map iteration

//* Arrays
const arr1 = [33, 43, 21, 45, 376, 87];
for (const key in arr1) {
	// console.log(key);
	//* Output: 0, 1, 2, 3, 4, 5
	// console.log(arr1[key]);
	//* Output: 33, 43, 21, 45, 376, 87
}

//! forEach() loop
const name2 = ["Sayan", "Ananya", "Sandipan", "Akash", "Sambit", "Sanat"];
name2.forEach((value) => {
	// console.log(value);
});

//^ Access Objects under Array by forEach() loop
const myCoding = [
	{
		language: "JavaScript",
		fileCode: "js"
	},
	{
		language: "Java",
		fileCode: "java"
	},
	{
		language: "Python",
		fileCode: "py"
	}
];

myCoding.forEach((item) => {
	console.log(item.language);
});