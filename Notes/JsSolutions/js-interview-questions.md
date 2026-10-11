## JavaScript Interview Questions & Answers


#### 1. What is JavaScript?
*Answer:* JavaScript is a high-level, dynamic, and interpreted programming language used to make web pages interactive. It runs on the client side in the browser and can manipulate HTML and CSS, making web pages dynamic.

---


#### 1. What are JavaScript Data Types?
*Answer:*  
JavaScript has 7 primitive data types:  
- *String*: Represents textual data.  
- *Number*: Represents both integer and floating-point numbers.  
- *Boolean*: Represents `true` or `false`.  
- *Undefined*: Represents a variable that has been declared but not assigned a value.  
- *Null*: Represents the intentional absence of any value.  
- *Symbol*: Represents a unique and immutable value.  
- *BigInt*: Represents integers larger than `Number.MAX_SAFE_INTEGER`.

---

#### 2. What is the difference between `undefined` and `null`?
*Answer:*  
- `undefined` is a variable that has been declared but hasn't been assigned any value.  
- `null` is a special value that explicitly represents no value or an empty object reference.

---

#### 3. What is the purpose of the `this` keyword in JavaScript?
*Answer:*  
`this` refers to the current context in which the code is executed. It can refer to different things depending on how a function is called (e.g., in a method, it refers to the object, in a global scope it refers to the global object).

```javascript

const person = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};
person.greet(); // John

```
---

#### Note :- Why do we use the this keyword in JavaScript? And What is the importance of this keyword?

*Answer:*

The this keyword is used to access the current context in JavaScript, and it is used in a few different ways:

- We use this to refer to the context or object in which a method or function is invoked. It helps us work with properties and methods of an object.
- We use this to access the global object in a non-strict mode environment. In strict mode, this is undefined.
- The this keyword is important because it allows us to reference the current object, making our code dynamic and flexible.

---

#### Note :- How does the this keyword work in JavaScript?
*Answer:*
The value of this in JavaScript depends on the context in which the function is invoked. The context could be:

- Global Context (outside any function or object)
- Method Context (when the function is invoked as a method of an object)
- Constructor Function Context (when the function is used as a constructor with the new keyword)

#### 1. Global Context
When this is used in the global scope (outside of any function or object), it refers to the global object. In a browser environment, this would be the window object.

```javascript
console.log(this);  // In a browser, this will log the `window` object
```
#### 2. Method Context
When a function is used as a method of an object, this refers to the object that the method is a part of.

```javascript
const person = {
  name: 'John',
  greet: function() {
    console.log(this.name);  // `this` refers to the person object
  }
};

person.greet();  // Output: John
```

*Explanation :*
Here, this refers to the person object because the greet function is called as a method of person.

#### 3. Constructor Function Context
When a function is used as a constructor (i.e., invoked with the new keyword), this refers to the new object being created by that constructor function.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 30);
console.log(john.name);  // Output: John
console.log(john.age);   // Output: 30
```

*Explanation :* In this case, this inside the Person constructor refers to the new object (john) being created.

#### 4. this in Arrow Functions
Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical scope where they were defined. This is different from regular functions, where this is dynamically determined by how the function is called.

```javascript
const person = {
  name: 'John',
  greet: function() {
    setTimeout(() => {
      console.log(this.name);  // `this` refers to the `person` object due to lexical scoping of arrow functions
    }, 1000);
  }
};

person.greet();  // Output: John
```

*Explanation :* Here, the arrow function inside setTimeout inherits this from the greet method, which refers to the person object.

#### 5. this with call, apply, and bind
You can manually set the value of this using call(), apply(), or bind().

- call(): Immediately invokes the function with a specified this context and arguments.
- apply(): Similar to call(), but the arguments are passed as an array.
- bind(): Returns a new function with a specified this context.

```javascript

function greet(city, country) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}, ${country}.`);
}

const person = { name: 'John' };

greet.call(person, 'Paris', 'France');  // Output: Hello, my name is John, I live in Paris, France.
greet.apply(person, ['Paris', 'France']);  // Output: Hello, my name is John, I live in Paris, France.

const boundGreet = greet.bind(person);
boundGreet('Paris', 'France');  // Output: Hello, my name is John, I live in Paris, France.

```

