// Strict-mode is a special mode in js that helps us write secure JavaScript code.
// has to be the very start of the js code
// Helps us as developers avoid bugs/ unnecessary errors in our code.
// Forbids us from doing certain things and also creates visible errors in 
// certain situations in which without strict mode, js would simply fail silently.
// Introduces(reserves) a short list of variable names that might be added to the language a bit later.

'use strict'; 


// const interface = 'Audio';
// const private = 234;


// FUNCTIONS
/********* 
function logger() {
    console.log('My name is chris');
}

// Running the function is also known as invoking or calling the function

logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// Arguments are what is inside the brackets while invoking the function 
// to use the value that was returned, we have to store it in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //console.log() is a built in function
 
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

**********/

/**TYPES OF FUNCTIONS */
// A function is a value and therefore can be stored in a variable

/*** **********
//function declaration 
function calcAge1(birthYear) {
    return  2037 - birthYear;
    
}

const age1 = calcAge1(1991)
// console.log(age1);


//Function expression ()
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991)
console.log(age1, age2);


// Arrow functions(it is a form of a function expression)
// you can never have the this keyword with arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear,firstname) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1980,'Bob'));


****************************/
const cutPieces = fruit => fruit * 4;


function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)

    console.log(apples, oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2,3));
 
/*CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



👋 OPTIONAL: You can watch my solution in video format in the next lecture

***/
/**** 
//Test data 1
const calcAverage = (a,b,c) => (a + b + c) / 3;

let scoreDolphins = (44,23,71);
let scoreKoalas = (65,54,49);

const checkWinner = (avgDolphins,avgKoalas) =>{
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//Test data 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
checkWinner(scoreDolphins, scoreKoalas);

************/


// Two most important data structures are arrays and objects.

// ARRAYS
// The literal syntax
/********** 
const friends = ['Michael','Stephen', 'Peter'];
console.log(friends);

// Using the Array function
const y = new Array(1991, 1994, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// mutate an array
friends[2] = 'Jay';
console.log(friends);

// Only primitive values are immutable when declared as const. But you cannot replace the entire array.
// You can store all kinds of variables

const firstName = 'Jonas';
const jonas = [firstName, 'Susan', 2037 - 1991, 'teacher', friends]

console.log(jonas); 

// Exercise
const calcAge = (birthYear) => 2037-birthYear;

const years = [1990, 1967,2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1, age2, age3);


const ages = [age1,age2,age3]
console.log(ages);
********/

/**** 
// ARRAY METHODS 
// Push method adds an element to the end of an array
const friends = ['Michael','Stephen', 'Peter'];

// friends.push('Winnie','James');
console.log(friends);

// Push returns the length of the new array
const newLength = friends.push('Winnie','James');
console.log(newLength);

// Unshift adds elements at the beginning of an array
friends.unshift('John')
console.log(friends);

// Methods to Remove elements from an array
// Pop- removes the last element in an array
// This method returns the popped element
friends.pop()
const popped = friends.pop()
console.log(popped);
console.log(friends);

// To remove the first element in an array use shift
// Returns the element that has been removed

friends.shift();
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

// To check if the element is in the array, use includes
// Returns either true or false. Uses strict equality(does not do type coersion)
console.log(friends.includes('Stephen'));
console.log(friends.includes('Bob'));

// We can use includes method to write conditional statements
if (friends.includes('Stephen')) {
    console.log('You have a friend called Stephen');
}



/*********** 
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*****/

/* Write your code below. Good luck! 🙂 */

/**** 
const calcTip = (bill) => {
    return bill>= 50 && bill <= 300 ? 0.15 * bill:0.2 * bill
}

console.log(calcTip(100));

//Prefer array names as plural because they hold several values
const bills = [125,555,144]

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2] ]
*/






// OBJECTS
// Here we define key value pairs where we give each value a name
// Object literal syntax.
// Objects are used to group variables that belong together. The order of retrieval for values in an object does not matter.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Jones',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter', 'Steven']
};

// How to retrieve data from objects and how to change data in objects using dot and bracket notation.
// 1. Dot notation
console.log(jonas.lastName);

// 2. Bracket notation. Use it when you have computations before of the data in the object you want to display.
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')

// When you try to access a property on an object that does not exists. undefined is returned.
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);  
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Kenya';
jonas['twitter'] = '@jonesjonas';
console.log(jonas);


// Challange 
// "Jonas has 3 friends, and his best friend is called Michael"

// const jonasFriends = jonas['friends'].length;
console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);