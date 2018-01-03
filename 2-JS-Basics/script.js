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



// Lecture: if/else statements

let name = 'John';
let age = 26;
let isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = true;

/*
if (isMarried){
    console.log('YES!');
} else {
    console.log('NO!');
}
*/

if (isMarried){
    console.log(('YES!'));
}

if (23 === '23'){
    console.log(('Something to print.'));
}

