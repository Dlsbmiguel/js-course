/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);


//USE CONST BY DEFAULT AND LET IF YOU ARE REALLY SURE THAT IT 
//WILL NEED TO CHANGE

//MATH OPERATORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageSarah * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Miguel';
const lastName = 'De Los Santos';
console.log(firstName + ' ' + lastName);

//ASSIGMENT OPERATORS
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--; // x = x - 1
console.log(x);

//COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageSarah, ageJonas, averageAge);


//////////////////////////////////
// CODING CHALLENGE #1
//Test Data 1
const weightMark1 = 78;
const heightMark1 = 1.69;
const weightJohn1 = 92;
const heightJohn1 = 1.95;

const bodyMassIndexF1 = weightMark1 / heightMark1 ** 2;
const bodyMassIndexF2 = weightJohn1 / (heightJohn1 * heightJohn1);
const markHigherBMI = bodyMassIndexF1 > bodyMassIndexF2;
console.log(bodyMassIndexF1, bodyMassIndexF2, markHigherBMI);
////////////////////////////////////
//Test Data 2
const weightMark2 = 95;
const heightMark2 = 1.88;
const weightJohn2 = 85;
const heightJohn2 = 1.76;

const formulaBMI = weightMark2 / heightMark2 ** 2;
const formulaBMIe = weightJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = formulaBMI > formulaBMIe;
console.log(formulaBMI, formulaBMIe, markHigherBMI2);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old '
+ job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if(age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//////////////////////////////////
// CODING CHALLENGE #1
//Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const masJohn = 92;
// const heightJohn = 1.95;

//Test Data 2
const massMark = 95;
const heightMark = 1.88;
const masJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = masJohn / (heightJohn * heightJohn);
if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}


// tpye conversion
const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18);

console.log(Number ('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / 2);
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log('Height is UNDEFINED');
}


const age = 18;
if  (age === 18) console.log(`You just became an adult :D (strict)`);

if  (age == 18) console.log(`You just became an adult :D (loose)`);

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number.');
} else if (favorite === 9) {
    console.log('9 is also a cool number.');} 
else {
    console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

////////////////////////////////////////////
/// CODING CHALLENGE #3
// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 +110) / 3;

const avgScoreDolphins = (97 + 112 + 101) / 3;
const avgScoreKoalas = (109 + 95 + 123) / 3;
console.log(avgScoreDolphins, avgScoreKoalas);
// const avgScoreDolphins = (97 + 112 + 89) / 3;
// const avgScoreKoalas = (88 + 91 +110) / 3;



if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`Dolphins are the winners`);
} else if ((avgScoreDolphins < avgScoreKoalas) && avgScoreKoalas >= 100) {
    console.log(`Koalas are the winers`);
} else if ((avgScoreDolphins === avgScoreKoalas) && avgScoreKoalas >= 100 &&
            avgScoreKoalas >= 100){
    console.log(`The match is a draft`);
} else {
    console.log(`No team wins the trophy`);
}


const day = 'wednesday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepaer theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    case 'friday':
         console.log('Record videos');
         break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepaer theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


const age = 23;
// age >= 18 ? console.log('I like to drink wine') : 
// console.log('I like to drink water');

const drink = age >= 18? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'WINE';
} else {
    drink2 = 'WATER';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18? 'wine' : 'water'}`);


//////////////////////////////
/// CODING CHALLENGE #4
// const bill = 275;
const bill = 275;
// const bill = 430;


const tip = 50 <= bill && bill <= 300 ? bill * 0.15: bill * 0.20;
const recipe = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${recipe}.`);
*/
