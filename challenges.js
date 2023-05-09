/*------------------
// 1)
// Create a function named
// "forEach" that takes in two
// parameters– an array and a
// callback function. 

// The "forEach" function should
// apply the function to every
// element in the array.

// Test cases:
// forEach(["a", "b", "c"], e => {console.log(e)}); // a b c

// ----------  for loop --------*/

    // function forEach(arr, cb){
    //   for(let i=0; i<arr.length; i++){
    //     cb(arr[i]);
    //   }
    // }

//---------- for...of loop -------------------

//     function forEach(array, callback){
//         for(let value of array){
//             callback(value);
//         }
//     }

// forEach(["a", "b", "c"], e => {console.log(e)}); // a b c

// /*-------------------------------------
// 2)
// Create a function named
// "map" that takes in two
// parameters– an array and a
// callback function. 

// The "map" function should
// return a new array. Each item
// in the new array should be the
// result of applying the callback
// function to every element
// of the array passed in as the parameter.

// Test cases:
// console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]
// ----------------------------------*/
/* ------------ for...of loop ----------------------*/

// let newArray = [];
// function map(array, callback){
//     for(let value of array){
//         newArray.push(callback(value))
//     }
//     return newArray;
// }

/* ------------ for loop ----------------------*/

// let newArray = [];

// function map(array, callback){
//     for (let i=0; i<array.length; i++){
//         newArray.push(callback(array[i]));
//     }
//     return newArray;
// }
// console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]

// /*------------------
// 3)
// Create a function named
// "filter" that takes in two
// parameters– an array and a
// callback function. 

// The "filter" function should
// return a new array that only includes
// the items that have passed
// the callback function (ie: the callback
// will return true or false for each item).

// Test cases:
// console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]
// ------------------*/
// let newArray = [];

//***** using for loop n switch case  *****/

// function filter(array, callback){
//        for (let i=0; i<array.length; i++){
//         let row = callback(array[i]);
//         switch (row) {
//             case true:
//                 newArray.push(array[i])
//                 break;    
//         }
//     }
//     return newArray;
// }
// console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]

//***** using for...of loop n switch case  *****/

// function filter(array, callback){
//     for(let value of array){
//         let result = callback(value);
//         switch (result) {
//             case true:
//                 newArray.push(value)
//                 break;
//         }
//     }
//     return newArray;
// }

// console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]

//***** could not figure out the correct syntax using ternary ***/

// function filter(array, callback){
//        for (let i=0; i<array.length; i++){
//         newArray.push(callback(array[i])=== true ? array[i] : null);
//     }
//     return newArray;
// }

//  console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]

// /*------------------
// 4)
// Create a function named
// "every" that takes in two
// parameters– an array and a
// callback function. 

// The "every" function is similar to
// "filter" in that the callback function
// is a test. However, the "every" function
// returns true if EVERY element
// in the passed in array passes that test. 
// Otherwise, it returns false. Try writing it!

// Test cases:
// console.log(every([1, 3, 5], n => n < 6)); // true
// console.log(every([2, 4, 6], n => n < 6)); // false
// console.log(every([2, 4, 6, 2], n => n < 6)); // false
// ------------------*/

    // --------- for loop ---------------*/

// function every(array, callback) {

//  for (let i = 0; i < array.length; i++) {
//    const value = array[i];
//    if (!callback(value, i, array)) {
//      return false;
//    }
//  }
//  return true;
// }

//*-----------

  // function every(array, cb){
  //   for (let i = 0; i < array.length; i++){
  //     if(cb(array[i]) === false){
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  
//  console.log(every([1, 3, 5], n => n < 6)); // true
//  console.log(every([2, 4, 6], n => n < 6)); // false

  /************ some method *****************/
//  function some(array, cb){
//     for (let i = 0; i < array.length; i++){
//       if(cb(array[i]) === true){
//         return true;
//       }
//     }
//     return false;
//   }


/******************************************/
// --------for...of every----------*/

// function every(array, callback, i){
//     for(let value of array){
//         let result = value;
//         if(!callback(result, i, array)){
//             return false;
//         }
//     }
//     return true;
// }

//  console.log(every([1, 3, 5], n => n < 6)); // true
//  console.log(every([2, 4, 6], n => n < 6)); // false
//  console.log(every([2, 4, 6, 2], n => n < 6)); // false
// /*------------------
// 5)
// You've written "forEach", "map", "filter"
// and "every" from scratch. Each of 
// these methods exist on the JavaScript Array
// prototype already, however. 

