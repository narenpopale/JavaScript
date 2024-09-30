// PROTOTYPE: JS objects have a special property called prototype
const Employee = {
    calcTax: () => {
        console.log("Calculating Tax");
    }
}

const alex = {
    salary: 20000
}

// Setting Prototype for alex object 
alex.__proto__ = Employee; // Now alex object have all properties of Employee Object
alex.calcTax();


// CLASS:
class Car {

    // CONSTRUCTOR
    constructor() {
        console.log("Constructor Invoked..");
    }

    start = () => {
        console.log("Starting..");
    }

    stop = () => {
        console.log("Stop..");
    }

    setBrandName = (brand) => {
        this.brand = brand;
    }
}

// Object of Car class
let verna = new Car();
verna.start();
verna.stop();
verna.setBrandName("verna");
console.log(verna.brand);


// INHERITANCE:
class Person {

    constructor(name) {
        this.name = name;
    }

    Eat() {
        console.log("Eat");
    }
}

class Engineer extends Person {

    constructor(name) {
        super(name) // SUPER keyword is used to invoke parent class constructor
    }

    Work() {
        super.Eat(); // to invoke parent class eat method
        console.log("Working...");
    }
}

let engg = new Engineer("John Cena");
engg.Eat();
engg.Work();
console.log(engg.name);