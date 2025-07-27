// JavaScript Basics Practice Exam  
// Focus Areas:  Looping through arrays & objects, built-in loop methods,
//  string manipulation, array transformations  
// ---

// ### **Section 1: Looping Through Arrays**  

// 1. **Simple Array Loop**  
//    Write a `for` loop that logs each element of the array `[5, 10, 15, 20]` to the console.  



// 2. **Summing Array Elements**  
//    Use a loop to calculate the sum of all numbers in `[1, 2, 3, 4, 5]` and log the result.  



// 3. **Filter Even Numbers**  
//    Loop through `[12, 7, 9, 24, 18]` and create a new array containing only even numbers.  



// ---

// ### **Section 2: Looping Through Arrays with Objects**  
// **Difficulty: Medium**  

// 4. **Access Object Properties**  
//    Given:  
 
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];

//    Loop through `users` and log each user’s name.  



// 5. **Find a Specific Object**  
//    Using the `users` array above, find and log the object where `name === "Bob"`.  



// 6. **Calculate Average Age**  
//    Loop through `users` and compute the average age.  

// 

// ### **Section 3: Built-in Loop Methods**  


// 7. **`forEach` Practice**  
//    Use `forEach` to log each element 
const myArray = ["apple", "banana", "cherry"]; 


// 8. **`map` Transformation**  
const thisArray = [1, 2, 3];
// use `map` to create a new array where each number is doubled. 


// 9. **`filter` with Condition**  
const grades =[15, 3, 25, 8, 10];

//use `filter` to keep numbers greater than 10.  



// 10. **`find` First Match**  
//     Use `find` to get the first number > 50 in 
// 
const finder = [20, 45, 60, 70]; 

// 11. **`reduce` for Aggregation**  
//     Use `reduce` to multiply all numbers in `[2, 3, 4]` (result: `24`).  

// ---

// ### **Section 4: String Manipulation**  
// **Difficulty: Mixed**  

// 12. **Slice a String**  
    // Slice `"JavaScript"` to extract `"Script"`.  

    const string1 = "JavaScript";

// 13. **Split and Join**  
//     Split `"hello-world"` into an array by `-`, then join back with `_`.
// intended output: "hello_world"

const splitString = "hello-world"

// 14. **Uppercase Transformation**  
//     Convert `"example"` to uppercase using a string method.  

let transform = "example";

// 15. **Check Substring**  
//     Check if `"programming"` contains `"gram"` and log `true` or `false`.  

 let spellCheck = "programming"


// ### **Section 5: Array Transformations with Functions**  
// 

// 16. **Apply Function to Array**
//   Apply `addTwo` to each element in `[3, 6, 9]` using `map`.   

const addTwo = num => num + 2;

let myNums = [3, 6, 9];

 

// 17. **Custom Filter Function**  
//     Write a function `isLongWord(word)` that returns `true` if `word.length > 5`.  
//     Use it to filter myFruits 
const myFruit = ["apple", "banana", "kiwi"];  

// 18. **Chaining Methods**  
//    Chain `map` (multiply by 3) and `filter` (keep even numbers).  

let myNums2 = [1, 2, 3, 4];



// ### **Section 6: Mixed Challenges**  

// 19. **Nested Object Access**  
//     Given:  
   
const data = [{id: 1, items: ["baseball", "soccer ball"]},   {id: 2, items: ["Game Boy"]}];

//     Log all `items` for each object.  


// 20. **Count String Occurrences**  
//     Loop through mixedLetters  and count how many times "a" appears.  
const mixedLetters = ["a", "b", "a", "c"];

// 21. **Flatten an Array**  
//     Use `reduce` or loops to flatten the array flat into `[1, 2, 3, 4]; 

const flat = [[1, 2], [3, 4]];

// 22. **Sort and Reverse**  
//     Sort `ages` in ascending order, then reverse it.  
const ages = [10, 2, 5, 8];

// 23. **Extract Object Keys**  
//     Given `member1`, loop through its keys and log them.  
const member1 = {name: "Tom", age: 28};

// 24. **Merge Arrays**  
//     Merge `firstArray` and `secondArray` into one array using a loop or method.  
let firstArray = [1, 2];
let secondArray = [3, 4];



*** EXTRAS ***

// Write a function that takes an array of numbers and returns their sum.
function sumArray(arr) {
  // your code here
}



// Given an array of student objects, return an array of names of students who passed (score >= 60).
const students = [
  { name: "Alice", score: 75 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 90 }
];

function getPassingStudents(arr) {
  // your code here
}


// Given an array of numbers, return a new array where all odd numbers are doubled, even numbers stay the same.
function doubleOdds(arr) {
  // your code here
}


// use .filter() and .map()

// Write a function that takes an array of ages and returns an array of messages:
// ["You can vote", "You can’t vote"] depending on whether age is 18 or older.

function votingMessages(ages) {
  // your code here
}


// Use `.find()` to return the first user with an admin role.
const users = [
  { username: "dan", role: "user" },
  { username: "amy", role: "admin" },
  { username: "liz", role: "user" }
];

function findAdmin(users) {
  // your code here
}



// Write a function that takes a string and replaces every other word with "___"
const sentence = "I will ace this JavaScript assessment with confidence";

function censorEveryOtherWord(str) {
  // your code here
}


// Reverse only the vowels in a given string. Leave consonants in place.
// e.g. "hello" => "holle"

function reverseVowels(str) {
  // your code here
}



// Write a function that accepts an array of numbers and another function.
// Return a new array with the function applied to each number.

function applyFunction(arr, func) {
  // your code here
}

// Example usage:
const result = applyFunction([1, 2, 3], function(n) { return n * 3 });
// result should be [3, 6, 9]


// Given an array of user objects with 'name' and 'email',
// return an array of usernames (name in lowercase, spaces replaced with underscores)
// but only for users with valid emails (must include "@")

const users = [
  { name: "Alice Johnson", email: "alice@gmail.com" },
  { name: "Bob Smith", email: "bob[at]yahoo.com" },
  { name: "Charlie Day", email: "charlie@outlook.com" }
];

function getUsernames(users) {
  // your code here
}

