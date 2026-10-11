// 1. Implement a function to flatten a nested array.

// function flatArr(arr){
//   return arr.flat(Infinity)
// }
// console.log(flatArr([1, 3, [4, 5, [6, 7, [8]], 9], 10]))

// second method without using inbuild method of js

// function flattenArr(arr){
//   let newArr = [];
//   arr.forEach(element => Array.isArray(element) ? newArr = newArr.concat(flattenArr(element)) : newArr.push(element));
//   return newArr;
// }
// console.log(flattenArr([1, 3, [4, 5, [6, 7, [8]], 9], 10]))


// 2. Write a function to debounce another function.

// function printHello() {
//   console.log('Hello');
// }

// function debounce(fn, delay) {
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay)
//   }
// }
// const debouncedPrintHello = debounce(printHello, 1000);
// debouncedPrintHello()

// 3. Create a function to find the longest word in a string.

// function findLongStr(str){
//   let longestStr = '';
//   str.split(' ').map((s) => {
//     s.length > longestStr.length ? longestStr = s : longestStr
//   })
//   return longestStr
// }

// console.log(findLongStr('bh bhc bhar bh bha'))

// 4. Implement a function that merges two sorted arrays into one sorted array.

// function mergeArr(arr1, arr2){
//   let sort1 = arr1.sort((a, b) => a - b );
//   let sort2 = arr2.sort((a, b) => a - b );

//   let createArr = [...sort1, ...sort2];

//   return createArr.sort((a,b) => a-b);
// }

// console.log(mergeArr([1,2,4,5], [2,6,3,5,4]));

// second Method

// function mergeArr(arr1, arr2) {
//   let mergedArr = [];
//   let i = 0, j = 0;

//   // Merge both arrays
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArr.push(arr1[i]);
//       i++;
//     } else {
//       mergedArr.push(arr2[j]);
//       j++;
//     }
//   }

//   // If there are remaining elements in arr1, add them
//   while (i < arr1.length) {
//     mergedArr.push(arr1[i]);
//     i++;
//   }

//   // If there are remaining elements in arr2, add them
//   while (j < arr2.length) {
//     mergedArr.push(arr2[j]);
//     j++;
//   }
//   return mergedArr;
// }

// console.log(mergeArr([1, 2, 4, 5], [2, 6, 3, 5, 4]));


// 5. Write a function to check if two strings are anagrams.

// function checkAnagrams(str1, str2){
//   let newStr1 = str1.split('')
//   let newStr2 = str2.split('')

//   let count = 0;
//   if(newStr1.length === newStr2.length){
//     newStr1.forEach(element => {
//       if(newStr2.includes(element)) {
//         count++
//       }else{
//         count--
//       }
//     });
//   } else{
//     return false;
//   }
//   return count == newStr1.length ? true : false;
// }
// console.log(checkAnagrams('aabbcc', 'abc'))

// Second method

// function checkAnagrams(str1, str2) {
//   return str1.split('').sort().join('') === str2.split().sort().join('');
// }
// console.log(checkAnagrams('abcd', 'abce'))


// 6. Create a function to deep clone an object.

// function deepCloneObj(obj){
//   let newObj = structuredClone(obj);
//   obj.b = 4;
//   return newObj;
// }
// obj = {
//   a : 1,
//   b : 2
// }
// console.log(deepCloneObj(obj))
// console.log(obj)

// Second Method

// function deepCloneObj(obj){
//   let newObj = {...obj};
//   newObj.b = 4
//   return newObj
// }

// const obj = {
//   a : 1,
//   b : 2
// }
// console.log(deepCloneObj(obj))
// console.log(obj);

// Third way

// function deepCloneObj(obj){
//   let newObj = JSON.parse(JSON.stringify(obj));
//   newObj.b = 4;
//   return newObj;
// }
// const obj = {
//   a : 1,
//   b : 2
// }
// console.log(deepCloneObj(obj))
// console.log(obj);

// 8. Write a function to convert an object into a query string.

// function convertQueryStr(obj) {
//   return Object.entries(obj).map(([key, value]) => {
//     return (`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
//   }).join('&')
// }

// console.log(convertQueryStr({ a: 1, b: 2 }));

// 9. Create a function that takes a function and returns a memoized version of it.

// function outer(fn){
//   let obj = {}

//   return function(num){
//     if(obj[num] === undefined){
//       console.log('Chla')
//       let result = fn(num);
//       obj[num] = result;
//       return result
//     }else{
//       console.log('Nhi')
//       return obj[num]
//     }
//   }
// }

// function factorial(num) {
//   let fact = 1;
//   let i = 1;
//   while(i <= num){
//     fact = i * fact;
//     i++
//   }
//   return fact;
// }

// let outerFn = outer(factorial);
// console.log(outerFn(5))
// console.log(outerFn(5))
// console.log(outerFn(5))
// console.log(outerFn(4))
// console.log(outerFn(5))


