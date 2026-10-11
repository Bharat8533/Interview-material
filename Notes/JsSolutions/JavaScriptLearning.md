
## Questions and Answers

1. **What is JavaScript, and what is its primary use?**  
   **Answer**: JavaScript is a high-level, interpreted programming language primarily used for adding interactivity and dynamic behavior to web pages. It runs in web browsers and can be used server-side with Node.js.  
   **Example**: ```javascript document.getElementById('myButton').addEventListener('click', () => alert('Clicked!')); ```

2. **What is the difference between JavaScript and ECMAScript?**  
   **Answer**: ECMAScript is the standardized specification for scripting languages, and JavaScript is an implementation of that specification. ECMAScript defines core syntax, while JavaScript includes APIs like DOM manipulation.  
   **Example**: ```javascript // ECMAScript: [1, 2, 3].map(x => x * 2); // JavaScript: document.querySelector('.class'); ```

3. **What are the main features of JavaScript?**  
   **Answer**: JavaScript is single-threaded, asynchronous, prototype-based, dynamically typed, and supports functional and object-oriented programming paradigms.

4. **What is the difference between `var`, `let`, and `const` in JavaScript?**  
   **Answer**: `var` is function-scoped, allows redeclaration; `let` is block-scoped, allows reassignment but not redeclaration; `const` is block-scoped, requires initialization, and cannot be reassigned (though object properties can be mutated).  
   **Example**: ```javascript var x = 1; var x = 2; let y = 1; y = 2; const z = 1; const obj = { a: 1 }; obj.a = 2; ```

5. **What is hoisting in JavaScript?**  
   **Answer**: Hoisting moves variable and function declarations to the top of their scope during compilation, allowing use before declaration. Only declarations are hoisted, not initializations.  
   **Example**: ```javascript console.log(x); var x = 5; console.log(myFunc()); function myFunc() { return "Hello"; } ```

6. **What is the difference between `undefined` and `null`?**  
   **Answer**: `undefined` means a variable is declared but not assigned a value; `null` is an explicit assignment representing no value or no object.  
   **Example**: ```javascript let x; console.log(x); // undefined; console.log(x === null); // false ```

7. **What is a closure in JavaScript?**  
   **Answer**: A closure is a function that retains access to its lexical scope’s variables even after the outer function has executed.  
   **Example**: ```javascript function outer() { let x = 10; return function inner() { return x; }; } const func = outer(); console.log(func()); // 10 ```

8. **What is the event loop in JavaScript?**  
   **Answer**: The event loop handles asynchronous operations by checking the call stack and task queue, executing tasks when the stack is empty.

9. **What is the difference between synchronous and asynchronous code in JavaScript?**  
   **Answer**: Synchronous code executes sequentially, blocking further execution; asynchronous code allows other tasks to run while waiting for operations like I/O.  
   **Example**: ```javascript console.log(1); setTimeout(() => console.log(2), 0); console.log(3); // 1, 3, 2 ```

10. **What is the purpose of the `this` keyword in JavaScript?**  
    **Answer**: The `this` keyword refers to the context object in which a function is executed, determined by how the function is called.  
    **Example**: ```javascript const obj = { name: 'Test', getName() { return this.name; } }; console.log(obj.getName()); // Test ```

11. **What are the different ways to define a function in JavaScript?**  
    **Answer**: Functions can be defined using function declarations, function expressions, arrow functions, and constructor functions.  
    **Example**: ```javascript function decl() {}; const expr = function() {}; const arrow = () => {}; const constr = new Function('return 1;'); ```

12. **What is the difference between a function declaration and a function expression?**  
    **Answer**: Function declarations are hoisted and can be called before definition; function expressions are assigned to variables and not hoisted.  
    **Example**: ```javascript console.log(decl()); function decl() { return 'ok'; } console.log(expr); const expr = function() { return 'ok'; }; ```

13. **What is strict mode in JavaScript?**  
    **Answer**: Strict mode (`"use strict"`) enforces stricter parsing and error handling, preventing unsafe actions like undeclared variables.  
    **Example**: ```javascript "use strict"; x = 10; // ReferenceError: x is not defined ```

14. **What is the difference between `==` and `===` operators?**  
    **Answer**: `==` performs type coercion before comparison; `===` checks value and type without coercion.  
    **Example**: ```javascript console.log(1 == '1'); // true console.log(1 === '1'); // false ```

