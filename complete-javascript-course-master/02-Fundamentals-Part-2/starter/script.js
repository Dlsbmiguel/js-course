"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive: :D');

//const interface = 'Audio';
//const private = 534;


function logger() {
    console.log('My name is Jonas');
}

// calling / runing / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)


// FUNCTION DECLARATION (CAN BE CALLED BEFORE THEY'RE DEFINED
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1998);

// FUNCTION EXPRESSION (EXPRESSIONS PRODUCE VALUES)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1998);
console.log(age1, age2);


//arrow function
const calcAge3 = birthYear => 2037 -birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Miguel'));
console.log(yearsUntilRetirement(1987, 'Juan'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with pieces of ${applePieces} apple and pieces of ${orangePieces} orange`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    
    //return ;
}

console.log(yearsUntilRetirement(1998, 'Miguel'));
console.log(yearsUntilRetirement(1970, 'Juan'));


///////////////////////////////////////
//CODING CHALLENGE #1
//TEST DATA 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return console.log(`Dolpins win (${avgDolphins} vs ${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgKoalas){
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        return console.log(`No winner...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);


//TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Miguel';
const miguel = [firstName, 'De Los Santos', 2037 - 1998, 'student', [friends]];
console.log(miguel);

// EXCERCISE
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2])
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];

// ADD ELEMENTS
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); //LAST
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //FIRST
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
}


// CODING CHALLENGE#2
const bills = [125, 555, 44];

const calcTip = function(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(bills, tips, total);


const miguelArray = [
    'Miguel',
    'De Los Santos',
    2037 - 1998,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const miguel = {
    firstName: 'Miguel',
    lastName: 'De Los Santos',
    age: 2037 - 1998,
    job: 'Desarrollador',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(miguel);

console.log(miguel.lastName);
console.log(miguel['lastName']);

const nameKey = 'Name'; 
console.log(miguel['first' + nameKey]);
console.log(miguel['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Miguel? Choose between firstName, lastName, age, job, and friends');


if(miguel[interestedIn]) {
    console.log(miguel[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

miguel.location = 'España';
miguel['twitter'] = '@dlsmiguel';
console.log(miguel);

//CHALLEGE
// "Jonas has 3 friends, and his best friend is called Michael"
const challenge = `${miguel['firstName']}, has ${miguel.friends.length} friends, and his best friend is called ${miguel.friends[0]}`;
console.log(challenge);


const miguel = {
    firstName: 'Miguel',
    lastName: 'De Los Santos',
    birthYear: 1998,
    job: 'Desarrollador',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return  2037 - birthYear;
    // }

    // calcAge: function() {
    //     //console.log(this);
    //     return  2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(miguel.calcAge());
console.log(miguel['calcAge']());
console.log(miguel.age);

console.log(miguel.getSummary());



//CODING CHALLENGE 3
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,


    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
mark.calcBMI();
console.log(mark.bmi);


const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI ${mark.bmi} is higher than ${john.firstName}'s ${john.bmi}`);
} else {
    console.log(`${john.firstName}'s BMI ${john.bmi} is higher than ${mark.firstName}'s ${mark.bmi}`)
};


// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

const miguelArray = [
  "Miguel",
  "De Los Santos",
  2037 - 1998,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < miguelArray.length; i++) {
  // Reading from miguelArray
  console.log(miguelArray[i], typeof miguelArray[i]);

  // Filling types array
  // types[i] = typeof miguelArray[i];
  types.push(typeof miguelArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ----");
for (let i = 0; i < miguelArray.length; i++) {
  if (typeof miguelArray[i] !== "string") continue;
  console.log(miguelArray[i], typeof miguelArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < miguelArray.length; i++) {
  if (typeof miguelArray[i] === "number") break;
  console.log(miguelArray[i], typeof miguelArray[i]);
}

const miguelArray = [
  "Miguel",
  "De Los Santos",
  2037 - 1998,
  "teacher",
  ["Michael", "Peter", "Steven"]
];

// 4, 3, ..., 0
for(let i = miguelArray.length - 1; i >= 0; i--) {
    console.log(i, miguelArray[i]);
};

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------------- Starting excercise ${exercise}`);
    
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`);
    };
};


for (let rep = 1; rep <= 10; rep++) {
  //console.log(`Lifting weight repetition ${rep}🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  //console.log(`Lifting weight repetition ${rep}🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end...');
}
*/
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
