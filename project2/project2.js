
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift


//functions algorithm inspired by the  provided sample code , the video explanation and AI explanation of Math for both
//  encrypt and decrypt code generation formulas
const alphabet = "abcdefghijklmnopqrstuvwxyz"; //string of alphabet will be used to add arandom character between each 2 letter

function encrypt (message, shiftValue) //function encrypt:received string 
{
  // Your encryption code here
  // - Use shiftValue (may be >26)
  // - Preserve uppercase / lowercase
  // - Leave non-alphabet characters unchanged
  // - After every two characters in the encrypted string, insert a random letter from alphabet
  let encryptedMessage = ""; // encrypted message will goes here by accumlate transformed letter and characters
  // TODO: implement
 let counter = 0;  // a counter for the number of characters



  for (let  i = 0 ; i < message.length ; i ++){

    let char = message[i]; // extract character one by one
    let code = char.charCodeAt(0); //reterive code of current character
    let base = null;
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

 
// genrate  base for capital letter and lower case letter base

  if ( code>= 65 && code <= 90 ){  base = 65;  } else if ( code >= 97 && code <= 122 ){  base = 97;  }
   // upper letter's code   range from  65 to 95 and lower case letter's code  range from 97 to 122
   // base will be used to convert the letter ASCII code into 0 to 25 index(start from 0 to 25 ) 
   // for example :code A=65 and Z =90 .index A(65-65=0) and index Z(90-65=25)
  // this base will be used in our encrypt and shift formula to  wrap around  alphabet index
  //  by generate a number from 0 to 25( 26 letters) when substracted from letter  code
  //for example: 'A':code 65 (65-65 = 0 the lower boundry  index) 'Z':code90 (90 -65 =25 upper boundery index )

  if(base !== null){// character is a letter
     //  shift and generate the encripted charachter 
      

     encryptedMessage +=String.fromCharCode(((code -base + shiftValue) % 26 + 26) % 26 + base);
     //shift formula simple explaination
     //encoding letter capital 'Z' as example



  }else{
    //not a letter no shift concat direct to encryptedmessage
    encryptedMessage +=char;

  }
        counter ++; // counter need to be here before the (if counter =2)  block to add letter after each 2 letter
        // and follow the rule of algorithm standard(to decrpt message coded with other program following the rule)

  if (counter ===2){
    //important note:  Misunderstanding the difference between letter and character made me make a mistake and put the counter
    //  in wrong place which cause encrypt and decrypt unconsistent “A character is a broader term encompassing any typographical
    //  symbol, including letters, numbers, punctuation marks (., !), and special symbols (@, #).” -"source:google serach AI" 

  // add random letter to encrypted message fater each 2 charachter
   encryptedMessage+=randomLetter;
   counter = 0;
  }

  }
   
  return encryptedMessage;
}



function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  // - Remove the random letters inserted after every two characters
  // - Shift characters back by shiftValue to retrieve original text
  let decryptedMessage = "";
  let counter = 0;
  // TODO: implement

  for (let i = 0; i < encryptedMessage.length ; i++ ){

   
    //skip the random generated letter not part of original message
    if(counter===2){
       counter=0;
       continue;
       
     }

     
    let char = encryptedMessage[i]
    let code = char.charCodeAt(0);
    let base = null;

    // generate base for capital letter and lower case letter base
    if (code >=65 && code <=90){base = 65; }else if(code >=97 && code <=122){ base = 97; }
     // decrypt character's  letter both capital or small letter
    if (base !== null){
      //switch back original letter
     decryptedMessage +=String.fromCharCode(((code -base - shiftValue) % 26 + 26) % 26 + base);

     
    }else{
     // non a character concat to decrypted message no decoding needed
     decryptedMessage += char ;
    }
                counter++;

  }

  return decryptedMessage;
}


//testing
let secret = `Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj`;
console.log("Encripted message:",secret);
console.log("Decrypted message:", decrypt(secret, 42));

 