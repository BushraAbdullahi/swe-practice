// Exercise 2: Primitive Types
// Master all TypeScript primitive types

// TODO: Create variables with explicit types for each primitive
let age: number = 25;// number
let userName: string = "b-lla97";// string
let isActive: boolean = true;// boolean
let data: any = [2,3,4];// any
let value: unknown = [];
let id: bigint = 234313421n;// bigint
let key: symbol = Symbol("myKey");// symbol

// TODO: Create a function that demonstrates type inference
function inferTypes() {
  let autoNumber = 42; // What type is this?
  let autoString = "hello"; // What type is this?
  let autoBool = true; // What type is this?
  
  // Return an object showing the inferred types
  return {
    // Your code here
  };
}

// TODO: Create a function that handles unknown type safely
function processUnknown(value: unknown) {
  // Use type guards to safely work with unknown
  // Handle string, number, boolean cases
}

// TODO: Create a function that never returns (never type)
function throwError(message: string): never {
  // Your code here
}

// TODO: Create variables that can be null or undefined
let nullableString: // string or null
let optionalNumber: // number or undefined
let nullOrUndefined: // null or undefined

// TODO: Demonstrate the difference between null and undefined
function compareNullUndefined() {
  // Show when to use null vs undefined
  // Return an explanation object
}

// Test your code
console.log(inferTypes());
processUnknown("hello");
processUnknown(42);
processUnknown(true);
console.log(compareNullUndefined());