#### 4. What is the difference between `let`, `const`, and `var`?
*Answer:*  
- `var`: Function-scoped or globally scoped. Can be re-assigned.  
- `let`: Block-scoped, and can be re-assigned.  
- `const`: Block-scoped, but cannot be re-assigned once initialized.

---

#### 5. What is hoisting in JavaScript?
*Answer:*  
Hoisting refers to JavaScript’s behavior of moving variable and function declarations to the top of their respective scopes before code execution.

---

#### 6. What is the difference between `==` and `===`?
*Answer:*  
- `==`: Compares values for equality, but performs type coercion.  
- `===`: Compares both values and types, without type coercion.

---

#### 7. What is the event loop in JavaScript?
*Answer:*  
The event loop is responsible for executing code, collecting and processing events, and executing queued sub-tasks in JavaScript. It allows asynchronous operations to be handled in a non-blocking manner.

---

#### 8. What are closures in JavaScript?
*Answer:*  
A closure is a function that remembers its lexical scope even when the function is executed outside of that scope. It allows functions to access variables from an outer function even after the outer function has completed execution.

*Example*:
   ```javascript
   function outer() {
     let count = 0;
     return function inner() {
       count++;
       console.log(count);
     };
   }
   const counter = outer();
   counter(); // 1
   counter(); // 2
   ```
*Explanation:* In this example, the inner function forms a closure, remembering the count variable from its lexical scope (outer function) even after the outer function has executed.

---

#### 9. What is a promise in JavaScript?
*Answer:*  
A `Promise` is an object representing the eventual completion (or failure) of an asynchronous operation. It allows handling asynchronous operations in a more manageable and cleaner way than using callbacks.

*Example*:
   ```javascript
    const promise = new Promise((resolve, reject) => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    });

    promise.then((result) => console.log(result)).catch((error) => console.log(error));

   ```
---

#### Note Questions :- What are all and race methods in Promises?
*Answer*

- `Promise.all()`: Takes an array of promises and resolves when all promises resolve or rejects on the first rejection.
- `Promise.race()`: Resolves or rejects as soon as one promise in an array resolves or rejects.

*Example*:
   ```javascript

    const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'first'));
    const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'second'));

    Promise.all([promise1, promise2]).then(results => console.log(results)); // ["first", "second"]
    Promise.race([promise1, promise2]).then(result => console.log(result)); // "second"

   ```

---

#### 10. What is the difference between `call()`, `apply()`, and `bind()` in JavaScript?
*Answer:*  
- `call()`: Invokes a function with a specific `this` context and arguments passed individually.  
- `apply()`: Similar to `call()`, but arguments are passed as an array.  
- `bind()`: Returns a new function that, when invoked, has `this` set to a specific value.

*Example*:
  ```javascript

    function greet(city, country) {
      console.log(`Hello, my name is ${this.name}, I live in ${city}, ${country}.`);
    }

    const person = { name: 'John' };

    greet.call(person, 'Paris', 'France'); // Hello, my name is John, I live in Paris, France.
    greet.apply(person, ['Paris', 'France']); // Hello, my name is John, I live in Paris, France.
    const boundGreet = greet.bind(person);
    boundGreet('Paris', 'France'); // Hello, my name is John, I live in Paris, France.
  ```

---

#### 11. What are arrow functions in JavaScript?
*Answer:*  
Arrow functions provide a shorter syntax for writing functions. They also inherit `this` from the surrounding scope. Arrow functions do not have their own `this` context.

---

#### 12. What is a higher-order function in JavaScript?
*Answer:*  
A higher-order function is a function that takes one or more functions as arguments, returns a function, or both.

---

#### 13. What is the `Map` object in JavaScript?
*Answer:*  
`Map` is an object that holds key-value pairs where keys can be any type, unlike objects where keys are typically strings or symbols. The insertion order of keys is maintained.


```javascript
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // John
```

---

#### 14. What is a `Set` object in JavaScript?
*Answer:*  
A `Set` is an object that stores unique values of any type. It does not allow duplicate values.

```javascript
const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}
```
---

#### 15. What are the differences between `Map` and `Object` in JavaScript?
*Answer:*  
- `Map`: Keys can be any type (not just strings or symbols), and keys are ordered.  
- `Object`: Keys are always strings or symbols, and the order of keys is not guaranteed.

---

#### 16. What is the `this` keyword in JavaScript?
*Answer:*  
The `this` keyword in JavaScript refers to the current execution context, which could vary depending on how a function is called.

