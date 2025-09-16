// Exercise 8: Enums
// Master numeric, string, and const enums

// TODO: Create a numeric enum
enum Direction {
  // Up, Down, Left, Right (auto-numbered from 0)
}

// TODO: Create a numeric enum with custom values
enum HttpStatusCode {
  // OK = 200, NotFound = 404, InternalServerError = 500
}

// TODO: Create a string enum
enum Theme {
  // Light = "light", Dark = "dark", Auto = "auto"
}

// TODO: Create a const enum (more efficient)
const enum Size {
  // Small = "sm", Medium = "md", Large = "lg"
}

// TODO: Create a mixed enum (numbers and strings)
enum LogLevel {
  // Debug = 0, Info = "info", Warn = "warn", Error = 1
}

// TODO: Create a function that uses numeric enum
function movePlayer(direction: Direction) {
  // Handle each direction
  switch (direction) {
    // Implement cases
  }
}

// TODO: Create a function that uses string enum
function applyTheme(theme: Theme) {
  // Apply the theme
  console.log(`Applying theme: ${theme}`);
}

// TODO: Create a function that works with HTTP status codes
function handleResponse(status: HttpStatusCode): string {
  // Return appropriate message based on status
}

// TODO: Create a function that uses const enum
function getButtonSize(size: Size): string {
  // Return CSS class based on size
}

// TODO: Demonstrate enum reverse mapping (numeric enums only)
function demonstrateReverseMapping() {
  // Show that Direction[0] gives "Up" and Direction["Up"] gives 0
}

// TODO: Create a function that validates enum values
function isValidTheme(value: string): value is keyof typeof Theme {
  // Check if value is a valid theme
}

// TODO: Create an enum for state management
enum LoadingState {
  // Idle, Loading, Success, Error
}

interface AppState {
  status: LoadingState;
  data?: any;
  error?: string;
}

// TODO: Create a function that transitions between states
function transitionState(currentState: LoadingState, action: string): LoadingState {
  // Handle state transitions
}

// TODO: Create computed enum values
enum FileAccess {
  // None = 0
  // Read = 1 << 1 (bit shifting)
  // Write = 1 << 2
  // Execute = 1 << 3
  // ReadWrite = Read | Write (bitwise OR)
}

// TODO: Create a function that checks file permissions
function hasPermission(userAccess: FileAccess, requiredAccess: FileAccess): boolean {
  // Use bitwise operations to check permissions
}

// TODO: Create an enum with methods (using namespace)
enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF"
}

namespace Color {
  export function toRgb(color: Color): { r: number; g: number; b: number } {
    // Convert hex color to RGB
  }
}

// Test your implementations
console.log(movePlayer(Direction.Up));
console.log(handleResponse(HttpStatusCode.OK));
console.log(handleResponse(HttpStatusCode.NotFound));

applyTheme(Theme.Dark);
console.log(getButtonSize(Size.Large));

console.log(demonstrateReverseMapping());
console.log(isValidTheme("light")); // true
console.log(isValidTheme("purple")); // false

console.log(transitionState(LoadingState.Idle, "start"));
console.log(hasPermission(FileAccess.ReadWrite, FileAccess.Read));

console.log(Color.toRgb(Color.Red));