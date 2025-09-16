// Exercise 9: Type Guards
// Master runtime type checking

// TODO: Create basic type guards using typeof
function isString(value: unknown): value is string {
  // Check if value is string
}

function isNumber(value: unknown): value is number {
  // Check if value is number
}

// TODO: Create type guards using instanceof
class Dog {
  constructor(public name: string) {}
  bark() { console.log("Woof!"); }
}

class Cat {
  constructor(public name: string) {}
  meow() { console.log("Meow!"); }
}

function isDog(animal: Dog | Cat): animal is Dog {
  // Check if animal is Dog using instanceof
}

// TODO: Create custom type guards for interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin {
  id: number;
  name: string;
  email: string;
  permissions: string[];
}

function isUser(obj: any): obj is User {
  // Check if obj has User properties
}

function isAdmin(obj: any): obj is Admin {
  // Check if obj has Admin properties (including permissions)
}

// TODO: Create type guards for union types
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function isCircle(shape: Shape): shape is Extract<Shape, { kind: "circle" }> {
  // Check if shape is circle
}

function isRectangle(shape: Shape): shape is Extract<Shape, { kind: "rectangle" }> {
  // Check if shape is rectangle
}

// TODO: Create a function that uses multiple type guards
function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(`String: ${value.toUpperCase()}`);
  } else if (isNumber(value)) {
    // TypeScript knows value is number here
    console.log(`Number: ${value.toFixed(2)}`);
  } else {
    console.log("Unknown type");
  }
}

// TODO: Create type guards for arrays
function isStringArray(value: unknown): value is string[] {
  // Check if value is array of strings
}

function isNumberArray(value: unknown): value is number[] {
  // Check if value is array of numbers
}

// TODO: Create type guards with generics
function isArrayOf<T>(
  value: unknown,
  guard: (item: unknown) => item is T
): value is T[] {
  // Check if value is array and all items pass the guard
}

// TODO: Create assertion functions (alternative to type guards)
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected string");
  }
}

function assertIsNumber(value: unknown): asserts value is number {
  // Throw error if value is not number
}

// TODO: Create type guards for nullable types
function isNotNull<T>(value: T | null): value is T {
  // Check if value is not null
}

function isNotUndefined<T>(value: T | undefined): value is T {
  // Check if value is not undefined
}

// TODO: Create a function that handles API responses
type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function isSuccessResponse<T>(
  response: ApiResponse<T>
): response is Extract<ApiResponse<T>, { success: true }> {
  // Check if response is successful
}

function handleApiResponse<T>(response: ApiResponse<T>) {
  if (isSuccessResponse(response)) {
    // TypeScript knows response.data exists
    console.log("Success:", response.data);
  } else {
    // TypeScript knows response.error exists
    console.log("Error:", response.error);
  }
}

// TODO: Create type guards for complex nested objects
interface NestedData {
  user: {
    profile: {
      name: string;
      age: number;
    };
  };
}

function hasNestedUserProfile(obj: any): obj is NestedData {
  // Check deeply nested structure
}

// Test your implementations
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(isDog(dog)); // true
console.log(isDog(cat)); // false

processValue("hello");
processValue(42);
processValue(true);

const userObj = { id: 1, name: "Alice", email: "alice@example.com" };
const adminObj = { id: 2, name: "Bob", email: "bob@example.com", permissions: ["read", "write"] };

console.log(isUser(userObj)); // true
console.log(isAdmin(adminObj)); // true

const stringArray = ["a", "b", "c"];
const mixedArray = ["a", 1, "c"];

console.log(isStringArray(stringArray)); // true
console.log(isStringArray(mixedArray)); // false

const successResponse: ApiResponse<string> = { success: true, data: "Hello" };
const errorResponse: ApiResponse<string> = { success: false, error: "Not found" };

handleApiResponse(successResponse);
handleApiResponse(errorResponse);