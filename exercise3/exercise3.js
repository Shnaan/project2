// ## Step 1 

// Generate a decimal number between 0 (inclusive) and 1 (exclusive) using JavaScript's `Math` functions.

const randonDecimal = Math.random(); // genrate random decimal number between 0 and 1

// ## Step 2 

// Determine the desired range of numbers for our secret shift value, which is between 3 and 33.

const range = 33 - 3 + 1; // range = Max - Min + 1 = 31

// ## Question 1 

// Why did we add 1 to the difference between 33 and 3?

// Answer: by adding one we ensure we include both endpoint of our range,in other words if we didn't add 1 we would be calculate the difference between numbers rather than the total
//  count of numbers avaliable.



// ## Step 3 

// Using the random decimal number generated in Step 1, adjust its value to fit within the desired range determined in Step 2.

const randomInRange = randomDecimal * range;


// ## Question 2 

// How does multiplying `randomDecimal` by `range` help us get a number within our desired range?

// Answer: randomDecimal felt between 0 and .99 which is too small for our desire range by multiplying it by our range number we scale it to desire range.


// ## Step 4 

// Round down the decimal number obtained in Step 3 to get a whole integer.

const randomInt = Math.floor(randomInRange);


// ## Question 3

// Why do we use the `Math.floor()` function instead of other rounding methods like `Math.round()`?

// Answer: by using Math.floor we ensure that generated random number rounded down to nearst whole number which is alway between the 0 and our range-1  while Math.round could potentially  round up to a number outside our desired range.


// ## Step 5 

// Adjust the integer obtained in Step 4 to fit within the range of 3 to 33, inclusive.

const shiftValue = randomInt + 3 ;


// ## Question 4 

// How does adding 3 to `randomInt` ensure that our final `shiftValue` is between 3 and 33?

// Answer: randomInt is number between 0 and 30 (mac genrated range ) shifting the number by 3 give us our desire range Min(0+3=3) and max(30+3=33) which is our desire range from 3 to 33.