// For this question, use the native
// forEach method to add all of the items
// in the nums array. Use a fat arrow function.
// The code has been started for you.
// ------------------*/

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;

// nums.forEach((e) => { 
//   // your code here
//   sum += e;
// });

// console.log(sum);

// /*------------------
// 6.1)
// Use the native map method to transform
// every item in the names array to a greeting.

// Test case:
// ["Sofia", "Pedro", "Mia"] to ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
// ------------------*/

// const names = ["Sofia", "Pedro", "Mia"];

// const greetings = names.map(e => `Hello, ${e}`)

// console.log(greetings);


// /*------------------
// 6.2)
// Use the map method to create a duplicate of an array.
// Write this in the shorter possible way you can.

// Test case:
// ["JavaScript", "Python", "Go"] to ["JavaScript", "Python", "Go"]
// ------------------*/

// const langs = ["JavaScript", "Python", "Go"];

// const duplicate = langs.map(e => e)

// console.log(duplicate);


// /*------------------
// 6.3)
// Use the map method to create a duplicate of an array of full names.

// Test case:
// Result should be ["Grace Hopper", "Ruth Bader Ginsburg", "Ada Lovelace"]
// ------------------*/

// const people1 = [
//   { firstname: "Grace", lastname: "Hopper" },
//   { firstname: "Ruth", lastname: "Bader Ginsburg" },
//   { firstname: "Ada", lastname: "Lovelace" },
// ];
// console.log(people[0]["firstname"]);

// const fullnames = people.map(e => e.firstname + " " + e.lastname);

//or object destructuring syntax
// const fullnames = people1.map(
//   ({firstname, lastname}) => `${firstname} ${lastname}`
// )

// console.log(fullnames);


// /*------------------
// 6.4)
// Use the map method to create a duplicate of objects that contain the original data plus the fullname.
// Use the same people array as in the previous exercise

// Test case:
// Result should be [
//   { firstname: "Grace", lastname: "Hopper", fullname: "Grace Hopper" },
//   {
//     firstname: "Ruth",
//     lastname: "Bader Ginsburg",
//     fullname: "Ruth Bader Ginsburg",
//   },
//   { firstname: "Ada", lastname: "Lovelace", fullname: "Ada Lovelace" },
// ]
// ------------------*/
// const people = [
//   { firstname: "Grace", lastname: "Hopper" },
//   { firstname: "Ruth", lastname: "Bader Ginsburg" },
//   { firstname: "Ada", lastname: "Lovelace" },
// ];

// const fullobjects = people.map(e => ({...e, 
//   fullname: e.firstname +" "+ e.lastname}) )

// console.log(fullobjects);

// /*------------------
// 6.5)
// Use the map function to create an array with values "true" or "false" 
// that indicate if the number in that position is even

// Test case:
// [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9] to [false, false, true, false, true, false, true, false, true, true, true, false]

// ------------------*/

// const numbers = [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9];

// const areEven = numbers.map(e => e % 2 === 0);

// console.log(areEven);

// /*------------------
// 6.6)
// Use the map function to create an array with values "true" or "false" 
// that indicate if the number in that position is equal to the position in the array (starting at 0)

// Test case:
// [1,3,2,2,4,13,8,6,8,10,4,12,12] to [false, false, true, false, true, false, false, false, true, false, false, false, true]

// ------------------*/

// const moreNumbers = [1, 3, 2, 2, 4, 13, 8, 6, 8, 10, 4, 12, 12];

// const areInPosition = moreNumbers.map((e, i) => e === i) 

// console.log(areInPosition);

// /*------------------
// 7.1)
// Use the filter method to filter out any
// number that is greater than 50.

// Test case:
// [1, 34, 83, 65, 3, 24, 98] to [1, 34, 3, 24]
// ------------------*/

// const numsList = [1, 34, 83, 65, 3, 24, 98];

// const smallNums = numsList.filter( e => e > 50)

// console.log(smallNums);

// /*------------------
// 7.2)
// Use the filter method to filter out any
// number that is even. Use the same array as before, numList

// Test case:
// [1, 34, 83, 65, 3, 24, 98] to [1, 83, 65, 3]
// ------------------*/
// const numsEvenList = [1, 34, 83, 65, 3, 24, 98];

// const evenList = numsEvenList.filter(e => e % 2 === 1)

// console.log(evenList);

// /*------------------
// 7.3)
// Use the filter method to keep all the numbers that are bigger
// than the position they occupy in the array, starting at 0

// Test case:
// [1, 0, 1, 3, 5, 6, 6, 1, 9] to [1, 5, 6, 9]
// ------------------*/

