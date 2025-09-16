// Exercise 6: Union & Intersection Types
// Master combining types

// TODO: Create basic union types
type StringOrNumber = // string | number
type Status = // "loading" | "success" | "error"
type Theme = // "light" | "dark" | "auto"

// TODO: Create intersection types
type User = {
  id: number;
  name: string;
};

type Permissions = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

type UserWithPermissions = // User & Permissions

// TODO: Create a function that handles union types
function processId(id: /* string | number */) {
  // Handle both string and number IDs
  // Use type guards (typeof)
}

// TODO: Create discriminated unions
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = // Union of all shapes

// TODO: Create a function that uses discriminated unions
function calculateArea(shape: Shape): number {
  // Use switch on shape.kind
  // Calculate area for each shape type
}

// TODO: Create complex union types
type ApiResponse<T> = 
  | { success: true; data: T; timestamp: Date }
  | { success: false; error: string; code: number };

// TODO: Create a function that handles complex unions
function handleApiResponse<T>(response: ApiResponse<T>) {
  // Handle both success and error cases
  // Use type guards on success property
}

// TODO: Create intersection of function types
type Logger = (message: string) => void;
type Formatter = (data: any) => string;
type FormattedLogger = // Logger & Formatter - this won't work as expected

// Better approach - intersection of objects with function properties
type LoggerObj = { log: (message: string) => void };
type FormatterObj = { format: (data: any) => string };
type LoggerWithFormatter = // LoggerObj & FormatterObj

// TODO: Create union with null/undefined
type MaybeUser = // User | null | undefined
type OptionalString = // string | undefined

// TODO: Create a function with union return types
function findUser(id: number): /* User | null */ {
  // Return user if found, null if not found
}

// TODO: Create type guards for custom types
function isUser(obj: any): obj is User {
  // Check if obj has User properties
}

function isCircle(shape: Shape): shape is Circle {
  // Check if shape is a circle
}

// TODO: Create mapped types with unions
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type UserUpdate = // Optional<User>

// Test your implementations
console.log(processId(123));
console.log(processId("ABC123"));

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 6 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));

const successResponse: ApiResponse<string> = {
  success: true,
  data: "Hello World",
  timestamp: new Date()
};

const errorResponse: ApiResponse<string> = {
  success: false,
  error: "Not found",
  code: 404
};

handleApiResponse(successResponse);
handleApiResponse(errorResponse);