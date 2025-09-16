// Exercise 11: Classes
// Master TypeScript class features

// TODO: Create a basic class with constructor
class User {
  // Define properties
  // Create constructor with parameters
  // Add methods
}

// TODO: Create a class with access modifiers
class BankAccount {
  // public property
  // private property
  // protected property
  // readonly property
  
  constructor(/* parameters */) {
    // Initialize properties
  }
  
  // public method
  // private method
  // protected method
}

// TODO: Create a class with parameter properties (shorthand)
class Product {
  constructor(
    // Use parameter properties to automatically create and assign
    // public id: number,
    // private _price: number,
    // readonly category: string
  ) {}
  
  // Add getter and setter for price
  get price() {
    // Return price
  }
  
  set price(value: number) {
    // Validate and set price
  }
}

// TODO: Create an abstract class
abstract class Animal {
  constructor(/* name parameter */) {
    // Initialize name
  }
  
  // Abstract method that subclasses must implement
  abstract makeSound(): string;
  
  // Concrete method that subclasses inherit
  move(): string {
    // Return movement description
  }
}

// TODO: Create classes that extend the abstract class
class Dog extends Animal {
  constructor(/* parameters */) {
    // Call super constructor
  }
  
  // Implement abstract method
  makeSound(): string {
    // Return dog sound
  }
  
  // Add dog-specific method
  wagTail(): string {
    // Return tail wagging description
  }
}

class Cat extends Animal {
  // Implement for Cat
}

// TODO: Create a class that implements interfaces
interface Flyable {
  fly(): string;
}

interface Swimmable {
  swim(): string;
}

class Duck extends Animal implements Flyable, Swimmable {
  // Implement all required methods
}

// TODO: Create a class with static members
class MathUtils {
  // Static property
  static PI = 3.14159;
  
  // Static method
  static calculateCircleArea(radius: number): number {
    // Calculate area using static PI
  }
  
  // Static factory method
  static createCalculator(): Calculator {
    // Return new Calculator instance
  }
}

class Calculator {
  // Instance methods
  add(a: number, b: number): number {
    return a + b;
  }
}

// TODO: Create a generic class
class Container<T> {
  // Private array to store items
  
  constructor() {
    // Initialize storage
  }
  
  // Add item
  add(item: T): void {
    // Add item to storage
  }
  
  // Get item by index
  get(index: number): T | undefined {
    // Return item at index
  }
  
  // Get all items
  getAll(): T[] {
    // Return copy of all items
  }
  
  // Get count
  count(): number {
    // Return number of items
  }
}

// TODO: Create a class with method overloading
class Formatter {
  format(value: string): string;
  format(value: number): string;
  format(value: Date): string;
  format(value: string | number | Date): string {
    // Implementation that handles all cases
  }
}

// TODO: Create a singleton class
class Logger {
  private static instance: Logger;
  
  private constructor() {
    // Private constructor prevents direct instantiation
  }
  
  static getInstance(): Logger {
    // Return singleton instance
  }
  
  log(message: string): void {
    // Log message with timestamp
  }
}

// TODO: Create a class with decorators (if experimentalDecorators is enabled)
// Note: This requires "experimentalDecorators": true in tsconfig.json

function logMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with args:`, args);
    return method.apply(this, args);
  };
}

class Service {
  // @logMethod
  processData(data: string): string {
    return `Processed: ${data}`;
  }
}

// TODO: Create a mixin pattern
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
    
    getTimestamp() {
      return this.timestamp;
    }
  };
}

function Serializable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    serialize() {
      return JSON.stringify(this);
    }
  };
}

// Use mixins
class BaseEntity {
  constructor(public id: number) {}
}

const TimestampedEntity = Timestamped(BaseEntity);
const SerializableTimestampedEntity = Serializable(TimestampedEntity);

// Test your implementations
const user = new User(/* parameters */);
const account = new BankAccount(/* parameters */);
const product = new Product(/* parameters */);

const dog = new Dog(/* parameters */);
const cat = new Cat(/* parameters */);
const duck = new Duck(/* parameters */);

console.log(dog.makeSound());
console.log(duck.fly());
console.log(duck.swim());

console.log(MathUtils.calculateCircleArea(5));
const calculator = MathUtils.createCalculator();
console.log(calculator.add(2, 3));

const stringContainer = new Container<string>();
stringContainer.add("hello");
stringContainer.add("world");
console.log(stringContainer.getAll());

const formatter = new Formatter();
console.log(formatter.format("hello"));
console.log(formatter.format(42));

const logger = Logger.getInstance();
logger.log("Test message");

const entity = new SerializableTimestampedEntity(1);
console.log(entity.serialize());
console.log(entity.getTimestamp());