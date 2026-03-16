
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift


//functions algorithm inspired by the  provided sample code , the video explanation and AI explanation of Math for both encrypt and decrypt code generation formulas
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  // Your encryption code here
  // - Use shiftValue (may be >26)
  // - Preserve uppercase / lowercase
  // - Leave non-alphabet characters unchanged
  // - After every two characters in the encrypted string, insert a random letter from alphabet
  let encryptedMessage = "";
  // TODO: implement
 let counter = 0;  



  for (let  i = 0 ; i < message.length ; i ++){

    let char = message[i];
    let code = message.charCodeAt(0);
    let base = null;
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

 
// generatw base for capital letter and lower case letter base
  if ( code>= 65 && code <= 90 ){  base = 65;  } else if ( code >= 97 && code <= 120 ){  base = 97;  }

  if(base !== null){
     // apply shift and generate the encripted charachter 
     encryptedMessage +=String.fromCharCode(((code -base + shiftValue) % 26 + 26) % 26 + base);
     counter ++;

  }else{
    //non alphabet no shift concat direct to encryptedmessage
    encryptedMessage +=char;

  }

  if (counter ===2){
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


console.log("Decrypted message:", decrypt(secret, 42));