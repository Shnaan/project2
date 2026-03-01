

const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];


// ## Step 1 🧩

// Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.

guests.unshift( "BRUTUS");



// ## Question 1 🤔

// How can you verify that "BRUTUS" was added to the beginning of the array?

// Answer: 

// by check the first element of the guest array using index of first element guest[0]


// ## Step 2 🧩

// A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.

push("AUGUSTUS","LUCIA");


// ## Step 3 🧩

// Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.

const spartacusInvited = guests.indexOf("SPARTACUS");

// ## Question 2 🤔

// // What would the value of `spartacusIndex` be if "SPARTACUS" wasn't invited?
// indexOf method would return -1 when when "SPARTACUS" not invited (not found in quest array)



// ## Step 4 🧩

// Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.

const indexToRemove = guests.indexOf("CASSIUS");
slice(indexToRemove,1);


// ## Step 5 🧩

// Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.
const specialGuest = guests.slice(0,3);



// ## Step 6 🧩

// Caesar decides he wants the guest list in alphabetical order. Sort the array. However, Caesar wants his most honored guest (the one added first) to remain at the top
//  of the list. Can you think of a way to sort the guests but keep the honored ones at the top?

honorGuest = guest.slice(0,1); //extract first guest(the honor guest) 
othersGuests = guest.slice(1);//extract the remain element in the list
othersGuest.sort();//sort remain elements in alphabetical order
orderquestlist = honorGuest.concat(othersguest);//united honor guest  and remain elements arrays together