// Lecture: Variables
/*
const name = 'John';
console.log(name);

const lastName = 'Smith';
console.log(lastName);

const age = 26;
console.log(age);

const fullAge = true;
console.log(fullAge);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: Variables 2
let name = 'John';
let age = 32;

//console.log(name + age);
//console.log(age + age);

let job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//let lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: Operations
/*
let now = 2018;
let birthday = now - 26;

birthday = now - 26 * 2;
// 2018 - 52
// 1966

console.log(birthday);

let ageJohn = 30;
let ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++;
// ageJohn = 27

ageMark *= 2;
// ageMark = 52

console.log(ageJohn);
console.log(ageMark);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: If/else statements
/*
let name = 'John';
let age = 26;
let isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = true;

if (isMarried){
    console.log('YES!');
} else {
    console.log('NO!');
}
*/

/*
if (isMarried){
    console.log(('YES!'));
}

if (23 === '23'){
    console.log(('Something to print.'));
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: Boolean logic and switch
/*
let age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

let job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create letiables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

// SOLUTION:
/*
let heightJohn = 180;
let heightMike = 165;
let ageJohn = 26;
let ageMike = 29;

let scoreJohn = heightJohn + 5 * ageJohn;
let scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}

let heightMary = 158;
let ageMary = 31;
let scoreMary = heightMary + 5 * ageMary;


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: Functions

/*
function calculateAge(yearOfBirth){
    let age = 2018 - yearOfBirth;
    return age;
}

let birthdayMike = calculateAge(1999);
let birthdayJohn = calculateAge(1998);
let birthdaySophia = calculateAge(2000);
let birthdayJimmy = calculateAge(1900);

function yearsUntilRetirement(name, year){
    let age = calculateAge(year);
    let retirement = 72 - age;

    if (retirement >= 0){
        console.log(name + ' is ' + age + ' old and retires in ' + retirement + ' years.')
    } else {
        console.log(name + ' is ' + age + ' old and is already retired.')
    }
}

yearsUntilRetirement('Mike', 1999);
yearsUntilRetirement('John', 1998);
yearsUntilRetirement('Sophia', 2000);
yearsUntilRetirement('Jimmy', 1900);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture: Statements and expressions
/*
function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

// statements (perform only actions without an output)
if (x === 5) {
    //do soemthing
}

// expressions (perform actions and produce an output)
3 + 4;
var x = 3;
*/