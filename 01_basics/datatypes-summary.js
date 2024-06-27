//  Primitive

//  7 types : 

// 1. String;
// 2. Number;
// 3. Boolean;
// 4. null;
// 5. undefined; 
// 6. Symbol; 
// 7. BigInt;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)


// 1. Array;
// 2. Objects;
// 3. Functions;

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3