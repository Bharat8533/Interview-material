## 1. Core Fundamentals

### What is React?
React is a JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture. It allows developers to create large web applications that can change data without reloading the page.

### What are the key features of React?
* **Virtual DOM:** Efficiently updates the UI.
* **Component-Based:** Reusable UI blocks.
* **JSX:** Syntax extension for HTML in JS.
* **One-way Data Binding:** Predictable data flow.
* **React Hooks:** State and lifecycle management in functional components.

### 2. Components & Data Flow

### 3. What are props in React?
Props (short for properties) are read-only inputs passed from a parent component to a child component to customize its behavior or rendering.

### 4. What is the virtual DOM?
The virtual DOM is an in-memory representation of the real DOM. React uses it to optimize updates by comparing changes (Diffing) and updating only the necessary parts of the actual DOM (Reconciliation).

### 5. How does React differ from other frameworks like Angular?
React is a **library** focused on UI components and uses a virtual DOM, whereas Angular is a **full-fledged framework** that includes two-way data binding, dependency injection, and a built-in CLI for project structure out of the box.

### 6. What is a React component?
A React component is a reusable piece of UI. It is the building block of a React application. It can be defined as a function or a class that returns JSX to describe what should appear on the screen.

### 7. What is the difference between functional and class components?
* **Functional Components:** Simple JavaScript functions that accept props as an argument and return JSX. They use **Hooks** for state and lifecycle management.
* **Class Components:** ES6 classes that extend `React.Component`. They require a `render()` method and use `this` to access props and state.

### 8. What are props in React?
Props (short for "properties") are read-only inputs passed from a parent component to a child component. They allow you to pass data and configuration down the component tree.

### 9. What is state in React?
State is a built-in object that holds data that may change over the lifetime of the component. When state changes, React re-renders the component to reflect the new data.

### 10. How do you manage state in a functional component?
State in functional components is managed using the `useState` Hook. It returns a pair: the current state value and a function that lets you update it.
```javascript
const [count, setCount] = useState(0);
```

### 11. What is the useEffect Hook?
The `useEffect` Hook handles side effects in functional components, such as data fetching, manual DOM updates, or setting up subscriptions. It runs after the render or when specific dependencies change.

### 12. What are controlled components?
Controlled components are form elements (like `<input>`, `<textarea>`) whose value is controlled by React state. Every state mutation has an associated handler function that updates the state.

### 13. What are uncontrolled components?
Uncontrolled components store their own state internally within the DOM. You access their values using a `ref` (via `useRef`) rather than writing an event handler for every state update.

### 14. What is the purpose of the useRef Hook?
`useRef` creates a mutable object that persists across renders. It is commonly used to access DOM elements directly or to store values that do not trigger a re-render when changed (like a timer ID).

### 15. What is the key prop in React?
The `key` prop is a unique identifier assigned to elements in a list. It helps React identify which items have changed, been added, or removed, which is crucial for performance during the "diffing" process.

### 16. Why is it bad to use index as a key in a list?
Using an index as a key can cause issues with component state and UI glitches if the list order changes (e.g., sorting or filtering). React uses the key to maintain the identity of the component; if the index changes but the content doesn't, React might re-render incorrectly.

### 17. What is the useCallback Hook?
`useCallback` returns a memoized version of a callback function that only changes if one of the dependencies has changed. This prevents unnecessary re-creations of functions, which helps optimize child components that rely on referential equality.

### 18. What is the useMemo Hook?
`useMemo` returns a memoized value. It recomputes the value only when one of its dependencies changes. This is used to optimize performance by avoiding expensive calculations on every render.

### 19. What is React Router?
React Router is a library for handling client-side routing in React. It enables navigation between different views or components in a single-page application without refreshing the page.

### 20. How do you pass data between components?
* **Parent to Child:** Using **props**.
* **Child to Parent:** Passing a **callback function** as a prop from parent to child.
* **Deeply Nested:** Using the **Context API** or a state management library like **Redux**.

### 21. What is the Context API?
The Context API provides a way to share values like themes or user data between components without having to explicitly pass a prop through every level of the tree (avoiding "prop drilling").

### 22. What is Redux?
Redux is a pattern and library for managing global application state using a centralized store. It makes state changes predictable by requiring an "action" to trigger a state update through a "reducer."

### 23. What are the three principles of Redux?
1.  **Single source of truth:** The entire state of your app is stored in an object tree within a single store.
2.  **State is read-only:** The only way to change the state is to emit an action.
3.  **Changes are made with pure functions:** To specify how the state tree is transformed, you write pure reducers.

### 24. What is a reducer in Redux?
A reducer is a pure function that takes the current `state` and an `action` as arguments, and returns a **new state** object. It describes *how* the state changes.

### 25. What is the difference between useState and useReducer?
* **useState:** Best for simple state (strings, booleans, simple objects).
* **useReducer:** Better for complex state logic that involves multiple sub-values or when the next state depends on the previous one.

### 26. What is the purpose of React.Fragment?
`React.Fragment` (or the short `<>...</>` syntax) allows you to group a list of children without adding extra nodes to the DOM, keeping the HTML output clean.

