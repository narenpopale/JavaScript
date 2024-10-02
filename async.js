// ASYNC Program - It dosen't stop the code flow while delay in some instructions
console.log("1");
console.log("2");

setTimeout(() => {
    console.log("Hello");
}, 5000);

console.log("3");
console.log("4");

// Output
// 1
// 2
// 3
// 4
// Hello (after 5 sec)



// CALLBACKS - it is a function passed as an argument to another function
const sum = (a, b) => {
    console.log(a + b);
}

const calculator = (a, b, callbackFunc) => {
    callbackFunc(a, b);
}

calculator(2, 3, sum); // sum is callback function



// CALLBACK HELL - This is a Nested callbacks 
// This style of program is difficult to understand and manage
const getData = (dataID, getNextData) => {

    setTimeout(() => {
        console.log("Data : ", dataID);
        if(getNextData) {
            getNextData();
        }
    }, 2000);

}

// Below code is callback hell
console.log("getting data 1...");
getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});



// PROMISES - It is for eventual completion of task
// It is an object
// It is a soln for callback hell

// Promise states
// Pending - result is undefined
// Resolved - result is value - resolve(result)
// Rejected - result is an error - reject(error)

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am Promise");
        // resolve("success");
        // reject("network error");
    })
}

let promise = getPromise();

// When promise gets resolved, then executes
promise.then((res) => {
    console.log("Promise fulfilled", res);
})

// When promise gets rejected, catch executes
promise.catch((err) => {
    console.log("Promise rejected", err);
})



// PROMISE CHAIN
let getdata = (dataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataID);
            resolve("success");
        }, 2000);
    })
}


// Below code is promise chain
console.log("getting data1...");
let p1 = getdata(1);
p1.then((res) => {
    console.log("getting data2...");
    let p2 = getdata(2);
    p2.then((res) => {
        console.log("getting data3...");
        let p3 = getdata(3);
        p3.then((res) => {
            console.log(res);            
        })
    })
})


// Below code is better version of promise chain
console.log("getting data1...");
getdata(1).then((res) => {
    console.log("getting data2...");
    return getdata(2);
}).then((res) => {
    console.log("getting data3...");
    return getdata(3);
}).then((res) => {
    console.log(res);
})



// ASYNC - AWAIT
// Async function always returns a promise
// Await pauses the execution of its surrounding async function until the promise is settled
let getApiData = (dataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataID);
            resolve("success");
        }, 2000);
    })
}

let getAllData = async () => {
    console.log("getting data1...");
    await getApiData(1);
    console.log("getting data2...");
    await getApiData(2);
    console.log("getting data3...");
    await getApiData(3);
}

getAllData();



// IIFE - Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined

// 1st way
(function(){
    // code
    // code
    // code
})();

// 2nd way
(() => {
    // code
    // code
    // code
})();

// 3rd way
(async () => {
    // code
    // code
    // code
})();