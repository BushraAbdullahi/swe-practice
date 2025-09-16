// Exercise 4: Type Aliases vs Interfaces
// Learn when to use each and their differences

// TODO: Create a type alias for a user
type User = {
  // Define user properties
};

// TODO: Create an interface for a product
interface Product {
  // Define product properties
}

// TODO: Extend the interface (interfaces can be extended)
interface ExtendedProduct extends Product {
  // Add additional properties
}

// TODO: Create intersection types with type aliases
type UserWithPermissions = // User & some permissions object

// TODO: Create union types (only possible with type aliases)
type Status = // "pending" | "approved" | "rejected"
type ID = // string | number

// TODO: Demonstrate interface merging (declaration merging)
interface MergeableInterface {
  prop1: string;
}

interface MergeableInterface {
  prop2: number;
}
// Now MergeableInterface has both prop1 and prop2

// TODO: Create a function type using type alias
type Calculator = // function that takes two numbers and returns number

// TODO: Create a function type using interface
interface ICalculator {
  // Define call signature
}

// TODO: Create complex type aliases
type ApiResponse<T> = // Success response with data OR error response
type EventHandler<T> = // Function that takes event of type T and returns void

// TODO: Create a class that implements an interface
class UserService implements /* interface */ {
  // Implement required methods
}

// TODO: Demonstrate when you can't use interface (union types)
type StringOrNumber = // This can only be done with type alias
type Theme = // "light" | "dark" | "auto"

// TODO: Create mapped types (advanced)
type Partial<T> = // Make all properties optional
type Required<T> = // Make all properties required

// Test your implementations
const user: User = {
  // Fill in
};

const product: Product = {
  // Fill in
};

const extendedProduct: ExtendedProduct = {
  // Fill in
};

console.log(user, product, extendedProduct);