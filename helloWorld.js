"use strict";
exports.__esModule = true;
var course = "Typescript";
console.log(course);
var loc = "Bengaluru";
var noOfemp = 50000;
//block scope
var compName = "Accenture";
if (true) {
    var loc = "Pune";
    var noOfemp_1 = 70000;
    var compName_1 = "ATCI";
    console.log("Loc=", loc, ", Emp count= ", noOfemp_1, ", compName = ", compName_1);
}
//Loc =pune     count=70000   compName = error  //ATCI
var loc = "Hyd";
console.log("Loc=", loc, ", Emp count= ", noOfemp, ", compName = ", compName);
//Loc = Bengaluru    count = 50000   compName=Accenture
var listofIceCreamFlav = ["vanilla, chocoloate, mango"];
function displayFlav(iceFlav) {
    for (var _i = 0, iceFlav_1 = iceFlav; _i < iceFlav_1.length; _i++) {
        var flav = iceFlav_1[_i];
        console.log(flav);
    }
}
displayFlav(listofIceCreamFlav);
// Function & Arrow Functions
function square(a) {
    return a * a;
}
console.log(square(4));
var a = function (a) {
    return a * a;
};
console.log(a(2));
var squareTwo = function (a) { return a * a; };
console.log(squareTwo(6));
var squareThree = function () { return console.log("echo"); };
squareThree();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.printNameUsingArrowFunction = function () {
        var _this = this;
        setTimeout(function () {
            console.log("==Arrow== My name is ", _this.name);
        }, 100); //sudha
    };
    Person.prototype.printNameUsingRegularFunction = function () {
        setTimeout(function () {
            console.log("==Regular== My name is ", p.name);
        }, 200); //sudha
    };
    return Person;
}());
var p = new Person("Nidhish");
p.printNameUsingArrowFunction();
p.printNameUsingRegularFunction();
//Optional Parameters
function joinName(fName, lName) {
    if (lName != undefined) {
        console.log(fName + lName);
    }
    else {
        console.log(fName);
    }
}
joinName("++JOIN NAME++ Nidhish", "");
//REST Parameters
console.log("------REST PARAMETERS------");
function fullName(firstName) {
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + otherNames.join(" "));
}
fullName("Nidhish", "D", "NAYAK");
function add(x, y, z) {
    if (z != undefined) {
        console.log(x + y + z);
    }
    else {
        console.log(x + y);
    }
}
add(1, 2);
add(1, 2, 3);
add("Nidhish", "Nayak");
