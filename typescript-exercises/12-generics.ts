// Exercise 12: Generics
// Master generic programming in TypeScript

// TODO: Create basic generic functions
function identity<T>(arg: T): T {
  // Return the argument as-is
}

function getFirst<T>(array: T[]): T | undefined {
  // Return first element or undefined
}

function getLast<T>(array: T[]): T | undefined {
  // Return last element or undefined
}

// TODO: Create generic functions with multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  // Return tuple of both values
}

function merge<T, U>(obj1: T, obj2: U): T & U {
  // Merge two objects
}

// TODO: Create generic interfaces
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

interface Repository<T> {
  findById(id: string): T | undefined;
  save(entity: T): void;
  delete(id: string): boolean;
  findAll(): T[];
}

// TODO: Create generic classes
class Box<T> {
  // Implement Container interface
}

class Cache<K, V> {
  // Private storage
  
  set(key: K, value: V): void {
    // Store key-value pair
  }
  
  get(key: K): V | undefined {
    // Retrieve value by key
  }
  
  has(key: K): boolean {
    // Check if key exists
  }
  
  clear(): void {
    // Clear all entries
  }
}

// TODO: Create generic constraints
interface HasId {
  id: number;
}

interface HasName {
  name: string;
}

function updateEntity<T extends HasId>(entity: T, updates: Partial<T>): T {
  // Update entity with partial data
}

function findByName<T extends HasName>(items: T[], name: string): T | undefined {
  // Find item by name
}

// TODO: Create keyof constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // Get property value by key
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  // Set property value by key
}

// TODO: Create conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// TODO: Create mapped types with generics
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

// TODO: Create utility functions with generics
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  // Pick specified properties from object
}

function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  // Omit specified properties from object
}

// TODO: Create generic factory functions
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

function createRepository<T extends HasId>(): Repository<T> {
  // Create and return repository implementation
  const storage: T[] = [];
  
  return {
    findById(id: string): T | undefined {
      // Implementation
    },
    save(entity: T): void {
      // Implementation
    },
    delete(id: string): boolean {
      // Implementation
    },
    findAll(): T[] {
      // Implementation
    }
  };
}

// TODO: Create generic async functions
async function fetchData<T>(url: string): Promise<T> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({} as T);
    }, 1000);
  });
}

async function processAsync<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>
): Promise<R[]> {
  // Process array items asynchronously
}

// TODO: Create generic event system
interface EventMap {
  'user:created': User;
  'user:updated': User;
  'user:deleted': { id: number };
}

class EventEmitter<T extends Record<string, any>> {
  // Event listeners storage
  
  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    // Add event listener
  }
  
  emit<K extends keyof T>(event: K, data: T[K]): void {
    // Emit event with data
  }
  
  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    // Remove event listener
  }
}

// TODO: Create generic builder pattern
class QueryBuilder<T> {
  // Build SQL-like queries
  
  select<K extends keyof T>(...fields: K[]): QueryBuilder<Pick<T, K>> {
    // Select specific fields
  }
  
  where(condition: Partial<T>): QueryBuilder<T> {
    // Add where condition
  }
  
  orderBy<K extends keyof T>(field: K, direction: 'asc' | 'desc'): QueryBuilder<T> {
    // Add ordering
  }
  
  execute(): Promise<T[]> {
    // Execute query
  }
}

// Test your implementations
console.log(identity("hello"));
console.log(identity(42));

console.log(getFirst([1, 2, 3]));
console.log(getLast(["a", "b", "c"]));

console.log(pair("hello", 42));
console.log(merge({ a: 1 }, { b: 2 }));

const stringBox = new Box<string>();
const numberCache = new Cache<string, number>();

const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
console.log(getProperty(user, "name"));

const userRepo = createRepository<User>();
userRepo.save(user);

const eventEmitter = new EventEmitter<EventMap>();
eventEmitter.on('user:created', (user) => {
  console.log('User created:', user.name);
});

const queryBuilder = new QueryBuilder<User>();
// queryBuilder.select('name', 'email').where({ id: 1 }).execute();