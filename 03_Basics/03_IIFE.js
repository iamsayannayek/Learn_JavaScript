//! Immediately Invoked Function Expression (IIFE)
//* IIFE is function which is execute immediate when the program is run 
//* And also USE IIFE because to avoid pollution by Global Scope Variable & other definition

//? How to write IIFE?
//& (function definition)(execution call)
(function chai() {
    //^ This function is called Named IIFE because the function have a name
    console.log(`DB IS CONNECTED`);
})();

//& Argument passed in IIFE
((name) => {
    console.log(`Hi, My name is ${name}`);
})("Sayan");

//* Note: Whenever you want write IIFE then always put the semi-colon along it, Then you can
//*       Write multiple IIFE in on program.