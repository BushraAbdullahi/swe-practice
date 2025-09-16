// Exercise 7: Literal Types
// Master exact value types

// TODO: Create string literal types
type Direction = // "up" | "down" | "left" | "right"
type HttpMethod = // "GET" | "POST" | "PUT" | "DELETE"
type LogLevel = // "debug" | "info" | "warn" | "error"

// TODO: Create number literal types
type DiceRoll = // 1 | 2 | 3 | 4 | 5 | 6
type HttpStatusCode = // 200 | 404 | 500

// TODO: Create boolean literal types
type IsTrue = // true
type IsFalse = // false

// TODO: Create a function that uses literal types
function move(direction: Direction) {
  // Handle each direction
  switch (direction) {
    // Implement cases
  }
}

// TODO: Create a function with literal return types
function getHttpStatus(code: HttpStatusCode): /* literal string type */ {
  // Return appropriate status message
}

// TODO: Combine literals with unions
type Size = // "small" | "medium" | "large"
type Color = // "red" | "green" | "blue"
type Variant = // Combination of Size and Color

// TODO: Create template literal types (advanced)
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvent = // EventName<"click"> should be "onClick"
type InputEvent = // EventName<"change"> should be "onChange"

// TODO: Create a configuration object with literal types
interface Config {
  environment: // "development" | "staging" | "production"
  logLevel: LogLevel;
  theme: // "light" | "dark"
  language: // "en" | "es" | "fr" | "de"
}

// TODO: Create a function that validates literal types
function isValidDirection(value: string): value is Direction {
  // Check if value is a valid direction
}

// TODO: Create const assertions to create literal types
const themes = // ["light", "dark", "auto"] as const
type ThemeType = // Extract type from themes array

const statusCodes = {
  // Create object with const assertion
} as const;

// TODO: Create a function with literal parameter constraints
function setLogLevel(level: LogLevel) {
  // Set the log level
  console.log(`Log level set to: ${level}`);
}

// TODO: Create branded types using literals
type UserId = number & { readonly brand: unique symbol };
type ProductId = number & { readonly brand: unique symbol };

function createUserId(id: number): UserId {
  // Return branded UserId
}

// TODO: Create a state machine using literal types
type State = "idle" | "loading" | "success" | "error";
type Action = "start" | "success" | "error" | "reset";

function reducer(state: State, action: Action): State {
  // Implement state transitions
}

// Test your implementations
console.log(move("up"));
console.log(getHttpStatus(200));
console.log(getHttpStatus(404));

console.log(isValidDirection("up")); // true
console.log(isValidDirection("diagonal")); // false

setLogLevel("info");
setLogLevel("debug");

console.log(reducer("idle", "start"));
console.log(reducer("loading", "success"));