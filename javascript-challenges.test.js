// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

//const { array, describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codeWord" , () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: codeWord is not defined

const secretCodeWord1 = "Lackadaisical";
// // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// // Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// // Expected output: "3cc3ntr1c"

// // b) Create the function that makes the test pass.

// // Pseudo code:
// // created a function codeWord with a parameter string
// // created a temporary variable array = string.split("") to turn the string into an array and seperate each index
// // use a for loop to iterate through the array then use the conditionals (if and if else) to locate a specific index and swap the character("aeio") with an interger (4,3,1,0).
// // return the function and the temporary variable array. use .join("") to switch the array into the string

const codeWord = (string) => {
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
     if (array[i] === "a" || array[i] === "A") {
      array[i] = 4
    }
     else if (array[i] === "e" || array[i] === "E" ) {
        array[i] = 3
    }
    else if (array[i] === "i" || array[i] === "I") {
        array[i] = 1
    }
    else if (array[i] === "o" || array[i] === "O") {
        array[i] = 0
    }
  }
  return array.join("")
}

console.log(codeWord(secretCodeWord1)) // L4ck4d41s1c4l
console.log(codeWord(secretCodeWord2)) // G0bbl3dyg00k
console.log(codeWord(secretCodeWord3)) // 3cc3ntr1c

// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("takes an input and uses a boolean to see if the array is a full house or not.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
// ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true
// b) Create the function that makes the test pass.

// Pseudo code:
// create a function fullHouse using parameter as an array
// use the built in method .sort() to sort the array from least to greatest
// use a conditional and 2 logical operators to go through the array and check that the index's match
//  index 0 must match index 1 AND 2 must match 4 OR 0 must match 2 AND 3 must match 4
// checking that we have 3 matches of any number and two matches of any number
// else we will return false
//SIDE NOTE!!! (I can use everything before the Logical OR and it will work still However if we created a new array of [1,1,1,3,3] it will not work because index 2 does not match index 4 in my example)

const fullHouse = (array) => {
   array.sort()
   if (array[0] === array[1] && array[2] === array[4] || array[0] === array[2] && array[3] === array[4]) {
        return true
   }
   else {
    return false
   }
    return array
}
console.log(fullHouse(hand1)) //true
console.log(fullHouse(hand2)) //false
console.log(fullHouse(hand3)) //false
console.log(fullHouse(hand4)) //true
