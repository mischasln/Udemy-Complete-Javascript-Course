// LECTURE: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
let retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
let age = 23;

function foo() {
    console.log(age);
    let age = 65;
    console.log(age);
}
foo();
console.log(age);
*/




// LECTURE: Scoping

// First scoping example

/*
let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second() {
        let c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the difference between execution stack and scope chain

/*
let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second() {
        let c = 'Hey!';
        third()
    }
}

function third() {
    let d = 'John';
    console.log(a + b + c + d);
}
*/



// LECTURE: The this keyword

// console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}

let john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/