15. **What are JavaScript promises?**  
    **Answer**: Promises represent the eventual completion or failure of an asynchronous operation, with states: pending, fulfilled, or rejected.  
    **Example**: ```javascript const p = new Promise((resolve, reject) => resolve('Success')); p.then(res => console.log(res)); // Success ```

16. **What is the purpose of `async` and `await` in JavaScript?**  
    **Answer**: `async` declares a function as asynchronous, returning a promise; `await` pauses execution until a promise resolves, used in `async` functions.  
    **Example**: ```javascript async function fetchData() { const data = await Promise.resolve('Data'); return data; } fetchData().then(console.log); // Data ```

17. **What is the prototype in JavaScript?**  
    **Answer**: The prototype is an object that other objects inherit properties and methods from, used in prototype-based inheritance.  
    **Example**: ```javascript function Person() {} Person.prototype.greet = function() { return 'Hi'; }; const p = new Person(); console.log(p.greet()); // Hi ```

18. **What is prototypal inheritance?**  
    **Answer**: Prototypal inheritance allows objects to inherit properties and methods from other objects via their prototype chain.  
    **Example**: ```javascript const parent = { x: 1 }; const child = Object.create(parent); console.log(child.x); // 1 ```

19. **What is the difference between classical and prototypal inheritance?**  
    **Answer**: Classical inheritance uses classes (e.g., Java); prototypal inheritance uses objects and their prototype chains (JavaScript).

20. **What is the `call()` method in JavaScript?**  
    **Answer**: The `call()` method invokes a function with a specified `this` context and individual arguments.  
    **Example**: ```javascript function greet() { return this.name; } const obj = { name: 'Test' }; console.log(greet.call(obj)); // Test ```

21. **What is the `apply()` method in JavaScript?**  
    **Answer**: The `apply()` method invokes a function with a specified `this` context and arguments as an array.  
    **Example**: ```javascript function sum(a, b) { return a + b; } console.log(sum.apply(null, [1, 2])); // 3 ```

22. **What is the `bind()` method in JavaScript?**  
    **Answer**: The `bind()` method creates a new function with a fixed `this` context and optional pre-set arguments.  
    **Example**: ```javascript function greet() { return this.name; } const obj = { name: 'Test' }; const bound = greet.bind(obj); console.log(bound()); // Test ```

23. **What is an IIFE (Immediately Invoked Function Expression)?**  
    **Answer**: An IIFE is a function expression that is defined and executed immediately to create a private scope.  
    **Example**: ```javascript (function() { var x = 10; console.log(x); })(); // 10 ```

24. **What is the global object in JavaScript?**  
    **Answer**: The global object is `window` in browsers or `global` in Node.js, serving as the top-level scope.  
    **Example**: ```javascript window.x = 10; console.log(globalThis.x); // 10 (in browsers) ```

25. **What is the difference between `null` and `undefined`?**  
    **Answer**: `null` represents an intentional absence of value; `undefined` means a variable is declared but unassigned.  
    **Example**: ```javascript let x = null; let y; console.log(x, y); // null, undefined ```

26. **What is type coercion in JavaScript?**  
    **Answer**: Type coercion is the automatic conversion of one data type to another during operations like comparisons.  
    **Example**: ```javascript console.log('5' + 5); // '55' (string coercion) ```

27. **What are arrow functions, and how do they differ from regular functions?**  
    **Answer**: Arrow functions (`=>`) are concise, don’t have their own `this`, and don’t bind `arguments`. Regular functions have their own `this` and `arguments`.  
    **Example**: ```javascript const arrow = () => this; function regular() { return this; } console.log(arrow.call({ x: 1 })); // global object ```

28. **What is the `NaN` value in JavaScript?**  
    **Answer**: `NaN` (Not-a-Number) represents an invalid numeric operation result.  
    **Example**: ```javascript console.log(0 / 0); // NaN ```

29. **How does JavaScript handle asynchronous operations?**  
    **Answer**: JavaScript uses the event loop, promises, and `async/await` to handle asynchronous operations like timers or network requests.

30. **What is the purpose of the `setTimeout` function?**  
    **Answer**: `setTimeout` schedules a function to execute after a specified delay.  
    **Example**: ```javascript setTimeout(() => console.log('Delayed'), 1000); // Logs after 1s ```

31. **What is the purpose of the `setInterval` function?**  
    **Answer**: `setInterval` repeatedly executes a function at specified intervals until cleared.  
    **Example**: ```javascript let id = setInterval(() => console.log('Tick'), 1000); clearInterval(id); ```

