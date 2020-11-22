// Unknown = slightly stricter than "any"
let userInput: unknown;
let userName: string;

userInput = 5;

// Throws an error because possible mismatch
// userName = userId;

if (typeof userInput === 'string') {
    // Is OK because we're explicitly stating
    userName = userInput;
}