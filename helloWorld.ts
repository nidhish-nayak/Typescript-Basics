export {};
var course: string = "Typescript";
console.log(course);

var loc = "Bengaluru";
let noOfemp: number = 50000;
//block scope
const compName = "Accenture";
if (true) {
    var loc = "Pune";
    let noOfemp = 70000;
    const compName = "ATCI";
    console.log(
        "Loc=",
        loc,
        ", Emp count= ",
        noOfemp,
        ", compName = ",
        compName
    );
}
//Loc =pune     count=70000   compName = error  //ATCI
var loc = "Hyd";
console.log("Loc=", loc, ", Emp count= ", noOfemp, ", compName = ", compName);
//Loc = Bengaluru    count = 50000   compName=Accenture

let listofIceCreamFlav: string[] = ["vanilla, chocoloate, mango"];
function displayFlav(iceFlav: string[]): void {
    for (let flav of iceFlav) {
        console.log(flav);
    }
}

displayFlav(listofIceCreamFlav);

// Function & Arrow Functions

function square(a: number): number {
    return a * a;
}
console.log(square(4));

var a = function (a: number): number {
    return a * a;
};
console.log(a(2));

var squareTwo = (a: number): number => a * a;
console.log(squareTwo(6));

var squareThree = () => console.log("echo");
squareThree();

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    printNameUsingArrowFunction() {
        setTimeout(() => {
            console.log("==Arrow== My name is ", this.name);
        }, 100); //sudha
    }
    printNameUsingRegularFunction() {
        setTimeout(function () {
            console.log("==Regular== My name is ", p.name);
        }, 200); //sudha
    }
}
let p: Person = new Person("Nidhish");
p.printNameUsingArrowFunction();
p.printNameUsingRegularFunction();

//Optional Parameters
function joinName(fName: string, lName?: string) {
    if (lName != undefined) {
        console.log(fName + lName);
    } else {
        console.log(fName);
    }
}
joinName("++JOIN NAME++ Nidhish", "");

//REST Parameters
console.log("------REST PARAMETERS------");
function fullName(firstName: string, ...otherNames: string[]) {
    console.log(firstName + " " + otherNames.join(" "));
}
fullName("Nidhish", "D", "NAYAK");
// you can use any[] datatype for REST PARAMETERS also.

//FUNCTION OVERLOADING:
function add(x: number, y: number): void;
function add(x: number, y: number, z: number): void;
function add(x: string, y: string): void;
function add(x: any, y: any, z?: number) {
    if (z != undefined) {
        console.log(x + y + z);
    } else {
        console.log(x + y);
    }
}

add(1, 2);
add(1, 2, 3);
add("Nidhish", "Nayak");
