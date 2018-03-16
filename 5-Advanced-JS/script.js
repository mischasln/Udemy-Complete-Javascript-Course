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
/*
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
*/


// passing functions as arguments
/*
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isFullAge);
let rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/


// functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/


// immediately invoked function expressions (IIFE)
/*
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}

game();


(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/


// closures
/*
function retirement(retirementAge) {
    let a = ' years left until retirement.';
    return function (yearOfBirth) {
        let age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);


function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/


// bind, call and apply

let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

let emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

let johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');

        } else {
            console.log('Wrong answer. Try again :)')
        }
    }

    let q1 = new Question('Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0);

    let q2 = new Question('What is the name of this course\'s teacher?',
        ['John', 'Mischa', 'Jonas'],
        2);

    let q3 = new Question('What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2);

    let questions = [q1, q2, q3];

    let n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    let answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();