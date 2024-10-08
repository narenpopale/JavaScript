// var const let

var name = "naren"; // var can be redeclare, reinitialize (Global Scope)
let naav = "naren"; // let can't be redeclare and can be reinitialize (Block Scope)
const naam = "naren"; // const neither redeclare nor reinitialize (Block Scope)


// hoisting - variables and functions are hoisted which means there declarations is moved on the top of the code


console.log(a); // It dosen't give error! since a is already declared on the top because of hoisting
var a = 12;


// undefined and not defined
// undefined is the default value of variables which is not initialized
// not defined means variable is not declared in the code and undefined means variable is declared in the code but not get initialized yet.

var z;
// console.log(z); // OP - undefined
// console.log(y) // OP - not defined


// Data types in js
// 1 Primitive Data types --> it passed by value
// 2 Reference Data types --> () [] {} - it passed by reference

// Primitive Data types (7 types)
// Number, String, Boolean, Undefined, null, BigInt, Symbol
var age = 12;
var myage = age;
age = 1;
// Now age value is 1 and myage value is 12;

// Reference Data type
var arr = [1, 2, 3, 4];
var vector = arr;
arr[0] = 10;
// Now arr[0] and vector[0] value is 10;


// conditionals - if else, else-if
// loops - for, while

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Operators
// (==) - checks equality ignore data type
// (===) - checks equality with data type
// (!==) - checks equality with data type


// functions
function func() {
    console.log("Hello World");
}

// Arrow functions
const arrowFunc = () => {
    console.log("Hello World");    
}



// AARAYS
var array = [1, 2, 3, 4];

array.push(5); // means push_back
array.pop(); // means pop_back
array.unshift(0); // means push_front
array.shift(); // means pop_front
array.slice(1, 3); // It returns part of array
array.splice(1, 2); // means erase 2 elements from 1st index
array.toString(); // It returns new String


// MAP METHOD IN ARRAY
// map is similar to the foreach but it is used to create new array
let newArr = array.map((val, index, array) => {
    return val;
})

// FILTER METHOD IN ARRAY
// filter is used to filter some elements from array based on condition and it creates new array
let evenArr = array.filter((val, index, array) => {
    return val % 2 === 0;
})

// REDUCE METHOD IN ARRAY
// reduce performs some operations and reduces the array to a single value. It returns that single value.
let output = array.reduce((prev, curr) => {
    return prev + curr;
})



// Strings
let newStr = "newString";
let temp = `This is a Template Literal`;
newStr.length;
newStr.toUpperCase(); // It returns new String
newStr.toLowerCase(); 
newStr.trim(); // Removes spaces from front and back
newStr.slice(0, 3); // It returns part of string
newStr.concat("string"); // It returns new string
newStr.replace("s", "r"); // It returns new string
newStr.charAt(2); 


// Objects - Collections of different data types

// 1) blank obj
const obj1 = {
    // kay: value
}

// 2) filled obj
const obj2 = {
    // kay: value

    // properties = name, age, profession
    // methods = func

    name: "naren",
    age: 21,
    profession: "engineer",
    func: function () {

    }
}

obj2.age = 22; // updating the value

// accesing value
console.log(obj2.name);
console.log(obj2["name"]);

// Deleting Key: value pair
delete obj2.age;



// DIFFERENCE BETWEEN VAR, LET AND CONST

// 1)
// js versions - ES5 and ES6
// ES5 - var
// ES6 - let, const
// JS = ES5 + ES6


// 2)
// var is function scoped - var can be used in its parent function
function myVar() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);  // Not gives error because i is var
}

myVar();


// let and const are braces scoped - its scope is within the braces
function myLet() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i);  // gives error because i is let
}

myLet();


// 3)
// var adds itself to the window object
// let, const dosen't adds themself to the window object

// WINDOW OBJECT
// NOTE - window object contains the features of browsers and that features are not the part of JS Language.

var iamvar = 0;
let iamlet = 0;



// BROWSER CONTEXT API
// it contains below three parts
// 1. window object
// 2. stack
// 3. heap memory


// HEAP MEMORY 
// it stores the intermediate data


// EXECUTION CONTEXT
// it is a container where the function's code is executed and it's created whenever a function is called, it contains 3 things, variables, functions and lexical environment


// LEXICAL ENVIRONMENT
// it determines where variables are declared and how they are accessed within the code


// HOW TO COPY REFERENCE VALUE
// using spread operator -> (...)

// array
var arr = [1, 2, 3, 4, 5];
var newarr = [...arr]; // arr gets copied to the newarr

// object
var objt = {
    name: "naren"
}
var newobjt = { ...objt };


// TRUTHY VS FALSY
// every value in js either belongs to truthy or falsy
// falsy values - 0, false, undefined, null, NaN, document.all
// truthy values - other than falsy values

if ("naren") {
    console.log("True");
}
else {
    console.log("False");
}



// LOOPS

// 1. forEach
// it works only on arrays

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

nums.forEach(function (val, index, array) {
    console.log(val);
});


// 2. forin
// it works only on objects

var oj = {
    name: "name",
    age: 21,
    rollNo: 123
}

for (let key in oj) {
    console.log(key); // prints only key's of object
    console.log(oj[key]); // prints key's values of object
}


// 3. forof
// it works only on strings and arrays

let str = "newstring";

for (let val of str) {
    console.log(val);
}


// 4. do while

var i = 0;

do {
    console.log(i);
    i++;
} while (i < 1);



// CALLBACK FUNCTIONS
// functions which runs after particular time or after completing particular task is called as callback functions.

setTimeout(function () {
    console.log("Hello World");
}, 5000);


// HIGHER ORDER FUNCTIONS
// functions which takes functions as an argument or functions which returns a another function


// FIRST CLASS FUNCTIONS
// functions which are used as a value

function print(a) {
    a();
}

print(function () { console.log("First Class Function"); });



// ARRAYS BEHIND THE SCENE
// array is the object behind the scene

var numbers = [12, 12, 12, 12, 12];

// numbers = {
//     0: 12,
//     1: 12,
//     2: 12,
//     3: 12,
//     4: 12
// }

numbers[-1] = 0; // it creates new pair as -1: 0 in numbers array

console.log(numbers);