---

#### 17. What is a callback function in JavaScript?
*Answer:*  
A callback function is a function that is passed into another function as an argument and is executed after the completion of an operation.

---

#### 18. What are JavaScript modules?
*Answer:*  
JavaScript modules allow splitting code into smaller, reusable pieces. `import` and `export` are used to bring modules into the current scope or make them available for other parts of the application.

---

#### 19. What is destructuring in JavaScript?
*Answer:*  
Destructuring is a feature in JavaScript that allows unpacking values from arrays or properties from objects into distinct variables.

---

#### 20. What is the spread operator in JavaScript?
*Answer:*  
The spread operator (`...`) is used to expand elements of an iterable (like an array or object) into individual elements or properties.

---

#### 21. What is the rest parameter in JavaScript?
*Answer:*  
The rest parameter (`...`) is used to collect all remaining arguments of a function into an array.

---

#### 22. What is the `typeof` operator in JavaScript?
*Answer:*  
The `typeof` operator is used to determine the data type of a given value. It returns a string that indicates the type of the operand.

---

#### 23. What is the `instanceof` operator in JavaScript?
*Answer:*  
The `instanceof` operator checks if an object is an instance of a particular class or constructor function.

---

#### 24. What are template literals in JavaScript?
*Answer:*  
Template literals allow embedding expressions inside strings using backticks (`` ` ``) and `${}` syntax.

---

#### 25. What is an IIFE (Immediately Invoked Function Expression)?
*Answer:*  
An IIFE is a function that is defined and executed immediately after its creation.

---

#### 26. What is the `new` keyword in JavaScript?
*Answer:*  
The `new` keyword is used to create an instance of a class or a function constructor.

---

#### 27. What is a promise chain in JavaScript?
*Answer:*  
A promise chain is a sequence of promises where each promise resolves or rejects the next one in the chain.

---

#### 28. What is async/await in JavaScript?
*Answer:*  
`async/await` is a way to handle asynchronous code in a more synchronous fashion, making it easier to read and understand.

---

#### 29. What is the difference between `setTimeout()` and `setInterval()` in JavaScript?
*Answer:*  
- `setTimeout()`: Executes a function once after a specified delay.  
- `setInterval()`: Repeatedly executes a function at a fixed interval.

---

#### 30. What is a `try...catch` block in JavaScript?
*Answer:*  
`try...catch` is used to handle exceptions. The code in the `try` block is executed, and if an error occurs, the `catch` block is executed.

```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error: ", error);
}

```

---

#### 31. What is the `finally` block in JavaScript?
*Answer:*  
The `finally` block executes after the `try` and `catch` blocks, regardless of whether an error occurred or not.

---

#### 32. What is the `eval()` function in JavaScript?
*Answer:*  
The `eval()` function evaluates a string of JavaScript code and executes it. However, it is generally avoided due to security risks.

```javascript
eval('console.log("Hello World")'); // Hello World
```
---

#### 33. What is the purpose of `localStorage` in JavaScript?
*Answer:*  
`localStorage` provides a way to store data persistently on the user's browser. Data stored in `localStorage` is available even after the page is reloaded.

*Example*
```JavaScript
localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name')); // John
localStorage.removeItem('name');

