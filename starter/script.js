'use strict';

// console.log(this);

/******************
const calcAge = function (birthYear) { 
    console.log(2037 - birthYear);
    // console.log(this);
}

calcAge(1991);

const calcAgeArrow = birthYear => { 
    console.log(2037 - birthYear);
    // console.log(this);
}

calcAgeArrow(1980)


// this keyword in an object points to the object within which the method is called
const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(2037 - birthYear);
        console.log(this);
     }
}

jonas.calcAge();

// Note: it is not where the method has been declared but where it has been called.
const matilda = {
    year: 2017,
};

// This is called method borrowing copying a method from one object to another
// In this case copied calcAge from jonas to matilda to avoid duplicating them.
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// This keyword is dependent on the object that calls it
// Here the result will be (2037 - 2017) -> 20
// The this keyword refers to matilda and not jonas
matilda.calcAge()

// Copy the calcAge function to f
const f = jonas.calcAge;
f();


************/


// Do not use arrow functions as methods in an object
// Arrow functions do not get their own this keyword. They take the window as their this.

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
    //   console.log(this);
      console.log(2037 - this.year);

     // Inside a regular function call the this keyword MUST be undefined.
     // This was used before ES6 (Solution 1)
    //   const self = this;
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //     isMillenial();

    //    Solution 2    
    const isMillenial =  () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
    };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey${this.firstName}`);
    },
};

jonas.greet();
jonas.calcAge();


// arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12)

// var addArrow = (a, b) => { 
//     console.log(arguments);
//     return a + b;
// }
// addArrow(2, 5, 8);






// Primitive types - get separate memory locations
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis'

console.log(lastName, oldLastName); // 'Davis' , 'Williams'


//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};


const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'

//Both of them have the lastname 'Davis'. Only the name in the stack changes but both point
//to (reference) the same object in the heap 
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);




// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: [' Alice ', 'Bob'],
  
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis'


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);












