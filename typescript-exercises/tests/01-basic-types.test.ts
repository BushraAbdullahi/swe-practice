// Test file for 01-basic-types.ts
// Write tests to verify your implementations

// TODO: Import your functions from the main file
import { createGreeting, calculateTotal, formatId, calculateAverage } from '../01-basic-types';

describe('Basic Types Tests', () => {
  
  describe('createGreeting', () => {
    test('should create greeting with name and age', () => {
      // Test the createGreeting function
        expect(createGreeting("Alice", 25)).toBe("Hello, my name is Alice and I'm 25 years old");
    });
    
    test('should handle different names and ages', () => {
      // Add more test cases
    });
  });
  
  describe('calculateTotal', () => {
    test('should calculate total with tax', () => {
      // Test the calculateTotal function
      // expect(calculateTotal(100, 0.08)).toBe(108);
    });
    
    test('should handle zero tax', () => {
      // Test with zero tax
    });
    
    test('should handle decimal prices', () => {
      // Test with decimal values
    });
  });
  
  describe('formatId', () => {
    test('should format string ID', () => {
      // Test with string ID
      // expect(formatId("ABC123")).toBe("ID: ABC123");
    });
    
    test('should format number ID', () => {
      // Test with number ID
      // expect(formatId(123)).toBe("ID: 123");
    });
  });
  
  describe('calculateAverage', () => {
    test('should calculate average of numbers', () => {
      // Test with array of numbers
      // expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    });
    
    test('should handle empty array', () => {
      // Test with empty array
      // expect(calculateAverage([])).toBe("empty array");
    });
    
    test('should handle single number', () => {
      // Test with single number array
    });
    
    test('should handle decimal results', () => {
      // Test that returns decimal average
    });
  });
  
});