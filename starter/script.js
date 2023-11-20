// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How do you compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
//  - How to ignore errors?
//  - Find max value in temp array
//  - Find min value in temp Array
//  - Subtract min from max (amplitude) and return it.

/******* 
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0]


    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude([3, 7, 4])
console.log(amplitude);







// PROBLEM 2:
// Function should now receive 2 arrays of temps

//  1) Understanding the problem
//  - With 2 arrays, should we implement functionality twice? No just merge two arrays

// 2) Breaking up into sub-problems
// merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0]

    // const temps = t1.concat(t2);
    console.log(temps);

    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];
        if (typeof currTemp !== 'number') continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3,5,1], [9,0,5])
console.log(amplitudeNew);

*********/

/****** 
// DEBUGGING

const measureKelvin = () => { 
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        value: Number(prompt('Degrees celsius:')),
    }

    // B) FIND
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}


// A) IDENTIFY 
console.log(measureKelvin());
******/

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  // const temps = t1.concat(t2);
  console.log(temps);

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    //   debugger;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// pushing to the right branch




///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


//  1) Understanding the problem
// a function that takes in an array of values
// loops through the values printing it in the console.
// concatinating a string to the already existing string. How is this done? using '+'
// should it check if the values are not numbers. What happens if some values are not numbers?

const printForecast = (tempArray) => { 
    let printText = '';
    for (let i = 0; i < tempArray.length; i++) {
        printText += `...${tempArray[i]}ºC in ${i+1} days`;
        console.log(printText);
        noOfDays++;
    }

} 

console.log(printForecast([17, 21, 23]));