### 27. What are React Hooks?
Hooks are functions that let you use state and lifecycle features in functional components. They were introduced in React 16.8 to allow for better logic reuse and cleaner code compared to Class components.

### 28. What is the significance of the dependency array in useEffect?
The dependency array tells React when to skip applying an effect.
* `[]`: Runs only once (on mount).
* `[value]`: Runs when the component mounts and whenever `value` changes.
* **No array**: Runs after every single render.

### 29. How do you handle events in React?
React events are named using camelCase (e.g., `onClick`) and you pass a function as the event handler rather than a string.
```javascript
<button onClick={handleClick}>Click Me</button>
```

### 30. What is prop drilling?
Prop drilling is the process of passing data from a high-level component down to a deeply nested component through several intermediate components that do not need the data themselves. This can make code harder to maintain.

### 31. What is a higher-order component (HOC)?
An HOC is a function that takes a component and returns a new component with additional props or behavior. It is a pattern used for reusing component logic.
```javascript
const AuthenticatedComponent = withAuth(MyComponent);
```

### 32. What is the purpose of React.memo?
`React.memo` is a higher-order component that memoizes a functional component. It prevents a re-render if the props haven’t changed, which is a key performance optimization for components that render often with the same data.

### 33. How do you optimize performance in a React application?
* **Memoization:** Use `React.memo`, `useCallback`, and `useMemo`.
* **Lazy Loading:** Use `React.lazy` and `Suspense` to load code only when needed.
* **Virtualization:** Use libraries like `react-window` for long lists.
* **Production Build:** Ensure you are using the minified production version of React.
* **Avoid Anonymous Functions:** Don't define functions inside the JSX prop to prevent unnecessary re-renders.

### 34. What is code-splitting in React?
Code-splitting is a technique supported by bundlers like Webpack that "splits" your code into smaller chunks (bundles). These bundles can then be loaded on demand, reducing the initial load time of your application.

### 35. What is lazy loading in React?
Lazy loading is the practice of delaying the loading of a component until it is actually required (e.g., when a user navigates to a specific route). React provides `React.lazy()` to implement this easily.

### 36. What is the Suspense component?
`Suspense` is a built-in React component that allows you to display a fallback UI (like a loading spinner) while waiting for a lazy-loaded component or data-fetching logic to complete.

### 37. What is the difference between state and props?
* **State:** Internal, mutable data managed by the component itself.
* **Props:** External, read-only data passed from a parent to a child component.

### 38. What are synthetic events in React?
Synthetic events are React’s cross-browser wrapper around the browser’s native event system. They ensure that events behave the same way across all browsers (e.g., Chrome, Safari, Firefox).

### 39. How do you handle forms in React?
Forms are handled using **Controlled Components** (where state controls the input value) or **Uncontrolled Components** (where the DOM handles the data and React accesses it via `useRef`).

### 40. What is the useLayoutEffect Hook?
`useLayoutEffect` is identical to `useEffect`, but it fires **synchronously** after all DOM mutations. Use this when you need to measure the DOM or perform layout changes before the browser paints the screen.

### 41. What is a custom Hook?
A custom Hook is a JavaScript function whose name starts with "use" and that calls other Hooks. It allows you to extract component logic into reusable functions to keep your components clean.

### 42. How do you test React components?
React components are tested using **Jest** (the test runner) and **React Testing Library** (the tool for interacting with the DOM). Tests usually focus on how a user interacts with the UI.

### 43. What is the purpose of useContext Hook?
`useContext` allows functional components to consume values from a React Context directly, eliminating the need for a `<Context.Consumer>` wrapper.

### 44. What are React Portals?
Portals provide a way to render a child component into a DOM node that exists outside the main hierarchy of the parent component.

This is commonly used for:
* Modals and Dialog boxes.
* Tooltips and Popovers.

### 45. What is server-side rendering (SSR)?
SSR is the process of rendering React components into HTML on the server and sending that HTML to the client. This allows for faster initial loads and better SEO.


### 46. What is Next.js?
Next.js is a popular React framework that provides built-in support for SSR, Static Site Generation (SSG), and file-system based routing, making it easier to build production-ready apps.

### 47. What is the difference between CSR and SSR?
* **CSR (Client-Side Rendering):** The browser downloads a minimal HTML page and JS, then builds the UI.
* **SSR (Server-Side Rendering):** The server sends a fully rendered HTML page, which the browser then "hydrates" with JavaScript interactivity.

### 48. How do you handle errors in React components?
Errors are handled using **Error Boundaries** (special class components that catch JavaScript errors in their child component tree) or `try-catch` blocks for asynchronous code and event handlers.

### 49. What is the useImperativeHandle Hook?
`useImperativeHandle` customizes the instance value that is exposed when a parent component uses a `ref` to access a child. It is almost always used with `forwardRef`.

### 50. What is the significance of React Strict Mode?
`StrictMode` is a development-only tool that highlights potential problems in an application, such as unsafe lifecycle methods, deprecated APIs, and unexpected side effects.
