// let and const
// both are braces scoped
let a = 0;
const b = 0;


// arrow functions 
// 3 types
// basic fat arrow function
var f = ()=>{};

// fat arrow function with one parameter
var f = (param)=>{};

// fat arrow function with implicit return
var f = ()=>12;
console.log(f());


// template literals backtick (``)
console.log(`This is ${2*5}`);


// default parameters
function func(a = 10, b = 10, c = 10) {
    console.log(a, b, c);
}

func(1,2,3);
func(); // it prints default values


// spread/rest operator
// 1.spread -> it copies all the elements to another variable 
var arr = [1,2,3,4];
var arr2 = [...arr];

// 2.rest -> it stores rest of the elements 
function abcd(a, b, c, ...d) {
    console.log(a, b, c, d);
}
abcd(1,2,3,4,5,6,7);


// destructuring
var arr = [1,2,3];
var [x,y,z] = arr;
console.log(x, y, z);

var obj = {
    name: "naren",
    age: 21
}
var {age} = obj;
console.log(age);


// try and catch -> it catches the error if occur and doesn't stop the code
console.log("hey");
try {
    console.log(hey);
}
catch(err) {
    console.log(err);
}
console.log("hey");