// 10. Write a program to find all prime numbers up to N.

// function findPrime(num){
//   let prime = true;
//   if(num == 0 || num == 1){
//     return false
//   }

//   let i = 2;
//   while(i < num){
//     if(num % 2 == 0){
//       prime = false;
//     }
//     i++;
//   }
//   return prime
// }

// console.log(findPrime(11))

// 11. Implement a function to shuffle an array randomly.

// function shuffleRnd(arr){
//   for (let i = arr.length - 1; i > 0; i--) {
//     let rndValue = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[rndValue]] = [arr[rndValue], arr[i]];
//   }
//   return arr
// }

// console.log(shuffleRnd([1,2,3,4,5,6]))


// 12. Write a function that returns the difference between two dates in days.

// function dayDiff(date1, date2){
//   let newDate1 = new Date(date1);
//   let newDate2 = new Date(date2);

//   let daysdiff = Math.abs(newDate2 - newDate1)
//   console.log(daysdiff / (1000 * 60 * 60 * 24));

// }

// dayDiff('2021-02-04', '2021-02-01')

// 13. Create a function that validates an email address.

// function emailValidator(email){
//   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9\-\.])+\.([A-Za-z]{2,4})$/;

//   if(reg.test(email) == false){
//     return false;
//   }else{
//     return true
//   }
// }

// console.log(emailValidator('bharat@gmail.com'))

// 14. Implement a function that converts Roman numerals to integers.

// function RtoN(num) {
//   if (num <= 0) return 'Number is zero or negative';
//   let obj = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   }

//   let roman = ''
//   for (const key in obj) {
//     let q = Math.floor(num / obj[key]);
//     num -= (q * obj[key]);
//     for (let i = 1; i <= q; i++) {
//       roman += key
//     }
//   }
//   return roman
// }
// console.log(RtoN(494))


// 15. Write a function to generate all permutations of a string.

// function permutStr(str){
//   if(str.length < 2) return [str];

//   let permutations = [];

//   for (let s = 0; s < str.length; s++) {
//     let currestStr = str[s];
//     let rest = str.slice(0, s) + str.slice(s+1);
//     let subpermutations = permutStr(rest);
//     for (let i = 0; i < subpermutations.length; i++) {
//       let permutation = subpermutations[i];
//       permutations.push(currestStr+permutation)
//     }
//   }
//   return permutations;
// }

// console.log(permutStr('bharat'));

// Also do same permutation for arr

// function permutArray(arr){
//   if(arr.length < 2) return [arr];

//   let permutations = [];
//   for (let i = 0; i < arr.length; i++) {
//     let curIndex = arr[i];
//     let restIndex = arr.filter((a, ind) => ind != i);
//     let subpermutations = permutArray(restIndex);

//     for (let j = 0; j < subpermutations.length; j++) {
//       let permutation = subpermutations[j];
//       permutations.push(curIndex+permutation);
//     }
//   }

//   return permutations;
// }

// console.log(permutArray([1,2]))

// 17. Write a function to group an array of objects by a property.


// function groupArrObj(arr) {
//   if(arr.length < 1) return 'Please write correct array';
//   let newObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (newObj[arr[i].age]) {
//       newObj[arr[i].age].push({...arr[i]});
//     } else {
//       newObj[arr[i].age] = [{...arr[i]}];
//     }
//   }
//   return newObj;
// }

// const arr = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 }
// ]

// console.log(groupArrObj(arr))


// 18. Implement a function to find the missing number in an array of numbers 1 to N.


// function findMissingNum(arr){
//   let missingNums = [];
//   for (let index = 0; index < arr.length; index++) {
//     if(arr[index] !== (index+1)){
//       missingNums.push(index+1);
//       arr.splice(index, 0, index+1)
//     }
//   }
//   return missingNums
// }

// console.log(findMissingNum([1,2,3,4,5,7,8,9,13]));

// 19. Create a function to merge two objects deeply.

// function deepCloneObj(obj1, obj2) {
//   let newObj = structuredClone(obj1);
//   for (const key in obj2) {
//     if (typeof obj2[key] === 'object') {
//       newObj[key] = deepCloneObj(newObj[key], obj2[key]);
//     } else {
//       newObj[key] = obj2[key];
//     }
//   }
//   return newObj;
// }

// let obj1 = {
//   a: 1,
//   b: {
//     x: 10,
//     y: 20
//   }
// };

// let obj2 = {
//   b: {
//     y: 30,
//     z: 40
//   },
//   c: 50
// };

// console.log(deepCloneObj(obj1, obj2))


// 20. Write a function that throttles another function.

// function printHello(num) {
//   console.log('Hello');
// }

// function throttle(fn, delay) {
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay)
//   }
// }

// printHello = throttle(printHello, 1000);
// printHello();
// printHello();
// printHello();
// printHello();
// printHello();



