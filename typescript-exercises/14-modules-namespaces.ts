// Exercise 14: Modules & Namespaces
// Master TypeScript module system

// TODO: Create and export different types of exports

// Named exports
export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  // TODO: Implement user service methods
  createUser(userData: Omit<User, 'id'>): User {
    // Create user with generated ID
  }
  
  findUser(id: number): User | undefined {
    // Find user by ID
  }
}

export function validateEmail(email: string): boolean {
  // TODO: Validate email format
}

// TODO: Create a default export
export default class ApiClient {
  constructor(private baseUrl: string) {}
  
  async get<T>(endpoint: string): Promise<T> {
    // TODO: Implement GET request
  }
  
  async post<T>(endpoint: string, data: any): Promise<T> {
    // TODO: Implement POST request
  }
}

// TODO: Re-export from other modules
// export { SomeType, SomeFunction } from './other-module';
// export * from './utilities';

// TODO: Create a namespace
namespace MathUtils {
  export const PI = 3.14159;
  
  export function calculateCircleArea(radius: number): number {
    // TODO: Calculate circle area
  }
  
  export function calculateRectangleArea(width: number, height: number): number {
    // TODO: Calculate rectangle area
  }
  
  export namespace Advanced {
    export function calculateSphereVolume(radius: number): number {
      // TODO: Calculate sphere volume
    }
    
    export function calculateCylinderVolume(radius: number, height: number): number {
      // TODO: Calculate cylinder volume
    }
  }
}

// TODO: Create a module with side effects
console.log('Module loaded at:', new Date().toISOString());

// TODO: Create ambient module declaration (for external libraries)
declare module 'my-external-library' {
  export interface LibraryConfig {
    apiKey: string;
    timeout: number;
  }
  
  export function initialize(config: LibraryConfig): void;
  export function getData(): Promise<any>;
}

// TODO: Create module augmentation
declare module './user-service' {
  interface User {
    lastLogin?: Date;
  }
}

// Usage examples (these would normally be in separate files)

// TODO: Show different import styles
// import ApiClient from './api-client';                    // Default import
// import { User, UserService } from './user-service';     // Named imports
// import * as MathUtils from './math-utils';              // Namespace import
// import { User as UserType } from './types';             // Aliased import

// TODO: Dynamic imports
async function loadModule() {
  // const module = await import('./some-module');
  // return module.default;
}

// Test the namespace
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));
console.log(MathUtils.Advanced.calculateSphereVolume(3));

// TODO: Create a module that exports both value and type
export const DEFAULT_TIMEOUT = 5000;
export type TimeoutConfig = {
  timeout: number;
  retries: number;
};

// TODO: Create conditional exports based on environment
export const config = process.env.NODE_ENV === 'production' 
  ? { debug: false, logLevel: 'error' }
  : { debug: true, logLevel: 'debug' };