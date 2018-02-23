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

/*
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
*/


// primitives vs objects

// primitives
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

let obj1 = {
    name: 'Mischa',
    age: 32
};

// objects
let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
let age = 27;
let obj = {
    name: 'Sophia',
    city: 'Stuttgart'
};

function change(a, b) {
    a = 30;
    b.city = 'New York';
}

change(age, obj);

console.log(age);
console.log(obj.city);
