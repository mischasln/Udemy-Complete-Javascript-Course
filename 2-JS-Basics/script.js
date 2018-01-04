//  LECTURE: Variables
/* let name = 'John';
console.log(name);

let lastName = 'Smith';
console.log(lastName);

let age = 26;
console.log(age);

let fullAge = true;
console.log(fullAge); */


//  LECTURE: Variables 2
/* let name = 'John';
let age = 32;

// console.log(name + age);
// console.log(age + age);

let job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// let lastName = prompt('What is the last name?');
// console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.'); */


//  LECTURE: Operations
/* let now = 2018;
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
console.log(ageMark); */


// LECTURE: If/else statements
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

if (isMarried){
    console.log(('YES!'));
}

if (23 === '23'){
    console.log(('Something to print.'));
}
*/


//  LECTURE: Boolean logic and switch
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


// CODING CHALLENGE 1

/* John and a friend invented a simple game where the player with the highest value
of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create letiables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the
string that you output to the console. Don't forget that there can be a draw
(both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the
&& operator to take the decision. If you can't solve this one, just watch the
solution, it's no problem :) */


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


//  LECTURE: Functions
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


//  LECTURE: Statements and expressions
/*
function someFun(par) {
    // code
}

let someFun = function(par) {
    // code
}

// statements (perform only actions without an output)
if (x === 5) {
    // do something
}

// expressions (perform actions and produce an output)
3 + 4;
let x = 3;
*/


//  LECTURE: Arrays
/*
const names = ['John', 'Jane', 'Mark'];
const years = [1990, 1969, 1948];

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

const john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
  console.log('John is NOT a teacher.');
}
*/


// LECTURE: Objects
/*
let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

let xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

let jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


// LECTURE: Objects and methods

// v1.0
/*
let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

let age = john.calculateAge();
john.age = age;

console.log(john);



//v2.0
let john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


let mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/


// LECTURE: Loops and iterations

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
*/


// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes
the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age
(>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array,
like y[i] = ... You can also use the specific array methods.
*/

function printFullAge(years){
    let ages = [];
    let fullAges = [];

    // for loop
    for (i = 0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
        console.log(ages[i]);
    }

    /*
    // while loop
    let i = 0;
    while (i < years.length){
        ages[i] = 2018 - years[i];
        console.log(ages[i]);
        i++;
    }
    */

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('With and age of ' + ages[i] + ' person ' + (i + 1) + ' is of full age.');
            fullAges.push(true);
        } else {
            console.log('With and age of ' + ages[i] + ' person ' + (i + 1) + ' is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
}

let years = [1980, 1985, 1999, 1956, 2000, 2005, 2010];
let full_1 = printFullAge(years);
let full_2 = printFullAge([1980, 1985, 1999]);

