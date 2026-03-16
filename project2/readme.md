# **Technical Skills Survey** Project Part 2- Helping Caesar's Traditional Secret Party

# **Introduction**

Congratulations on your journey with JavaScript so far! From knowing little to nothing about programming, you've now reached a point where you can tackle some of the most intricate challenges. Remember, every coder was once where you are now, and every expert has faced challenges they didn't know how to solve. Embrace the process, and let's dive into this exciting challenge inspired by Julius Caesar himself! So that your friends can send you secret messages through your digital CV!

### **Previously on Springboard**:

In the heart of ancient Rome 🏛️, Julius Caesar had a secret 🤫. Not just about gladiators 🗡️ or gold 💰, but about... a party 🍾! This year, he would host a secret party only for his closest friends. This party was the talk of the town 🙊! There were magical fairies ✨, dancing peacocks 🦚, melodious harps 🎵, and sparkling fountains ⛲.

However, there was a problem 😲! Uninvited guests 🥷 would crash the party because the location 🗺️ would get leaked by spies 🕵️‍♂️.

Caesar needed a plan 💡! He thought, "I'll send out the invites encrypted 🔐. That way, only my true friends 🤝 will know when and where the party is!".

So, he came up with a cunning plan 🦊. Instead of writing the party location of the invitation directly 🏞️, he would shift each letter in by a fixed number 🔢. So, for example, if he decided to shift by 3:

- A would become D 🔄
- B would become E 🔄
- C would become F 🔄
- ... and so on.

If the invite said "GARDEN" 🌳, he would write "JDUGHQ" 🤯.

