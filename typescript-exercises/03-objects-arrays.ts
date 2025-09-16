// Exercise 3: Objects, Arrays, and Tuples
// Master complex data structures

// TODO: Create an object with explicit type annotation
let user: {
  // Define the shape here
} = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  isActive: true
};

// TODO: Create different array type annotations
let numbers: // array of numbers
let strings: // array of strings using Array<T> syntax
let mixed: // array that can contain strings OR numbers

// TODO: Create tuple types
let coordinate: // tuple of [number, number]
let userInfo: // tuple of [string, number, boolean] for [name, age, isActive]
let response: // tuple of [number, string] for [statusCode, message]

// TODO: Create a function that works with object parameters
function updateUser(user: /* object type */, updates: /* partial object type */) {
  // Merge user with updates and return new user
}

// TODO: Create a function that returns different array types
function createArrays() {
  return {
    numbers: // return number array
    strings: // return string array
    tuples: // return array of tuples
  };
}

// TODO: Create nested object types
let company: {
  // Define nested structure for:
  // - name: string
  // - employees: array of objects with {name: string, role: string, salary: number}
  // - address: object with {street: string, city: string, zipCode: string}
} = {
  // Fill in the data
};

// TODO: Create a function that destructures tuples
function processTuple(data: [string, number, boolean]) {
  // Destructure the tuple and return an object with named properties
}

// TODO: Create readonly arrays and objects
let readonlyNumbers: // readonly number array
let readonlyUser: // readonly user object

// Test your code
console.log(updateUser(user, { name: "Bob" }));
console.log(createArrays());
console.log(processTuple(["Alice", 25, true]));
console.log(company);