32. **What is the `Promise.all` method?**  
    **Answer**: `Promise.all` takes an array of promises and resolves when all promises resolve or rejects on the first rejection.  
    **Example**: ```javascript Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(values => console.log(values)); // [1, 2] ```

33. **What is the `Promise.race` method?**  
    **Answer**: `Promise.race` resolves or rejects as soon as one promise in an array resolves or rejects.  
    **Example**: ```javascript Promise.race([Promise.resolve(1), Promise.reject('Error')]).then(console.log); // 1 ```

34. **What is the difference between `forEach` and `map` methods?**  
    **Answer**: `forEach` executes a function for each array element without returning anything; `map` creates a new array with the results of calling a function on each element.  
    **Example**: ```javascript [1, 2].forEach(x => console.log(x)); const doubled = [1, 2].map(x => x * 2); // [2, 4] ```

35. **What is the `filter` method in JavaScript?**  
    **Answer**: The `filter` method creates a new array with elements that pass a test provided by a function.  
    **Example**: ```javascript const evens = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4] ```

36. **What is the `reduce` method in JavaScript?**  
    **Answer**: The `reduce` method reduces an array to a single value by applying a function to each element.  
    **Example**: ```javascript const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6 ```

37. **What is event delegation in JavaScript?**  
    **Answer**: Event delegation uses a parent element to handle events for its children, leveraging event bubbling.  
    **Example**: ```javascript document.querySelector('ul').addEventListener('click', e => { if (e.target.tagName === 'LI') console.log(e.target.textContent); }); ```

38. **What is event bubbling?**  
    **Answer**: Event bubbling is when an event on an element propagates up to its parent elements in the DOM tree.

39. **What is event capturing?**  
    **Answer**: Event capturing is when an event propagates from the outermost element down to the target element.  
    **Example**: ```javascript document.querySelector('div').addEventListener('click', () => console.log('Div'), true); ```

40. **What is the difference between `stopPropagation` and `preventDefault`?**  
    **Answer**: `stopPropagation` prevents further bubbling or capturing of an event; `preventDefault` prevents the default action (e.g., form submission).  
    **Example**: ```javascript document.querySelector('a').addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); }); ```

41. **What is a JavaScript module?**  
    **Answer**: A module is a reusable piece of code with its own scope, using `import` and `export` syntax in ES6.  
    **Example**: ```javascript export const x = 10; import { x } from './module.js'; ```

42. **What is the difference between CommonJS and ES6 modules?**  
    **Answer**: CommonJS uses `require` and `module.exports` (synchronous, Node.js); ES6 modules use `import`/`export` (asynchronous, browser-compatible).

43. **What is the `Object.create` method?**  
    **Answer**: `Object.create` creates a new object with a specified prototype object.  
    **Example**: ```javascript const proto = { x: 1 }; const obj = Object.create(proto); console.log(obj.x); // 1 ```

44. **What is the `Object.assign` method?**  
    **Answer**: `Object.assign` copies properties from one or more source objects to a target object.  
    **Example**: ```javascript const target = {}; Object.assign(target, { x: 1 }, { y: 2 }); // { x: 1, y: 2 } ```

45. **What is the difference between shallow and deep copying?**  
    **Answer**: Shallow copying copies top-level properties; deep copying copies nested objects recursively.  
    **Example**: ```javascript const obj = { a: { b: 1 } }; const shallow = { ...obj }; shallow.a.b = 2; console.log(obj.a.b); // 2 ```

46. **What is the `typeof` operator in JavaScript?**  
    **Answer**: The `typeof` operator returns a string indicating the type of a value.  
    **Example**: ```javascript console.log(typeof 42); // 'number' console.log(typeof null); // 'object' ```

47. **What is the `instanceof` operator in JavaScript?**  
    **Answer**: The `instanceof` operator checks if an object is an instance of a constructor or its prototype chain.  
    **Example**: ```javascript const arr = []; console.log(arr instanceof Array); // true ```

48. **What is the `new` keyword in JavaScript?**  
    **Answer**: The `new` keyword creates an instance of a constructor function, setting its prototype.  
    **Example**: ```javascript function Person() { this.name = 'Test'; } const p = new Person(); console.log(p.name); // Test ```

