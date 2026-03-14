

// Algorith fizzBuzz 
//     Pseudocode 
//     input:number n 
//     rule:if  n not  positive integer (n>0) and n less than 100(n<100) print error and exit 
//     for each between 1 and n(both included)
//     if n divisiable by 3   print Fizz
//     if n divisiable by 5  print  Buzz
//     if n divisiable by  both 3 and 5 print  FizzBuzz
//     if n not divisiable by 3 or 5    print the number

   function fizzBuzz (n)
{
  if (!Number.isInteger(n) || n < 1 || n >= 100)
  {
    console.log("Error");
    return;
  }

  for (let i = 1; i <= n; i++)
  {
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;

    if (remainderBy3 === 0 && remainderBy5 === 0)
    {
      console.log("FizzBuzz");
    }
    else if (remainderBy3 === 0)
    {
      console.log("Fizz");
    }
    else if (remainderBy5 === 0)
    {
      console.log("Buzz");
    }
    else
    {
      console.log(i);
    }
  }
}

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(25);



// Letter Count Algorithm

// Pseudocode:
// Algorithm letterCount takes a word of alphabetic characters.
//     Create a dictionary to hold each letter in the word and its count.
//     	if word is not a string of alphabetical characters:
// 		print Error and stop

//     For each letter in the word:
//         If the letter already exists in the dictionary,
//             increment the letter's count by 1.
//         Else,
//             add the letter to the dictionary and initialize its count to 1.
//     Return the dictionary of letter counts.


function letterCount (word)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string")
  {
    console.log("Error");
    return;
  }

  for (const letter of word)
  {
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.log("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word)
  {
    let lowerCaseLetter = letter.toLowerCase();

    // If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined)
    {
      letterCounts[lowerCaseLetter]++;
    }
    else
    {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
