const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;



// ## Step 1 🧩

// Use a series of `if`, `else if`, and `else` statements to decipher the first clue.

// - If `emblemClue1` is "Eagle", the location starts with "Forum".
// - If `emblemClue1` is "Lion", the location starts with "Colosseum".
// - Otherwise, the location starts with "Villa".

let location = null;

if (emblemClue1 === "Eagle") {

    location = "Forum";

} else if (emblemClue2 === "Lion") {

    location ="Colosseum";
    
} else {
    
    location ="Villa";
}

// ## Step 2 🧩

// Use boolean logic to decipher the second clue.

// - If `emblemClue2` is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
// - If `emblemClue2` is "Grapes" OR the first location is "Villa", append " of Pompey" to the location.

if ( emblemClue2  === "Laurel" && location === "Forum" ){

    location +=  " of Augustus"; 

}
else if(emblemClue2  ===  "Grapes" && location === "Villa"){

    location += " of Pompey";

}


// ## Step 3 🧩

// Use the switch statement to decipher the third clue.

// - Depending on the value of `emblemClue3`, append a direction to the location.
//     - 7 is "North"
//     - 3 is "South"
//     - 9 is "East"
//     - 4 is "West"


switch(emblemClue3){
    case 7:
         location += "North";
         break;
    case 3:
         location += "South";
         break;
    case 9:
         location += "East";
         break;
    case 4:
         location += "West";
         break;
  
    
}


// ## Question 🤔

// Why is it important to be careful when using `==` (double equals) instead of `===` (triple equals) in our conditionals?


// Answer: "==" (double equals)convert operand to same data type before make the comparison which can lead to unexpected results in certain situations due to type coercion,while "==="(triple equals) compare
//  both type and value ensure strict equality.