// const moreNums = [1, 0, 1, 3, 5, 6, 6, 1, 9];

// const evenList1 = moreNums.filter((e, i) => e > i)

// console.log(evenList1);

// /*------------------
// 7.4)
// Use the filter method to filter out the people whose firstname
// does not contain the letter "a". Use the array "people" that you used before.

// Test case:
// [
//   { firstname: "Grace", lastname: "Hopper" },
//   { firstname: "Ruth", lastname: "Bader Ginsburg" },
//   { firstname: "Ada", lastname: "Lovelace" },
// ]
//  to 
//  [
//   { firstname: "Grace", lastname: "Hopper" },
//   { firstname: "Ada", lastname: "Lovelace" },
// ]
// ------------------*/
const people = [
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
];

const peopleWithA = people.filter( e => e.firstname.toLowerCase().includes("a"))

console.log(peopleWithA);

// /*------------------
// 8)
// Use the every method to return true
// if every word in the array below is a
// palindrome (the same backwards as forwards).

// Here's some code you can use to reverse
// a string: 

// .split('').reverse().join('')

// Notice that the code that has been given
// to you is wrapped in another function. This is to
// make testing multiple cases easier. :)

// Test case:
// ["deified", "civic", "radar", "level", "rotor"] is true
// ["kayak", "reviver", "racecar", "reader", "madam"] is false
// ------------------*/

const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function checkPalindromes(list) {
  let reverse = wordList1.reverse();
  console.log(reverse);
  let reverse1 = wordList2.reverse();
  console.log(reverse1);
  return list.every((list) => reverse 
    // add necessary parameters in above
    // and finish the code in the body here
    
  );
}

console.log(checkPalindromes(wordList1));
console.log(checkPalindromes(wordList2));

// /*------------------
// 9)
// Look at the MDN docs and Eloquent JavaScript
// to understand how "reduce" works. Then, 
// use reduce to add all the items in the 
// numsList (from the previous question) together.
// ------------------*/

const numsList = [1, 34, 83, 65, 3, 24, 98];
const total = numsList.reduce((acc, b) =>  acc + b
);

// console.log(total); // should equal 308

// // TO DEEPEN THE LEARNING

// /*------------------
// 10)
// Use the filter method to create an array containing
// only those numbers that are even and are located in an even position in the array,
// or those numbers that are odd and are located in an odd poistion in the array,
// starting at position 0

// Test case:
// [1, 34, 83, 65, 3, 24, 98] to [65,98]
// ------------------*/

listArray = [1, 34, 83, 65, 3, 24, 98]

const oddList = listArray.filter((e, i) => 

(e % 2 === 0 && i % 2 === 0) || (e % 2 !== 0 && i % 2 !== 0))

console.log(oddList);

// /*------------------
// 11.1)
// Each array in this array represents the each player's age
// in a basketball team. Filter out those teams that have less 
// than 3 players that are older than 20 years old.
// Hint: you can use HOFs inside the callbacks of other HOFs.

// Test case:
const team = [
  [20, 31, 19, 18, 22],
  [20, 31, 16, 21, 21],
  [17, 31, 16, 21, 21],
  [18, 19, 19, 20, 32]
] 
// to [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]
// ------------------*/

let newArray = []
console.log(newArray)
let olderTeams = team.filter(e => {
  for(let i = 0; i< team.length; i++){
    let row = (team[i]);
    if(row.entries(e > 20) === 3 ){
      newArray.push(row)
    } else null
    // if(row)
    // for (let j=0; j<team[i].length; j++){
    //   console.log(team[i][j])
    // }
  }
}
)

// console.log(olderTeams);

// /*------------------
// 11.2) Perhaps you used the .length property in the previous exercise.
// Can you repeat the exercise without using .length?
// You're only allowed to use HOFs, but you can use as many as you need.

// ------------------*/

// // olderTeams = // your code here

// // console.log(olderTeams);

// /*------------------
// 11.3) This time, instead of returning the arrays of teams,
// calculate the total age of the team (adding all the ages of its players).
// In other words, create an array that contains the accumulated age of team players,
// only for those teams that have more than 2 players that are older than 20.
// You're only allowed to use HOFs, but you can use as many as you need.

// Test case:
// [[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
// to [109,106]

// ------------------*/

// // olderTeams = // your code here

// // console.log(olderTeams);

let array = [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]

console.log(newArray);
  let newAray = [];
  for(let i = 0; i<array.length; i++){
    array[i]
  
let result = array[i].reduce((acc, b) => acc + b);
    newAray.push(result);
  }
  console.log(newAray);