// 1. Write a function to reverse a string.

// function  revStr(str){
//   return str.split('').reverse().join('')
// }

// console.log(revStr('bharat'))

// 2. Create a function to check if a number is even or odd.

// function eoChecker(num){
//   if(num % 2 === 0 ) return 'even'
//   else return 'odd'
// }

// console.log(eoChecker(22))

// 3. Write a program to find the largest number in an array.

// function findLar(arr){
//   let max = 0; // index of arr assume;
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i] > arr[max]){
//       max = i;
//     }
//   }
//   return arr[max];
// }

// console.log(findLar([23,12,531,78]));

// 4. Implement a function to capitalize the first letter of each word in a string.

// function capitalizeStr(str){
//   return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1));
// }

// console.log(capitalizeStr('rahul sharma'));

// 5. Write a function that returns the factorial of a number.

// function factorial(num){
//   let fact = 1;
//   for(let i = 1; i <= num; i++){
//     fact *= i; 
//   }
//   return fact;
// }

// console.log(factorial(3));

// 6. Create a function to check if a string is a palindrome.

// function palindromeStr(str){
//   let newStr = str.split('').reverse().join('');
//   return newStr == str ? 'This string is palidrome' : 'This string is not palindrome'
// }

// console.log(palindromeStr('bharat'))

// 7. Write a program to sum all numbers in an array.

// function sumArr(arr){
//   let sum = 0;
//   let i = 0;
//   while(i < arr.length){
//     sum += arr[i];
//     i++;
//   }
//   return sum;
// }

// console.log(sumArr([2,2,2,2,2]));

// 8. Implement a function to remove duplicates from an array.

// function duplRemove(arr){
//   let newArr = [];
//   arr.forEach(v => {
//     if(!newArr.includes(v)){
//       newArr.push(v)
//     }
//   });
//   return newArr
// }
// console.log(duplRemove([1,2,3,1,2,2,5,6,2]));

// { You also can use set}

// second method

// function duplRemove(arr){
//   return [...new Set(arr)];
// }
// console.log(duplRemove([1,2,3,1,2,2,5,6,2]));


// 9. Write a function to check if a value is of type string.

// function typeChecker(value){
//   return typeof value === 'string'
// }

// console.log(typeChecker(43234))

// 10. Write a function that takes two numbers and returns their sum.

// function sumNumber(f, s){
//   return f + s;
// }
// console.log(sumNumber(1,5));


// 11. Create a function to print numbers from 1 to N.

// function printNumber(num){
//   for (let i = 1; i <= num; i++) {
//     console.log(i)
//   }
// }
// printNumber(10)

// 12. Write a function that merges two arrays.

// function mergeArr(arr1, arr2){
//   return [...arr1, ...arr2];
// }

// console.log(mergeArr([1,2,3,4], [5,6,7]))

// 13. Implement a function to find the index of a given element in an array without using indexOf.

// function findIndex(arr, el){
//   let index = 0;
//   arr.forEach((element, i) => {
//     if(element == el) index = i;
//   });

//   return index;
// }

// console.log(findIndex([1,2,3,55,6], 6));

// 14. Write a program to count the number of vowels in a string.

// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   str = str.toLowerCase();
//   for(let char of str){
//     if(vowels.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('bharati'));

// 15. Create a function to convert Celsius to Fahrenheit.

// formula : °F = °C × (9/5) + 32.
// formula : °C = (°F - 32) × 5/9.

// function converter(formate, temp){
//   if(formate === 'celsius'){
//     return (temp - 32) * 5/9
//   }else{
//     return (temp * (9/5)) + 32
//   }
// }

// console.log(converter('celsius', 89.6));


// 16. Write a function to check if an array contains a specific element.

// function checkElement(arr, ele){
//   return arr.includes(ele)
// }
// console.log(checkElement([1,2,4,3], 5));


// 17. Implement a function to calculate the power of a number without using Math.pow.

// function cal(base, pow){
//   if(pow == 0){
//     return 1;
//   }
//   let result = 1;
//   for(let i = 1; i <= Math.abs(pow); i++){
//     result *= base
//   }
//   if(pow < 0){
//     return 1 / result;
//   }
//   return result
// }

// console.log(cal(2,-2));


// 18. Write a function to swap two variables without using a third variable

// function swap(a, b){
//   return [a, b] = [b, a]
// }

// console.log(swap(10,20));


// 19. Create a function that returns the first non-repeated character in a string.

// function checkRepeatedChar(str){
//   let obj = {}

//   for(let i = 0; i <= str.length - 1; i++){
//     let key = str[i];
//     obj[key] = (obj[key] || 0) + 1;
//   }

//   for (const key in obj) {
//     if(obj[key] == 1){
//       return key;
//     }
//   }

//   return null;
// }

// console.log(checkRepeatedChar('barbarbarhs'));
// console.log(checkRepeatedChar('teeter'));
// console.log(checkRepeatedChar('racecars'));


// 20. Write a program to print the Fibonacci series up to N terms.

// function fibonacci(num){
//   let i = 0;
//   let frist = 0;
//   let second = 1;
//   while(i < num){
//     console.log(frist);
//     let sum = frist + second;
//     frist = second;
//     second = sum;
//     i++
//   }
// }

// fibonacci(5);


// 21. Write a function to find the sum of digits in a number.

// function sumOfDigits(num){
//   let sum = 0;
//   let i = 0;
//   while(num > 0){
//     let rem = num%10; // 3;
//     sum += rem;
//     num = num/10;
//   }
//   return Math.floor(sum);
// }

// console.log(sumOfDigits(12.12))


// 22. Create a function that checks whether a number is prime or not.

// function checkPrime(num){
//   if(num == 0) return false
//   let prime = true;
//   for (let i = 1; i < num; i++) {
//     if(num%i == 0){
//       prime = false;
//     }
//   }
//   return (prime)
// }

// console.log(checkPrime(33));

// 23. Write a program to find the common elements between two arrays.

// function findCommonEle(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1.includes(arr2[j])) {
//         if (!newArr.includes(arr2[j])) {
//           newArr.push(arr2[j]);
//         }
//       }
//     }
//   }
//   return newArr;
// }

// console.log(findCommonEle([1, 2, 3, 3, 4, 5], [3, 4, 5, 6, 7]));

// 24. Implement a function to find the longest word in a string.

// function findLongWord(str){
//   let newArr = str.split(' ');
//   let longestWord = '';
//   newArr.map((s) => longestWord.length < s.length ? longestWord = s : longestWord)
//   return longestWord
// }

// console.log(findLongWord('bharat is a good boy mukeshChana'))

// 25. Write a function to count the number of occurrences of a specific element in an array.

// function checkOccurrences(arr){
//   let obj = {}
//   arr.forEach(el => {
//     if(obj.hasOwnProperty(el)){
//       obj[el]++
//     }else{
//       obj[el] = 1
//     }
//   });
//   return obj;
// }

// console.log(checkOccurrences([1,2,3,3,2,1,3,4,1,3,4,2,0]));

// 26. Create a function to check if a number is a perfect square.

// function checkSqr(num){
//   let sqr = 0;
//   for (let i = 2; i < num/2; i++) {
//     if(Math.floor(num / (i)) == i){
//       sqr = i
//     }
//   }
//   return sqr;
// }

// console.log(checkSqr(36));


// 27. Write a function that accepts an array of numbers and returns an array with only even numbers.


// function returnEven(arr){
//   let newArr = [];
//   newArr = arr.filter(num => num%2==0);
//   return newArr;
// }

// console.log(returnEven([1,2,3,4,5,6,7]));


// 28. Create a function that converts a number to its binary representation.

// function binaryConvertor(num){
//   if(num == 0) return 0
//   let arr = [];
//   while(num > 0){
//     let rem = Math.floor(num%2);
//     if(rem == 0){
//       arr.unshift(0)
//     }else{
//       arr.unshift(1)
//     }
//     num = Math.floor(num/2);
//   }
//   return arr.join('')
// }

// console.log(binaryConvertor(64));


// 29. Write a function that takes an array of numbers and returns the second largest number.




// 33. **Implement a function to find the first missing positive integer in an array.**
// function find(arr){
//   if(arr.length === 0){
//     return "Array is empty"
//   }

//   let max = Math.max(...arr)
//   let set = new Set([...arr])

//   for (let i = 1; i <= max; i++) {
//     if(!set.has(i)){
//       return i;
//     }
//   }
// }

// console.log(find([0,1,2,3,5,6]))