49. **What is the `delete` operator in JavaScript?**  
    **Answer**: The `delete` operator removes a property from an object.  
    **Example**: ```javascript const obj = { x: 1 }; delete obj.x; console.log(obj.x); // undefined ```

50. **What is the `in` operator in JavaScript?**  
    **Answer**: The `in` operator checks if a property exists in an object or its prototype chain.  
    **Example**: ```javascript const obj = { x: 1 }; console.log('x' in obj); // true ```

51. **What is the spread operator in JavaScript?**  
    **Answer**: The spread operator (`...`) expands elements of an iterable (e.g., array) or object properties.  
    **Example**: ```javascript const arr = [1, 2]; console.log([...arr, 3]); // [1, 2, 3] ```

52. **What is the rest parameter in JavaScript?**  
    **Answer**: The rest parameter (`...`) collects remaining arguments into an array.  
    **Example**: ```javascript function sum(...numbers) { return numbers.reduce((a, b) => a + b); } console.log(sum(1, 2, 3)); // 6 ```

53. **What is destructuring assignment in JavaScript?**  
    **Answer**: Destructuring assignment unpacks values from arrays or objects into variables.  
    **Example**: ```javascript const [a, b] = [1, 2]; const { x } = { x: 3 }; console.log(a, x); // 1, 3 ```

54. **What is the `Map` object in JavaScript?**  
    **Answer**: The `Map` object holds key-value pairs, where keys can be any type, unlike objects.  
    **Example**: ```javascript const map = new Map(); map.set('key', 1); console.log(map.get('key')); // 1 ```

55. **What is the `Set` object in JavaScript?**  
    **Answer**: The `Set` object stores unique values of any type.  
    **Example**: ```javascript const set = new Set([1, 1, 2]); console.log(set.size); // 2 ```

56. **What is the difference between `Map` and `Object` in JavaScript?**  
    **Answer**: `Map` allows any type as keys and maintains insertion order; `Object` uses strings/symbols as keys.

57. **What is a WeakMap in JavaScript?**  
    **Answer**: A `WeakMap` is a collection of key-value pairs where keys are objects, and entries are garbage-collected when keys are no longer referenced.  
    **Example**: ```javascript const wm = new WeakMap(); let obj = {}; wm.set(obj, 1); obj = null; // Entry is eligible for garbage collection ```

58. **What is a WeakSet in JavaScript?**  
    **Answer**: A `WeakSet` stores unique objects, and objects are garbage-collected when no longer referenced.  
    **Example**: ```javascript const ws = new WeakSet(); let obj = {}; ws.add(obj); obj = null; // Object is eligible for garbage collection ```

59. **What is the `Symbol` data type in JavaScript?**  
    **Answer**: `Symbol` is a primitive type for creating unique identifiers, often used as object keys.  
    **Example**: ```javascript const sym = Symbol('id'); const obj = { [sym]: 1 }; console.log(obj[sym]); // 1 ```

60. **What is the purpose of the `JSON` object in JavaScript?**  
    **Answer**: The `JSON` object provides methods to parse and stringify JSON data.  
    **Example**: ```javascript const obj = JSON.parse('{"x":1}'); console.log(JSON.stringify(obj)); // '{"x":1}' ```

61. **What is the difference between `let` and `var` in terms of scope?**  
    **Answer**: `let` is block-scoped; `var` is function-scoped or global.  
    **Example**: ```javascript { let x = 1; var y = 2; } console.log(y); // 2, console.log(x); // ReferenceError ```

62. **What is the `globalThis` object in JavaScript?**  
    **Answer**: `globalThis` is a standard way to access the global object across environments (e.g., `window`, `global`).  
    **Example**: ```javascript globalThis.x = 10; console.log(x); // 10 (in browsers) ```

63. **What is the `eval` function in JavaScript?**  
    **Answer**: The `eval` function executes a string as JavaScript code, but it’s generally unsafe and avoided.  
    **Example**: ```javascript eval('console.log("Hello")'); // Hello ```

64. **What is the purpose of the `try...catch` block?**  
    **Answer**: The `try...catch` block handles exceptions, executing code in `try` and catching errors in `catch`.  
    **Example**: ```javascript try { throw new Error('Test'); } catch (e) { console.log(e.message); } // Test ```

65. **What is the `finally` block in JavaScript?**  
    **Answer**: The `finally` block executes code after `try...catch`, regardless of whether an error occurred.  
    **Example**: ```javascript try { console.log('Try'); } finally { console.log('Finally'); } // Try, Finally ```

