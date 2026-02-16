
// ## Question 2 

// After identifying the variables from the story, specify their primitive data types in JavaScript. Also, provide these variables with some initial values.L


let partyLocation = "GARDEN"; // String
let shiftValue = 3; // Number
let orginalMessage = ""; // String
let encryptedMessage = ""; // String
let isPartySafe = false; // Boolean


// ## Question 3 

// From the variables you've identified, determine which ones should be declared using `const` and which ones should use `let`.

// ### Answer 


let partyLocation = "GARDEN"; // As the message might change.
const shiftValue = 3; // Since the shift value remains constant throughout.
let originalMessage = ""; // This will change when we decode the encrypted message to reveal the party location.
let encryptedMessage = ""; // This will change when we encode the message with the original party location.
let isPartySafe = false; // Hopefully, this doesn't change.



// ## Question 4 
// Given the variable `shiftValue`, write a piece of code to check if its value is an integer.

// ### Answer 

const shiftValue = 3;
Number.isInteger(shiftValue);
