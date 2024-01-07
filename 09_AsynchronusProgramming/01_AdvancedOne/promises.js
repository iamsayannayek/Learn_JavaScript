//! Create Promise by use various types
//& Method 1
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 1 is completed");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Async 1 resolved");
});

//& Method 2
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 is completed");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
});

//& Method 3: Data Consumption & also How value passes through a resolve() to then()
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "iamsayannayek",
            emailId: "sayananayek02@gmail.com"
        });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

//& Method 4: Chaining & Error Handling & know about finally() method
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({
                emailId: "sayannayek02@gmail.com",
                name: "Sayan Nayek"
            });
        } else {
            reject(("ERROR: This is went wrong"));
        }
    }, 1000);
});

promiseFour
    .then((user) => {                      //!      ----|
        console.log("Async 4 is resolve"); //!      |     
        return user.emailId;               //! Chaining |
    })                                     //!          |
    .then((emailId) => {                   //!          |
        console.log(`User Email Id: ${emailId}`);//!|
    })                                      //!     ----|
    .catch((reject) => { //* It's Handle the error or print the error
        console.log(reject);
    })
    .finally(() => { //* Whatever error or resolve it's always execute
        console.log("The promise is either resolve or rejected");
    });

//& Method 5: (async - await) & (try{} & catch{})
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({
                emailId: "sayannayek02@gmail.com",
                name: "Sayan Nayek"
            });
        } else {
            reject(("ERROR: JS went wrong"));
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response.emailId);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

//& Method 6: Use fetch() in async-await function
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); //* It's converted to json format
        //! Always put await before json because it's take time to convert
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
getAllUsers();

//& Method 7: Doing the exact same thing in .then().catch() as in Method 6
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })

