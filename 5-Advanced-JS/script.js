// function constructor

/*
let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

let mischa = new Person('Mischa', 1985, 'developer');
let jane = new Person('Jane', 1967, 'designer');
let mark = new Person('Mark', 1947, 'retired');

mischa.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(mischa.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// object.create

let personProto = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

let mischa = Object.create(personProto);
mischa.name = 'Mischa';
mischa.yearOfBirth = 1985;
mischa.job = 'Developer';

let jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1990},
    job: {value: 'Teacher'}
});