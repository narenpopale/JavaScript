// Sync - It means all tasks performs in order one by one, after completing first task then next task will get start

// Async - It means all tasks starts at same time and gets complete by thier respective ending time

// Async code - 
// setInterval
// setTimeout
// promises
// fetch
// axios
// XMLHttpRequest

// other than above are all sync code


// JS is not asynchronous, why?
// --> async means start all task together, but JS is single threaded hence it performs one task at a time


// Event Loop 
// there is 2 execution stacks in JS 
// main stack and side stack
// main stack deals with sync code and side stack deals with async code
// when all tasks performed in the main stack and it gets empty then it goes to the side stack and asks is your output is ready? if ready then it will bring this task to the main stack and then completes it, this process is nothing but a event loop

console.log("h1");
console.log("h2");
setTimeout(function () {
    console.log("h3");
}, 0);
console.log("h4");

// Output - 
// h1
// h2
// h4
// h3


// Single threading and multi threading
// Single - performs one task at a time
// Multi - performs multiple tasks at a time


// callbacks => functions
// it runs when async code gets completed

// Async code - 
// setInterval
// setTimeout
// promises
// fetch
// axios
// XMLHttpRequest

// callbacks
// then catch
// async await


// Promises
// - it has 3 states resolve, reject and pending. when code written in the promise gets resolve then you can use (.then) and when code gets reject then you can use (.catch)

var promise = new Promise(function (res, rej) {
    var n = Math.floor(Math.random() * 10);

    if (n < 5) {
        return res();
    }
    else {
        return rej();
    }
});


promise
    // when promise state is resolve this function will execute
    .then(function () {
        console.log("resolved!");
    })
    // when promise state is reject this function will execute
    .catch(function () {
        console.log("rejected!");
    })


// Promises chaining
// Ex - write below lines asynchronously but in order
// This
// is
// my
// car

var p1 = new Promise(function (res, rej) {
    return res("This");
})


var p2 = p1.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("is");
    })
})


var p3 = p2.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("my");
    })
})


var p4 = p3.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("car");
    })
})


p4.then(function (data) {
    console.log(data);
})


// async await
// instead of promises you can use this
// apply async to the nearest async code function
// apply await to the async code 

async function abcd() {
    var raw = await fetch('https://api.publicapis.org/entries');
    var data = await raw.json();
    console.log(data);
}

abcd();