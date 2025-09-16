// Exercise 10: Type Assertions & Casting
// Master type assertions and when to use them

// TODO: Use type assertions with DOM elements
function getDOMElements() {
  // Get elements and assert their types
  const input = document.getElementById("username"); // as HTMLInputElement
  const button = document.querySelector(".submit-btn"); // as HTMLButtonElement
  const form = document.forms[0]; // as HTMLFormElement
  
  // Use the elements with their specific types
}

// TODO: Use type assertions with unknown types
function processUnknownData(data: unknown) {
  // Assert data as specific types when you know what they are
  const userString = data; // as string
  const userObject = data; // as { name: string; age: number }
  const userArray = data; // as string[]
  
  // Process the asserted data
}

// TODO: Use angle-bracket syntax (when not in JSX)
function angleBracketAssertions(value: any) {
  // Use <Type>value syntax
  const stringValue = value; // <string>value
  const numberValue = value; // <number>value
  
  return { stringValue, numberValue };
}

// TODO: Use const assertions
function constAssertions() {
  // Create readonly arrays and objects
  const colors = ["red", "green", "blue"]; // as const
  const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
  }; // as const
  
  // Extract types from const assertions
  type Color = typeof colors[number]; // Should be "red" | "green" | "blue"
  type Config = typeof config; // Should have readonly properties
  
  return { colors, config };
}

// TODO: Use satisfies operator (TypeScript 4.9+)
interface ColorConfig {
  red: string;
  green: string;
  blue: string;
}

const colorConfig = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  // alpha: 0.5 // This should cause an error with satisfies
}; // satisfies ColorConfig

// TODO: Use non-null assertion operator (!)
function nonNullAssertions() {
  const maybeString: string | null = getString();
  
  // Assert that maybeString is not null
  const definiteString = maybeString; // Use ! operator
  
  // Use with array methods
  const items = ["a", "b", "c"];
  const firstItem = items.find(item => item === "a"); // Use ! to assert it exists
  
  return { definiteString, firstItem };
}

function getString(): string | null {
  return Math.random() > 0.5 ? "hello" : null;
}

// TODO: Use type assertions with generics
function genericAssertions<T>(value: unknown): T {
  // Assert unknown value as generic type T
  return value; // as T
}

// TODO: Use type assertions with union types
type StringOrNumber = string | number;

function narrowUnion(value: StringOrNumber) {
  // Assert specific type from union
  if (typeof value === "string") {
    const upperCase = (value); // as string - not needed here due to type guard
  } else {
    const doubled = (value); // as number - not needed here due to type guard
  }
  
  // Force assertion when you know better than TypeScript
  const forcedString = value; // as string (dangerous!)
}

// TODO: Use type assertions with interfaces
interface ApiUser {
  id: number;
  name: string;
  email: string;
}

function processApiResponse(response: any): ApiUser {
  // Assert API response as ApiUser interface
  return response; // as ApiUser
}

// TODO: Use double assertions (escape hatch)
function doubleAssertions(value: string) {
  // Sometimes you need to assert through unknown first
  const numberValue = value; // as unknown as number (dangerous!)
  
  return numberValue;
}

// TODO: Create safe assertion functions
function assertIsHTMLInputElement(element: Element): asserts element is HTMLInputElement {
  if (!(element instanceof HTMLInputElement)) {
    throw new Error("Element is not an HTMLInputElement");
  }
}

function safeGetInputElement(id: string): HTMLInputElement {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  
  assertIsHTMLInputElement(element);
  return element; // TypeScript now knows it's HTMLInputElement
}

// TODO: Use type assertions with mapped types
type PartialUser = {
  [K in keyof ApiUser]?: ApiUser[K];
};

function updateUser(user: ApiUser, updates: PartialUser): ApiUser {
  // Assert the merged result
  return { ...user, ...updates }; // as ApiUser
}

// TODO: Demonstrate when NOT to use type assertions
function badAssertions() {
  const number = 42;
  
  // BAD: This will cause runtime errors
  // const string = number as string;
  // console.log(string.toUpperCase()); // Runtime error!
  
  // GOOD: Use proper type conversion
  const string = number.toString();
  console.log(string.toUpperCase());
}

// Test your implementations
console.log(constAssertions());
console.log(nonNullAssertions());
console.log(genericAssertions<string>("hello"));
console.log(processApiResponse({ id: 1, name: "Alice", email: "alice@example.com" }));

badAssertions();