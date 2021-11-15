/*
// VALUES AND VARIABLES
// let country = 'República Dominicana';
// let continent = 'América';
// let population = 10850000;

// console.log(country);
// console.log(continent);
// console.log(population);

//DATA TYPES
// let isIsland = true;
// let language;

// console.log(isIsland);
// console.log(language);

//LET, CONST AND VAR
const isIsland = true;
const language = 'spanish';
const country = 'República Dominicana';
const continent = 'América';
let population = 10850000;

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

//BASIC OPERATORS
let countrySplit = population / 2;
population++;
console.log(countrySplit);
console.log(population);

const findlandPopulation = 6000000;
let populationComparison = population > findlandPopulation;
console.log(populationComparison); 

const averagePopulation = 33000000;
populationComparison = averagePopulation > populationComparison;
console.log(populationComparison); 

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);

// STRINGS AND TEMPLATE LITERATES
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);


//TAKING DECISIONS: if/else STATEMENTS
if (population > averagePopulation) {
    console.log(`Dominican Republic's population is above average`);
} else {
    console.log(`Dominican Republic's population is ${averagePopulation - population} millions below average`);
}

//TYPE CONVERSION AND COCERCION
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// EQUALITY OPERATORS: == VS ===
const numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours) === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


//LOGICAL OPERATORS
const isIsland = false;
const language = 'english';
const country = 'República Dominicana';
const continent = 'América';
let population = 10850000;

if (isIsland !== true && language === 'english' && population < 50000000) {
    console.log('You should live in Dominican Republic');
} else {
    console.log('Dominican Republic does not meet your criteria :(.');
}


let language = 'russian';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number o native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken languge');
        break;
    default:
        console.log('Great language too :D');

}


const country = 'República Dominicana';
let population = 108500000;

const condition = population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s'population is below average.`);
*/

