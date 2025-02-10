In JavaScript, functions are treated as first-class citizens. This means that functions in JavaScript are treated like any other variable. Here are the core properties of first-class functions that you can leverage in your JavaScript programming:

1. **Can be assigned to variables:** You can store a function in a variable just as you would store a string, number, or other data types.
   
2. **Can be passed as an argument to other functions:** Functions can be given to other functions as parameters, making them higher-order functions.
   
3. **Can be returned from another function:** Just as you might return strings, numbers, or other data types from a function, you can also return a function from a function.

4. **Can be stored in data structures:** You can store functions in arrays, objects, or other data structures.

Here are some examples illustrating these properties:

### Assigned to Variables
```javascript
const greet = function() {
  console.log("Hello, World!");
};
greet();  // Outputs: Hello, World!
```

### Passed as an Argument
```javascript
function sayHello() {
  return "Hello";
}

function greet(func) {
  const message = func();
  console.log(message + ", World!");
}

greet(sayHello);  // Outputs: Hello, World!
```

### Returned from Another Function
```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const timesTwo = multiplier(2);
console.log(timesTwo(5));  // Outputs: 10
```

### Stored in Data Structures
```javascript
const operations = [
  function(x) { return x + 2; },
  function(x) { return x * 2; },
  function(x) { return x - 2; }
];

console.log(operations[1](2));  // Outputs: 4 (2 * 2)
```

These characteristics provide JavaScript with powerful and flexible ways to use functions, enabling highly expressive and concise code, particularly useful in scenarios involving callbacks, asynchronous programming, and functional programming techniques.