```
---

#### 34. What is `sessionStorage` in JavaScript?
*Answer:*  
`sessionStorage` is similar to `localStorage`, but data is only available during the current session (until the browser tab is closed).

*Example*
```JavaScript
sessionStorage.setItem('token', 'abc123');
console.log(sessionStorage.getItem('token')); // abc123
sessionStorage.removeItem('token');
```
---

#### Note Questions :- What is the difference between localStorage and sessionStorage?
*Answer:* 

- `localStorage` is persistent, meaning it stores data even after the user closes the browser.
- `sessionStorage` is temporary, meaning it stores data until the user closes the browser tab.

---

#### Extra Questions :- What is a Cookie in JavaScript?
*Answer*

- A cookie is a small piece of data sent from a website and stored in the user's browser. Cookies are used for things like session management, tracking user behavior, and storing preferences.

*Example*
```JavaScript
document.cookie = "user=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
console.log(document.cookie); // user=John
```
---

#### 35. What is the difference between `null` and `undefined` in JavaScript?
*Answer:*  
- `undefined` means a variable has been declared but has not yet been assigned a value.  
- `null` represents the absence of any value and is explicitly assigned to variables.

---

#### 36. How can you create a deep copy of an object in JavaScript?
*Answer:*  
A deep copy can be made using methods like `JSON.parse(JSON.stringify(obj))`, or using libraries such as `lodash` (`_.cloneDeep()`).

---

#### 37. What is the `set` and `map` data structures in JavaScript?
*Answer:*  
- `Set`: Stores unique values.
- `Map`: Stores key-value pairs where keys can be of any data type.

---

#### 38. What is an event handler in JavaScript?
*Answer:*  
An event handler is a function that is triggered in response to a specific event, such as a click or a key press.

---

#### 39. What is `bind()` method in JavaScript?
*Answer:*  
The `bind()` method creates a new function that, when called, has its `this` value set to the provided value, with a given sequence of arguments.

---

#### 40. What is the `globalThis` object in JavaScript?
*Answer:*  
`globalThis` is a standard global object in JavaScript that provides a consistent reference to the global object across different environments (`window` in browsers, `global` in Node.js).

---

#### 41. What is the new keyword in JavaScript?
*Answer:*

The `new` keyword is used to create a new instance of a class or a function constructor. It is used to call a constructor function and return a new object. Object is empty by default. 

```javascript
  function Person(name) {
    this.name = name;
  }

  const john = new Person('John');
  console.log(john.name); // John

```
---

#### 42 What is the difference between a pure function and an impure function?
*Answer:*  
- A pure function is a function that always returns the same output for the same input.  
- An impure function is a function that may have side effects, such as modifying global variables or accessing external resources.

A pure function is a function that always produces the same output for the same input and does not cause side effects. An impure function, on the other hand, may produce different outputs or cause side effects.

*Example Pure Function*
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // 8
console.log(add(3, 5)); // 8 (same result every time)

console.log(add(1, 1)); // 2
console.log(add(1, 1)); // 2 (same result every time)

```
*Explanation :* Here, the add function is a pure function because it always returns the same output for the same input.

*Example Pure Function*
```javascript
let count = 0;

function addWithSideEffect(a, b) {
  count++;
  return a + b;
}

console.log(addWithSideEffect(3, 5)); // 8
console.log(addWithSideEffect(3, 5)); // 8, but count has increased to 2
```

*Explanation :* The pure function `add` returns the sum of the two arguments, while the impure function `addWithSideEffect` has a side effect of incrementing a counter variable `count` after each call.

- In the second call to addWithSideEffect, the output is still 8, but the external state (count) is altered by the function, which makes this function impure.

---

#### 43 What is Event Delegation in JavaScript?
*Answer:*  
Event delegation is a technique in JavaScript where a parent element is responsible for handling events for its child elements. This technique takes advantage of event propagation (also known as bubbling) to delegate the event handling to a common ancestor. Instead of attaching event listeners to each individual child element, you attach a single event listener to a parent, and that parent listens for events triggered by its child elements.

*Why Use Event Delegation?*
- *Performance:* Attaching an event listener to each individual child element can be inefficient, especially when there are many child elements. By using event delegation, you only need to attach a single event listener to the parent, which improves performance.
- *Memory Efficiency:* Instead of using up memory for multiple event listeners, you save memory by having just one listener attached to the parent.
- *Dynamic Content Handling:* Event delegation also allows you to handle events for dynamically added child elements. When elements are added to the DOM after the page has loaded (e.g., via JavaScript), you don’t need to attach new event listeners. The parent already handles all the events for its child elements, including the new ones.

*Example:*

```javascript
document.querySelector('ul').addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});
```

*How Does Event Delegation Work?*
In JavaScript, when an event occurs on an element, the event "bubbles up" from the target element to its ancestors. Event delegation takes advantage of this bubbling process.

- You add an event listener to a parent element.
- The event bubbles up from the child element to the parent element.
- The parent element checks if the event was triggered on one of its child elements (using event.target).
- If the event is relevant (e.g., it was triggered on a child element), the parent element executes the appropriate callback.


*key Concepts:*
- *Event.target:* This refers to the element that triggered the event. For example, in a click event, it will be the element you clicked.
- *Event delegation:* The act of using a parent element to handle events for child elements.
- *Event bubbling:* The process where an event starts at the target element and bubbles up to its ancestors (parent -> grandparent -> body -> etc.).