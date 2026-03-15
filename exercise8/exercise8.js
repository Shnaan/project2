
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ## Step 1 🧩

// Create a function named `encryptLetter` that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.

function encryptletter(letter,shift){

const newIndex = (alphabet.indexOf(letter.toLowerCase()) + shift) % alphabet.length;
return alphabet[newIndex];

    
}



// ## Step 2 🧩

// Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.

function encryptMessage(message,shift){

let encryptedMessage='';

    for(let i=0; i<message.length;i++){
      encryptedMessage+=encryptletter(message[i],shiftValue);
    
    }
    return encryptedMessage;

    
}



// ## Step 3 🧩

// Create a function named `decryptLetter` that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.

function decryptletter(letter,shift){

const newIndex = (alphabet.indexOf(letter.toLowerCase())- shift+alphabet.length) % alphabet.length;
return alphabet[newIndex];

    
}


// ## Step 4 🧩

// Create a function named `decryptMessage` that takes an encrypted word and a shift value as parameters. This function should return the decrypted version of the entire word.



function decryptMessage(message,shift){

let decryptedMessage='';

    for(let i=0; i<message.length;i++){
      decryptedMessage+=decryptletter(message[i],shift);
    
    }
    return decryptedMessage;

    
}

// test letter ecrypt and decrypt
for(let i =0 ;i<5;i++){
console.log(encryptletter(alphabet[i],shiftValue));
}


for(let i =0 ;i<5;i++){
console.log(decryptletter(alphabet[i],shiftValue));
}





console.log(encryptMessage('Hello',shiftValue));
console.log(encryptMessage('Alogrithm',shiftValue));
console.log(encryptMessage('Pseudocode',shiftValue));
console.log(decryptMessage(encryptMessage('Hello',shiftValue),shiftValue));
console.log(decryptMessage(encryptMessage('Alogrithm',shiftValue),shiftValue));
console.log(decryptMessage(encryptMessage('Pseudocode',shiftValue),shiftValue));


// ## Question 🤔

// If Caesar encrypts the word "BRUTUS" using our `encryptMessage` function and then decrypts the result using our `decryptMessage` function, will he get "BRUTUS" back? Why or why not?
console.log('encrypt and decrypt  BRUTUS');
console.log(encryptMessage('BRUTUS',shiftValue));
console.log(decryptMessage(encryptMessage('BRUTUS',shiftValue),shiftValue));

// Yes,  get "BRUTUS" back, decryptMessage reverse the the index of all letters back to the index of original message for example
// leter b(original index 1): coded index is (1+3) modulus 26=>4
// decrypt the index back (4-3 +26)modulus 26=>27 modulus 26(27/26=1.038462=>27*1=>27-26=>1) =>1(the original index of letter b)