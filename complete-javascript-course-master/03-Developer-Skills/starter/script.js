// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log();


//PROBLEM 1:
// CALCULATE AMPLITUDE BETWEEN TEMPERATURES AND IGNORE THE ERRORS.
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

//2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

const caclTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = caclTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problmes
// - Merge two arrays?

const caclTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = caclTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C FIX
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //console.log(measurement.value);

  const kelvin = measurement.value + 273;

  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());

// Using a debugger
const caclTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = caclTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) Identify

console.log(amplitudeBug);
*/

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
}

printForecast(temp2);
