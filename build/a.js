"use strict";
greet("Sanchit");
let result = sum(10, 11);
console.log(sum(11, 11));
const legal = isLegal(19);
console.log(isLegal(19));
callFuc(random);
//How to pass type of a parameter
function greet(name) {
    console.log(`Hello ${name}`);
}
//set parameter and return type
function sum(num1, num2) {
    return num1 + num2;
}
//set parameter and return type
function isLegal(age) {
    return age >= 18;
}
//Passing a function to a function
function callFuc(internalFunction) {
    setTimeout(internalFunction);
}
function random2(num) {
    return num > 0 ? "Fuck you" : "nahh let it be ";
}
function random() {
    const value = Math.random() < 0.5;
    console.log(value ? "Fuck you" : "nahh let it be ");
}
