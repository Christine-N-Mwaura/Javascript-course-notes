// Remember, we're gonna use strict mode in all scripts now!
'use strict';



///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How do you compute max and min temperatures?
// - What's a sensor error? And what to do?


// 2) Breaking up into sub-problems
//  - How to ignore errors?
//  - Find max value in temp array
//  - Find min value in temp Array
//  - Subtract min from max (amplitude) and return it.



const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0]


    for (let i = 0; i < temps.length; i++) {
        const currTemp = temps[i];

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(max,min);
};
calcTempAmplitude([3, 7, 4])
// pushing to the right branch