66. **What is the `throw` statement in JavaScript?**  
    **Answer**: The `throw` statement creates a custom error to be caught by a `catch` block.  
    **Example**: ```javascript throw new Error('Custom error'); ```

67. **What is the `class` syntax in JavaScript?**  
    **Answer**: The `class` syntax is syntactic sugar for constructor functions, supporting object-oriented programming.  
    **Example**: ```javascript class Person { constructor(name) { this.name = name; } } const p = new Person('Test'); ```

68. **What is the difference between a static method and an instance method?**  
    **Answer**: Static methods are called on the class; instance methods are called on instances.  
    **Example**: ```javascript class Test { static staticMethod() { return 'Static'; } method() { return 'Instance'; } } console.log(Test.staticMethod()); // Static ```

69. **What is the `super` keyword in JavaScript?**  
    **Answer**: The `super` keyword calls the parent class’s constructor or methods in a subclass.  
    **Example**: ```javascript class Parent { constructor() { this.x = 1; } } class Child extends Parent { constructor() { super(); } } ```

70. **What is the `this` binding in arrow functions?**  
    **Answer**: Arrow functions inherit `this` from their lexical scope, not the caller.  
    **Example**: ```javascript const obj = { x: 1, arrow: () => this.x }; console.log(obj.arrow()); // undefined ```

71. **What is the `Array.prototype` in JavaScript?**  
    **Answer**: `Array.prototype` is the prototype object for all arrays, providing methods like `map` and `filter`.  
    **Example**: ```javascript Array.prototype.custom = function() { return this; }; console.log([1].custom()); // [1] ```

72. **What is the `Function.prototype` in JavaScript?**  
    **Answer**: `Function.prototype` is the prototype object for all functions, providing methods like `call` and `bind`.

73. **What is the `Object.prototype` in JavaScript?**  
    **Answer**: `Object.prototype` is the root prototype for all objects, providing methods like `toString`.  
    **Example**: ```javascript const obj = {}; console.log(obj.toString()); // [object Object] ```

74. **What is the `null` prototype in JavaScript?**  
    **Answer**: Objects created with `Object.create(null)` have no prototype, lacking inherited methods.  
    **Example**: ```javascript const obj = Object.create(null); console.log(obj.toString); // undefined ```

75. **What is the `for...of` loop in JavaScript?**  
    **Answer**: The `for...of` loop iterates over iterable objects like arrays or strings.  
    **Example**: ```javascript for (const x of [1, 2]) { console.log(x); } // 1, 2 ```

76. **What is the `for...in` loop in JavaScript?**  
    **Answer**: The `for...in` loop iterates over an object’s enumerable properties.  
    **Example**: ```javascript const obj = { a: 1 }; for (const key in obj) { console.log(key); } // a ```

77. **What is the `Object.keys` method?**  
    **Answer**: `Object.keys` returns an array of an object’s own enumerable property names.  
    **Example**: ```javascript const obj = { a: 1, b: 2 }; console.log(Object.keys(obj)); // ['a', 'b'] ```

78. **What is the `Object.values` method?**  
    **Answer**: `Object.values` returns an array of an object’s own enumerable property values.  
    **Example**: ```javascript const obj = { a: 1, b: 2 }; console.log(Object.values(obj)); // [1, 2] ```

79. **What is the `Object.entries` method?**  
    **Answer**: `Object.entries` returns an array of an object’s own enumerable key-value pairs.  
    **Example**: ```javascript const obj = { a: 1 }; console.log(Object.entries(obj)); // [['a', 1]] ```

80. **What is the `Array.isArray` method?**  
    **Answer**: `Array.isArray` checks if a value is an array.  
    **Example**: ```javascript console.log(Array.isArray([1])); // true console.log(Array.isArray({})); // false ```

81. **What is the `typeof` bug with `null`?**  
    **Answer**: `typeof null` returns `'object'` due to a historical bug, though `null` is a primitive.  
    **Example**: ```javascript console.log(typeof null); // 'object' ```

82. **What is the `Symbol.iterator` in JavaScript?**  
    **Answer**: `Symbol.iterator` is a method that makes an object iterable for `for...of` loops.  
    **Example**: ```javascript const obj = { [Symbol.iterator]: () => ({ next: () => ({ done: true }) }) }; for (const x of obj) {} ```

