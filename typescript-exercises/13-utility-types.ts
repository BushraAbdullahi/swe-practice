// Exercise 13: Utility Types
// Master TypeScript's built-in utility types

// Base interfaces for exercises
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
    language: string;
  };
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
}

// TODO: Use Partial<T> - makes all properties optional
type UserUpdate = // Partial<User>

function updateUser(user: User, updates: UserUpdate): User {
  // Merge user with updates
}

// TODO: Use Required<T> - makes all properties required
interface OptionalUser {
  id?: number;
  name?: string;
  email?: string;
}

type CompleteUser = // Required<OptionalUser>

// TODO: Use Readonly<T> - makes all properties readonly
type ImmutableUser = // Readonly<User>

function createImmutableUser(userData: User): ImmutableUser {
  // Return readonly user
}

// TODO: Use Pick<T, K> - select specific properties
type UserSummary = // Pick<User, "id" | "name" | "email">
type ProductBasics = // Pick<Product, "id" | "title" | "price">

// TODO: Use Omit<T, K> - exclude specific properties
type PublicUser = // Omit<User, "id" | "createdAt">
type ProductWithoutStock = // Omit<Product, "inStock">

// TODO: Use Record<K, V> - create object type with specific keys and values
type UserRoles = // Record<number, "admin" | "user" | "moderator"> (user ID to role)
type StatusMessages = // Record<"success" | "error" | "warning", string>

// TODO: Use Exclude<T, U> - exclude types from union
type Theme = "light" | "dark" | "auto" | "high-contrast";
type BasicTheme = // Exclude<Theme, "auto" | "high-contrast">

type Status = "idle" | "loading" | "success" | "error";
type NonLoadingStatus = // Exclude<Status, "loading">

// TODO: Use Extract<T, U> - extract types from union
type StringOrNumber = string | number | boolean;
type OnlyStringOrNumber = // Extract<StringOrNumber, string | number>

// TODO: Use NonNullable<T> - remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = // NonNullable<MaybeString>

// TODO: Use ReturnType<T> - get function return type
function getUser(): User {
  return {} as User;
}

function getProducts(): Product[] {
  return [] as Product[];
}

type GetUserReturn = // ReturnType<typeof getUser>
type GetProductsReturn = // ReturnType<typeof getProducts>

// TODO: Use Parameters<T> - get function parameter types
function createUser(name: string, email: string, age: number): User {
  return {} as User;
}

function updateProduct(id: number, updates: Partial<Product>): Product {
  return {} as Product;
}

type CreateUserParams = // Parameters<typeof createUser>
type UpdateProductParams = // Parameters<typeof updateProduct>

// TODO: Use ConstructorParameters<T> - get constructor parameter types
class UserService {
  constructor(apiUrl: string, timeout: number, retries: number) {}
}

type UserServiceParams = // ConstructorParameters<typeof UserService>

// TODO: Use InstanceType<T> - get instance type of constructor
type UserServiceInstance = // InstanceType<typeof UserService>

// TODO: Create custom utility types
type DeepReadonly<T> = {
  // Make all properties and nested properties readonly
};

type DeepPartial<T> = {
  // Make all properties and nested properties optional
};

type KeysOfType<T, U> = {
  // Get keys of T where the value type extends U
}[keyof T];

// TODO: Use template literal types with utilities
type EventNames = "click" | "hover" | "focus";
type EventHandlers = // Record<`on${Capitalize<EventNames>}`, () => void>

// TODO: Create conditional utility types
type ApiResponse<T> = T extends string 
  ? { message: T }
  : T extends number
  ? { code: T }
  : { data: T };

type StringResponse = // ApiResponse<string>
type NumberResponse = // ApiResponse<number>
type UserResponse = // ApiResponse<User>

// TODO: Use utility types with generics
function createCRUD<T extends { id: number }>() {
  return {
    create: (data: Omit<T, "id">): T => {
      // Create new entity
    },
    read: (id: number): T | undefined => {
      // Read entity by ID
    },
    update: (id: number, updates: Partial<T>): T => {
      // Update entity
    },
    delete: (id: number): boolean => {
      // Delete entity
    },
    list: (): T[] => {
      // List all entities
    }
  };
}

// TODO: Create mapped type utilities
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// Test your implementations
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true,
  createdAt: new Date(),
  preferences: {
    theme: "dark",
    notifications: true,
    language: "en"
  }
};

const userUpdate: UserUpdate = {
  age: 26,
  preferences: {
    theme: "light"
  }
};

const updatedUser = updateUser(user, userUpdate);
console.log(updatedUser);

const userSummary: UserSummary = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const publicUser: PublicUser = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  isActive: true,
  preferences: {
    theme: "dark",
    notifications: true,
    language: "en"
  }
};

const roles: UserRoles = {
  1: "admin",
  2: "user",
  3: "moderator"
};

const userCRUD = createCRUD<User>();
console.log(userCRUD.create({
  name: "Bob",
  email: "bob@example.com",
  age: 30,
  isActive: true,
  createdAt: new Date(),
  preferences: {
    theme: "light",
    notifications: false,
    language: "en"
  }
}));