"use strict";
function add(first, second) {
    return first + second;
}
function print(num) {
    console.log(num);
}
// Set the combinedValues var to be a method that requires two number parameters and returns a number
var combinedValues;
combinedValues = add;
print(add(3, 5));
print(combinedValues(7, 10));
