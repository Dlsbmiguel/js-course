/*
//FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }
// console.log(describeCountry('Ecuador', 2300000, 'Quito'));
// console.log(describeCountry('Peru', 21000009, 'Lima'));
// console.log(describeCountry('Italia', 1230000, 'Roma'));

//FUNCTION DECLARATIONS VS EXPRESSIONS
function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

let populationEcuador = percentageOfWorld1(2300000);
let populationPeru = percentageOfWorld1(21000009);
let populationItalia = percentageOfWorld1(1230000);
console.log(populationEcuador, populationPeru, populationItalia);

const percentageOfWorld2 = function (population) {
  return (population / 7900000000) * 100;
};

populationEcuador = percentageOfWorld2(2300000);
populationPeru = percentageOfWorld2(21000009);
populationItalia = percentageOfWorld2(1230000);
console.log(populationEcuador, populationPeru, populationItalia);

// ARROW FUNCTIONS
const percentageOfWorld3 = (population) => (population / 7900000000) * 100;
populationEcuador = percentageOfWorld3(2300000);
populationPeru = percentageOfWorld3(21000009);
populationItalia = percentageOfWorld3(1230000);
console.log(populationEcuador, populationPeru, populationItalia);

//FUNCTIONS CALLING OTHER FUNCTIONS
const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};
populationEcuador = describePopulation("Ecuador", 2300000);
populationPeru = describePopulation("Peru", 21000009);
populationItalia = describePopulation("Italia", 1230000);
console.log(populationEcuador, populationPeru, populationItalia);

//INTRODUCTION TO ARRAYS
const populations = [2300000, 21000009, 1230000, 7900000000];
if (populations.length === 4) {
  console.log("Populations has 4 elements");
} else {
  console.log("Populations does not have 4 elements");
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//BASIC ARRAY OPERATIONS (METHODS)
const neighbours = ["Italia", "Francia", "Alemania"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
} else {
  console.log("whatever");
}

neighbours[0] = "Imperio Italiano";
console.log(neighbours);

// //INTRODUCTION TO OBJECTS
// const myCountry = {
//     country: 'Italia',
//     capital: 'Roma',
//     language: 'Italian',
//     population: 59257566,
//     neighbours: ['Francia', 'Austria', 'Suiza']
// };

// //DOT VS BRACKET NOTATION
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population = 61257566;
// console.log(myCountry.population);
// myCountry['population'] = 57257566;
// console.log(myCountry.population);


//OBJECT METHODS
const myCountry = {
  country: "Italia",
  capital: "Roma",
  language: "Italian",
  population: 59257566,
  neighbours: ["Francia", "Austria", "Suiza"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland =
      this.neighbours === [] ? (this.isIsland = true) : (this.isIsland = false);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


//ITERATION: THE FOR LOOP
for (i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}


//LOOPING ARRAYS, BREAKING AND CONTINUING
const populations = [2300000, 21000009, 1230000];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);


const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
*/

// THE WHILE LOOP
const populations = [2300000, 21000009, 1230000];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}

let i = 0;
while (i < populations.length) {
  percentages2.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages2);
