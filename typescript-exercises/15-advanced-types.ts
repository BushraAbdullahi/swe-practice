// Exercise 15: Advanced Types
// Master mapped types, conditional types, and template literals

// TODO: Create basic mapped types
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Partial<T> = {
  [K in keyof T]?: T[K];
};

type Required<T> = {
  [K in keyof T]-?: T[K];
};

// TODO: Create mapped types with key transformation
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Setters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
};

// TODO: Create conditional types
type IsArray<T> = T extends any[] ? true : false;
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type NonNullable<T> = T extends null | undefined ? never : T;

// TODO: Create more complex conditional types
type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FunctionParameters<T> = T extends (...args: infer P) => any ? P : never;

// TODO: Create distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type ExcludeNull<T> = T extends null ? never : T;

// TODO: Create template literal types
type EventName<T extends string> = `on${Capitalize<T>}`;
type HttpMethod = 'get' | 'post' | 'put' | 'delete';
type ApiEndpoint<T extends HttpMethod> = `/${string}/${T}`;

// TODO: Create template literal patterns
type CSSProperty = `--${string}`;
type DataAttribute = `data-${string}`;
type AriaAttribute = `aria-${string}`;

// TODO: Create recursive types
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// TODO: Create utility types with template literals
type Join<T extends string[], D extends string> = 
  T extends readonly [infer F, ...infer R]
    ? F extends string
      ? R extends string[]
        ? R['length'] extends 0
          ? F
          : `${F}${D}${Join<R, D>}`
        : never
      : never
    : '';

// TODO: Create key manipulation types
type CamelCase<S extends string> = 
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${P1}${Uppercase<P2>}${CamelCase<P3>}`
    : S;

type KebabCase<S extends string> = 
  S extends `${infer C}${infer T}`
    ? `${C extends Uppercase<C> ? `-${Lowercase<C>}` : C}${KebabCase<T>}`
    : S;

// TODO: Create object manipulation types
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

// TODO: Create function type utilities
type Curry<T> = T extends (...args: infer A) => infer R
  ? A extends [infer H, ...infer T]
    ? (arg: H) => Curry<(...args: T) => R>
    : R
  : never;

type Pipe<T extends readonly any[]> = 
  T extends readonly [(...args: any[]) => infer R]
    ? (...args: Parameters<T[0]>) => R
    : T extends readonly [(...args: any[]) => any, ...infer Rest]
      ? Rest extends readonly [(...args: any[]) => any, ...any[]]
        ? (...args: Parameters<T[0]>) => Pipe<Rest> extends (...args: any[]) => infer R ? R : never
        : never
      : never;

// TODO: Test your advanced types
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Test mapped types
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type UserGetters = Getters<User>;
type UserSetters = Setters<User>;

// Test conditional types
type IsUserArray = IsArray<User[]>; // true
type IsUserNotArray = IsArray<User>; // false
type UserArrayElement = ArrayElement<User[]>; // User

// Test template literal types
type ClickEvent = EventName<'click'>; // 'onClick'
type HoverEvent = EventName<'hover'>; // 'onHover'
type GetEndpoint = ApiEndpoint<'get'>; // '/${string}/get'

// Test recursive types
type DeepReadonlyUser = DeepReadonly<{
  user: User;
  preferences: {
    theme: string;
    notifications: boolean;
  };
}>;

// TODO: Create practical examples
type ApiRoutes = {
  users: {
    get: (id: number) => Promise<User>;
    post: (user: Omit<User, 'id'>) => Promise<User>;
    put: (id: number, user: Partial<User>) => Promise<User>;
    delete: (id: number) => Promise<void>;
  };
  posts: {
    get: (id: number) => Promise<any>;
    post: (post: any) => Promise<any>;
  };
};

type FlattenRoutes<T> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? {
        [P in keyof T[K] as `${string & K}:${string & P}`]: T[K][P];
      }[keyof T[K]]
    : T[K];
}[keyof T];

type FlatRoutes = FlattenRoutes<ApiRoutes>;

// TODO: Create validation types
type ValidateShape<T, U> = T extends U ? (U extends T ? T : never) : never;
type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
type OptionalKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? K : never;
}[keyof T];

// Test your implementations
console.log('Advanced types exercise completed!');

// TODO: Create a function that uses advanced types
function createTypedObject<T extends Record<string, any>>(
  obj: T
): T & { getKeys(): (keyof T)[]; getValues(): T[keyof T][] } {
  return {
    ...obj,
    getKeys: () => Object.keys(obj) as (keyof T)[],
    getValues: () => Object.values(obj) as T[keyof T][]
  };
}

const typedUser = createTypedObject({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
});

console.log(typedUser.getKeys());
console.log(typedUser.getValues());