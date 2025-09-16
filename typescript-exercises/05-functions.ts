// Exercise 5: Functions
// Master function typing in TypeScript

// TODO: Create a function with typed parameters and return type
function add(a: /* type */, b: /* type */): /* return type */ {
  // Your implementation
}

// TODO: Create a function with optional parameters
function greet(name: /* required */, greeting?: /* optional */) {
  // Handle optional parameter
}

// TODO: Create a function with default parameters
function createUser(name: /* type */, age: /* type */ = 18, isActive: /* type */ = true) {
  // Return user object
}

// TODO: Create a function with rest parameters
function logMessages(prefix: /* type */, ...messages: /* rest type */) {
  // Log all messages with prefix
}

// TODO: Create function overloads
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: /* union type */): string {
  // Implementation that handles all cases
}

// TODO: Create a higher-order function
function createMultiplier(factor: /* type */) {
  return function(value: /* type */): /* type */ {
    // Return value multiplied by factor
  };
}

// TODO: Create a function that takes a callback
function processArray<T>(
  array: /* array type */,
  callback: /* callback function type */
): /* return type */ {
  // Process array using callback
}

// TODO: Create arrow function with explicit types
const multiply = (a: /* type */, b: /* type */): /* type */ => {
  // Implementation
};

// TODO: Create a function with object parameter destructuring
function updateProfile({
  name,
  age,
  email
}: {
  /* define parameter object type */
}) {
  // Update profile logic
}

// TODO: Create a function that returns different types based on parameter
function getValue(key: "name"): string;
function getValue(key: "age"): number;
function getValue(key: "isActive"): boolean;
function getValue(key: /* union type */): /* union return type */ {
  // Implementation
}

// TODO: Create async function with proper typing
async function fetchUser(id: /* type */): Promise</* type */> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(/* user object */);
    }, 1000);
  });
}

// TODO: Create a function with this parameter
interface Counter {
  count: number;
  increment(this: Counter): void;
}

// Test your functions
console.log(add(5, 3));
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
console.log(createUser("Charlie"));
logMessages("INFO:", "Starting app", "Loading config", "Ready");
console.log(format("hello"));
console.log(format(42));

const double = createMultiplier(2);
console.log(double(5));

const squared = processArray([1, 2, 3, 4], (x) => x * x);
console.log(squared);