"use strict";
const result = sum(1, 2);
function sum(num1, num2) {
    return num1 + num2;
}
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const legal = takeFn(isLegal);
function takeFn(isLegal) {
    setTimeout(() => {
        console.log(isLegal(18));
    }, 1000);
    console.log("timer running");
    return true;
}