83. **What is the `async` function’s return value?**  
    **Answer**: An `async` function always returns a promise, wrapping non-promise returns in a resolved promise.  
    **Example**: ```javascript async function test() { return 1; } test().then(console.log); // 1 ```

84. **What is the `Promise.resolve` method?**  
    **Answer**: `Promise.resolve` creates a resolved promise with a given value.  
    **Example**: ```javascript Promise.resolve(1).then(console.log); // 1 ```

85. **What is the `Promise.reject` method?**  
    **Answer**: `Promise.reject` creates a rejected promise with a given reason.  
    **Example**: ```javascript Promise.reject('Error').catch(console.log); // Error ```

86. **What is the `Object.freeze` method?**  
    **Answer**: `Object.freeze` makes an object immutable, preventing property changes.  
    **Example**: ```javascript const obj = Object.freeze({ x: 1 }); obj.x = 2; console.log(obj.x); // 1 ```

87. **What is the `Object.seal` method?**  
    **Answer**: `Object.seal` prevents adding or removing properties but allows modifying existing ones.  
    **Example**: ```javascript const obj = Object.seal({ x: 1 }); obj.x = 2; console.log(obj.x); // 2 ```

88. **What is the `Object.preventExtensions` method?**  
    **Answer**: `Object.preventExtensions` prevents adding new properties to an object.  
    **Example**: ```javascript const obj = Object.preventExtensions({ x: 1 }); obj.y = 2; console.log(obj.y); // undefined ```

89. **What is the `Array.prototype.slice` method?**  
    **Answer**: `slice` returns a shallow copy of a portion of an array.  
    **Example**: ```javascript const arr = [1, 2, 3]; console.log(arr.slice(1, 2)); // [2] ```

90. **What is the `Array.prototype.splice` method?**  
    **Answer**: `splice` modifies an array by removing or replacing elements and returns removed elements.  
    **Example**: ```javascript const arr = [1, 2, 3]; arr.splice(1, 1, 4); console.log(arr); // [1, 4, 3] ```

91. **What is the `Array.prototype.concat` method?**  
    **Answer**: `concat` creates a new array by combining the original array with other arrays or values.  
    **Example**: ```javascript const arr = [1]; console.log(arr.concat([2], 3)); // [1, 2, 3] ```

92. **What is the `Array.prototype.join` method?**  
    **Answer**: `join` creates a string from array elements, joined by a separator.  
    **Example**: ```javascript const arr = [1, 2]; console.log(arr.join('-')); // '1-2' ```

93. **What is the `Array.prototype.reverse` method?**  
    **Answer**: `reverse` reverses an array’s elements in place.  
    **Example**: ```javascript const arr = [1, 2]; arr.reverse(); console.log(arr); // [2, 1] ```

94. **What is the `Array.prototype.sort` method?**  
    **Answer**: `sort` sorts an array in place, optionally using a comparison function.  
    **Example**: ```javascript const arr = [2, 1]; arr.sort((a, b) => a - b); console.log(arr); // [1, 2] ```

95. **What is the `String.prototype.split` method?**  
    **Answer**: `split` divides a string into an array of substrings based on a delimiter.  
    **Example**: ```javascript const str = 'a,b'; console.log(str.split(',')); // ['a', 'b'] ```

96. **What is the `String.prototype.replace` method?**  
    **Answer**: `replace` replaces the first occurrence of a substring or pattern with a new value.  
    **Example**: ```javascript const str = 'hello'; console.log(str.replace('l', 'x')); // 'hexlo' ```

97. **What is the `String.prototype.match` method?**  
    **Answer**: `match` returns an array of matches for a regular expression in a string.  
    **Example**: ```javascript const str = 'abc'; console.log(str.match(/b/)); // ['b'] ```

98. **What is the `RegExp` object in JavaScript?**  
    **Answer**: The `RegExp` object is used for pattern matching with regular expressions.  
    **Example**: ```javascript const re = /ab+/; console.log(re.test('abb')); // true ```

99. **What is the `Date` object in JavaScript?**  
    **Answer**: The `Date` object represents dates and times, providing methods for manipulation.  
    **Example**: ```javascript const date = new Date(); console.log(date.getFullYear()); // Current year ```

100. **What is the `Math` object in JavaScript?**  
    **Answer**: The `Math` object provides mathematical functions and constants.  
    **Example**: ```javascript console.log(Math.random()); // Random number between 0 and 1 ```

---

*Generated on October 18, 2025, by Grok, created by xAI.*