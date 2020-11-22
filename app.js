"use strict";
// Unknown = slightly stricter than "any"
var userInput;
var userName;
userInput = 5;
// Throws an error because possible mismatch
// userName = userId;
if (typeof userInput === 'string') {
    // Is OK because we're explicitly stating
    userName = userInput;
}