When Brutus (Caesar's friend turned enemy) received the letter 📜, he knew about this secret code 🗝️. He would shift the letters back by the same number and decode "JDUGHQ" to "GARDEN" 🌳. Mmm, clever 🧠!

However, any nosy Romans 👀 intercepting the message would be baffled 😶‍🌫️! "JDUGHQ? What kind of place is that?" they would wonder 🤷‍♂️.

Thanks to the "Caesar Cipher" 🔐, Caesar's secret party remained exclusive 😼, magical 🌌, and crasher-free 🥳!

**Project: Helping Caesar’s Traditional Secret Party**

In the last adventure, you helped Caesar keep his party exclusive by encrypting messages.

Now, it’s time to **build your own secret message system** using **JavaScript** — Caesar Cipher style.

## **Starter Code**

Here’s the base code to start with, look for a starter zip file below:

```jsx
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {

// Your encryption code here

return encryptedMessage;

}

function decrypt(encryptedMessage, shiftValue) {

// Your decryption code here

return decryptedMessage;

}
```

---

## **Your Mission**

Implement **two  functions**:

1. **encrypt(message, shiftValue)** — turns a normal message into Caesar’s secret code.
2. **decrypt(encryptedMessage, shiftValue)** — decodes Caesar’s messages back into readable text.

But Caesar has added a twist this time:

After every **two letters**, you must insert a **random letter** from the alphabet to confuse his enemies!

## **Requirements**

1. **Implementing the Encryption Algorithm of Caesar's Cipher**
    - Step 1: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, pass it as is to the encrypted string.
    - Step 2: After every two letters, insert a random letter from the alphabet.
2. **Implementing the Decryption Algorithms of Caesar's Cipher**
    - Take in the encrypted message and a shift value and return the original plaintext message.
    - Accurately reverse the encryption process to retrieve the original message.
3. **Decrypting the Secret Message**
    - ***“Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!”***
    - Decrypt the above secret message using 42 as the shift value and complete the quest.
4. **Using Comments**: As you build your functions, document your thought process, the purpose of each section of your code, and any challenges you come across. Good commenting not only helps others understand your code but also aids you in tracking your logic.
5. **Attributing Help**:
    - If you incorporate code or inspiration from online resources, attribute the source. At a minimum, provide the URL.
    - If you get help from mentors or TAs, describe the help given and attribute the name.

Starter files and a detailed readme is available here.

Download the starter code:

[caesars-start.zip](attachment:1eaa06e3-396f-4c20-88cf-273028bdb693:caesars-start.zip)

## **Step-by-Step Instructions**

Let’s walk through this carefully, one piece at a time.

***Note:*** There is a solution and two walkthrough videos attached at the end, if you are stuck use them for reference but do not just copy and paste, be ready to discuss this with your mentor.

### **Step 1: Shift Letters**

When encrypting, each letter of your message should move forward in the alphabet by a fixed number — the **shift value**.

Example with a shift of **3**:

| **Plain** | **Encrypted** |
| --- | --- |
| A | D |
| B | E |
| C | F |
| X | A |
| Y | B |
| Z | C |

So "HELLO" becomes "KHOOR".

### *💡 **Hint:***

- Use **charCodeAt()** to get a character’s numeric code.
- Use **String.fromCharCode()** to turn it back into a letter.
- Wrap around using the modulus operator **%**

Example snippet:

```jsx
let base = "a".charCodeAt(0);

let shifted = ((char.charCodeAt(0) - base + shiftValue) % 26) + base;

let newChar = String.fromCharCode(shifted);
```

---

Make sure your function:

- Works for **uppercase** and **lowercase**.
- Leaves **non-letter characters** (spaces, punctuation) unchanged.

### **Step 2: Normalize the Shift**

If the shift number is larger than 26, it should wrap around.

For example, a shift of 42 is the same as a shift of 16.

### *💡 **Hint:***

```jsx
shiftValue = ((shiftValue % 26) + 26) % 26;
```

---

This also ensures **negative shifts** (used during decryption) work correctly.

### **Step 3: Add Random Letters**

After every **two characters** in your encrypted result, insert a **random lowercase letter**.

You can get one using:

```jsx
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
```

---

### *💡 **Hint:** Keep a counter to track how many letters you’ve added, and reset it after you insert the random letter.*

Example:

```jsx
if (counter === 2) {

encryptedMessage += randomLetter;

counter = 0;

}
```

---

### **Step 4: Decrypt the Message**

Now, we need to reverse the process!

Your **decrypt()** function should:

1. **Remove** every third character (the random ones you inserted).
2. **Shift letters backward** by the same shift value.

### *💡 **Hint:***

You can reuse your encryption logic with a **negative shift**:

```jsx
function decrypt(encryptedMessage, shiftValue) {

return encrypt(encryptedMessage, -shiftValue);

}
```

---

Or, if you’re using the inserted random-letter logic, first filter the message:

```jsx
let filtered = "";

for (let i = 0; i < encryptedMessage.length; i++) {

if (i % 3 !== 2) filtered += encryptedMessage[i];

}
```

---

Then apply the shifting logic in reverse.

***If you are stuck, check out the instructional video hints in the solution files below. Use the resources as hints, not to copy and paste! You should be prepared to discuss a solution with your mentor!***

### **Step 5: Test Your Work**

Try these test cases:

```jsx
console.log(encrypt("HELLO", 3));   // → KHOOR (plus random letters)

console.log(decrypt("KHOOR", 3));   // → HELLO
```

---

## **Submission Guidelines 📦**

- Upload the project folder (a separate folder from the previous one) to a cloud storage. If using Google Drive, see the ["Upload files & folders to Google Drive"](https://support.google.com/drive/answer/2424368) article.
- Make the folder publicly accessible. If using Google Drive, see the "Share a file publicly" section in Step 2 of the "[Share files from Google Drive](https://support.google.com/drive/answer/2424368)" article.
- Submit the link to the folder.

## **Assessment Criteria 🔍**

1. Proper function definitions and absence of syntax errors.
2. Correct implementation of functions.
3. Ability of the decrypt function to decode messages from the encrypt function.
4. Decrypting the given secret message and completing the quest!
5. Thorough commenting and explanation of the code logic.
6. Proper attribution for borrowed or inspired code, with provided references.

While the basic mechanics of the exercise should be adhered to, you might come up with different yet valid methods to achieve the results. We celebrate and encourage such creativity, recognizing that there can be multiple correct approaches to a problem.

### *💡 **Hint:***

If you are completely stuck check out one of the solution approaches below:

[caesars-solution.zip](attachment:f5a22530-241c-481a-b9a0-f5794a6d56bb:caesars-finish.zip)

Detailed video walkthrough of the ***encrypt*** functionality:

[Caesars Cipher Encrypt Walkthrough](https://youtu.be/l7HzQCiUWPg)

Detailed video walkthrough of the ***decrypt*** functionality:

[Caesars Cipher Decrypt Walkthrough](https://youtu.be/32CUzKXP83A)

## **Fun Fact 🥳**

Did you know? The concept of secret messages isn't just limited to human history. In nature, many animals use sophisticated methods of communication to send "hidden" messages to each other, often to warn about predators or find mates. While they might not be encrypting their calls or colors, they've mastered the art of covert communication. If animals had coding classes, who knows, maybe they'd be learning the Caesar Cipher, too! 🐦🎶🦎

## **Optional Coding Challenge 🌀**

While you've traversed through the mysteries of the Caesar Cipher, the labyrinth of code still has hidden chambers to explore. As an elite code-breaker, can you add another layer of complexity to this ancient puzzle? Here's a twist:

Alternate the shift direction. Each time, before adding a random letter, shift the first letter forward and the second letter backward. This not only adds an element of unpredictability but also tests the robustness of your functions. Dive deep, brave coder, and let's see if you can conquer this enhanced enigma! 🌌