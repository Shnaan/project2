
const friend = "BRUTUS" // define friend name as constant string
const shiftValue = 3; // define shift value as constant number
const alphabet = "abcdefghijklmnopqrstuvwxyz";
firstLetter = friend[0]; // extract first letter of the string using index 0 following  javascript zero-indexing 
const index = alphabet.indexOf(firstLetter.toLowerCase());  // use indexOf string function to extract index of the first letter in alphabet ,toLowerCase function used to convert
//  letter to lower case to match with alphabet list which all in lowercase

// ## Question 1 
 
// Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?

// Answer 🔑:
// JavaScript use zero-basd indexing which first element of string or an array access using index 0.  

const newIndex = index + shiftValue; // change first litter index by shifting it by our ciper's shift constant value  
const encryptedFirstLetter = alphabet[newIndex % 26 ]; // generate encripted new first letter using the new shifted index to generte first letter's code


// ## Question 2 

// If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?

// Answer : modulus operator can let us stay in the range of Alphabet string indexes if the generated index beyound the length of our alphabet 
// using the  modulus operator we can wrap arround starting from zero for example no 28th postion using % operator convert it to 2 wraps around start from the begining of the index

const alphabetLength = alphabet.length;

const alphabetLength = alphabet.length;
const newModulusIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newModulusIndex];

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0,3)