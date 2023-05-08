
// /*------------------------------------
//   Here, created a multiply function and called that func
//   in another function inside the map function thats built-in
// */
//   function multiplyByTwo(e){
//     return e * 2;
//   }

//   let multiplyResult = [1, 2, 3].map(multiplyByTwo);
//   console.log(multiplyResult);

//   /*------------------------------------*/

//   /*-  map from scratch using for...of

//   Here, created a map function from scratch
//   and called that func with two parameters
  
// ---*/
  
//     function map(array, cb){
//     const result = [];
//     for(let value of array){
//       result.push(cb(value))
//     }
//     return result;
//   }

//   let result2 = map([10, 20, 30], e => e * 4)
//   console.log(result2);

//   /*---------  map from scratch using for loop-----------*/

//   function map2(arr, callBack){
//     let result3 = [];
//     for(let i=0; i<arr.length; i++){
//     result3.push(callBack(arr[i]))
//   }
//   return result3;
// }
//  let result4 = map2([10, 20, 30], e => e * 4)
//   console.log(result4);

//   /*------  Common H-O-Fs   --------------*/

//   [1, 2, 3].forEach(e => {
//     console.log(e); // 1, 2, 3
//   })

//   //map gives new array with the same no of elements in
//   //the original array after applying the condition

//   let mapResult = [1, 2, 3].map(e => e + 1);
//   console.log(mapResult); // [2, 3, 4]

//   // filter gives a new array with only the elements that 
//   // pass the condition (filtering) and an empty array if
//   // no element passes the test

//   let filterResult = [1, 2, 3].filter(e => e % 2 === 0);
//   console.log(filterResult); // [2]

//   //every outputs true only if every element passes the test
//   // else false
//   let everyResult = [1, 2, 2].every(e => e % 2 === 0);
//   console.log(everyResult); // false

//   // reduce is always used to make total value.. like
//   // accumulating some value and perfoming operations like
//   // +, -, *, so on.. to make a final result.
//   // it always takes 2 arguments..
//   let reduceResult = [1, 2, 3].reduce((acc, b) => acc + b); 
//   console.log(reduceResult); // 6

//   let reduceResult1 = [1, 2, 3].reduce((acc, b) => acc - b); 
//   console.log(reduceResult1); // -4

//   let reduceResult2 = [1, 2, 3, 3].reduce((acc, b) => acc * b); 
//   console.log(reduceResult2); // 18

//   //find returns the value of the first element that passes a 
//   //test. If no value is found it returns undefined

//   let findResult = [1, 13, 67].find(e => e % 2 === 0);
//   console.log(findResult); // undefined

// /*------  isEven scratch func   --------------*/
// function isEven(e){
//     return e % 2 === 0
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// // let evenResult = num.filter(isEven); // calling the fun inside filter func
// // console.log(evenResult) // [2, 4, 6, 8]

// let final = num.filter(isEven).map(multiplyByTwo)
// console.log(final) //[4, 8, 12, 16]
  
// // using built-in ".filter" func

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = nums.filter(el => el % 2 === 0);
// console.log(even) // [2, 4, 6, 8]

// // acc is undefined by default; b is obj; undefined + str => str
// let objArray = [{name: "Bhoomi", age: 10}, {name: "Bhuvan", age: 4}]
//     let x = objArray.reduce((acc, b) => acc + b)
// console.log(x) // [object Object][object Object] => obj into strings

// console.log([{name: "Bhoomi", age: 10}, {name: "Bhuvan", age: 4}].reduce((acc, b) => acc + b.age))
// // b.age // [object Object]4

// console.log([{name: "Bhoomi", age: 10}, {name: "Bhuvan", age: 4}].reduce((acc, b) => acc + b.age, []))
// // by giving empty array [] // "104" => string concatenation

// // Now, defining by 0 to achieve final result
// console.log([{name: "Bhoomi", age: 10}, {name: "Bhuvan", age: 4}].reduce((acc, b) => acc + b.age, 0))
// // correct answer : 14

// //******* Receiving more arguments in the callback function **********

// /* There are only 2 ways of duplicating javascript:

// if you copy array A  =  array A => this is call by reference 
// which means it is the same array copied

// but if u map it actually creates a new duplicate ie., call by value
// */
// let aray = [1, 2, 3, 4]
// // console.log(aray.map(e => e))   // [1, 2, 3, 4]

// let araay = [133, 2222, 31112, 45657]
// console.log(araay.map((e, i) => i))   // [0, 1, 2, 3] - index

// // get the values that match with index value
// let ar = [1, 2, 2, 5, 8, 3, 6, 6, 7, 2, 10]
// console.log(ar.filter((e, i) => e === i)) // [2, 6, 10]

// console.log(ar.map((e, i) => e === i).map((e, i) => e === true ? i : e))
// //[false, false, 2, false, false, false, 6, false, false, false, 10]