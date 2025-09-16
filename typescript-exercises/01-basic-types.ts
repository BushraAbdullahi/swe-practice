// @ts-nocheck
// Exercise 1: Basic Types
// Fix the type annotations and complete the TODOs

// TODO: Add proper type annotations to these variables

let basicUserName: string = "Alice";
let basicUserAge: number = 25;
let basicIsActive: boolean = true;
let basicScores: number[] = [95, 87, 92];
let basicUserInfo: any = null;

// TODO: Create a function that takes a name (string) and age (number) 
// and returns a greeting string
export function createGreeting(name: string, age: number): string {
  // Your code here
    return `Hello, my name is ${name} and I'm ${age} years old`
}

// TODO: Fix the parameter and return types
export function calculateTotal(price: number, tax: number): number {
  return price + (price * tax);
}

// TODO: Create a function that accepts either a string or number ID
// and returns a formatted string
export function formatId(id: string | number): string {
  // Your code here
    return `ID: ${id}`
}

// TODO: Define the shape of this object with proper types
let basicProduct: {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags: string[];
} = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    inStock: true,
    tags: ["electronics", "computers"]
};

// Test your functions here:
console.log(createGreeting("Bob", 30));
console.log(calculateTotal(100, 0.08));
console.log(formatId(123));
console.log(formatId("ABC123"));
console.log(calculateAverage([3,4,2,4,5]));
console.log(calculateAverage([]));

// CHALLENGE: Create a function that takes an array of numbers
// and returns the average, but handles empty arrays safely
export function calculateAverage(numbers: number[]): number | string{
  // Your code here
    if(numbers.length == 0){
        return "empty array"
    }
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total/numbers.length
}