// BUDGET CONTROLLER

let budgetController = (function () {

    let x = 23;

    let add = function (a) {
        return x + a;
    };

    return {
        publicTest: function (b) {
            return add(b);
        }
    }

})();


// UI CONTROLLER

let UIController = (function () {

    // some code

})();


// GLOBAL APP CONTROLLER

let controller = (function (budgetCtrl, UICtrl) {

    let z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    }

})(budgetController, UIController);
