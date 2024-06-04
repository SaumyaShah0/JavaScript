// Primitive

// 7 types : String, Number, boolearn, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 514321564845545615451n;

// console.log(bigNumber);
// console.log(2**53);


// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Saumya",
    age: 20,
}

const myFunction = function (){
    console.log("Hello World!");
}

// console.log(typeof myFunction);



// ++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYTname = "saumyashahdotcom";

let anothername = myYTname;
anothername = "ChaiOrCode"

// console.log(myYTname);
// console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "saumya@google.com"

console.log(userOne.email);
console.log(userTwo.email);