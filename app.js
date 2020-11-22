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
// Use "never" of it will never return anything, even undefined. ie, if it stops here and doesn't continue
function throwError(msg, code) {
    throw ({ message: msg, errorCode: code });
}
throwError('asd', 300);
