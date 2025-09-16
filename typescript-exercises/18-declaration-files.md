# Exercise 18: Declaration Files

## Questions to Answer

### 1. What are .d.ts files and why do we need them?

**Your Answer:**
<!-- Explain what declaration files are, their purpose, and when they're used -->

### 2. Create ambient declarations

Write ambient declarations for the following scenarios:

**a) A global variable `APP_VERSION` that's a string:**
```typescript
// Your declaration here
```

**b) A global function `logMessage` that takes a string and returns void:**
```typescript
// Your declaration here
```

**c) A jQuery-like library with a global `$` function:**
```typescript
// Your declaration here
```

### 3. Module declarations

**a) Declare types for a module called 'my-awesome-library':**
```typescript
// Your declaration here
```

**b) Declare a module that exports both a default function and named exports:**
```typescript
// Your declaration here
```

### 4. DefinitelyTyped

**Answer these questions:**

a) What is DefinitelyTyped?

**Your Answer:**
<!-- Explain what DefinitelyTyped is and its purpose -->

b) How do you install types for lodash?

**Your Answer:**
<!-- Show the npm command -->

c) What's the naming convention for DefinitelyTyped packages?

**Your Answer:**
<!-- Explain the @types/ prefix -->

### 5. Module Augmentation

**Extend the built-in Array interface to add a `last()` method:**
```typescript
// Your declaration here
```

### 6. Global Augmentation

**Add a custom property to the Window interface:**
```typescript
// Your declaration here
```

### 7. Practical Scenarios

**a) You're using a JavaScript library that doesn't have types. What are your options?**

**Your Answer:**
<!-- List and explain the different approaches -->

**b) When would you create your own .d.ts file vs using @types packages?**

**Your Answer:**
<!-- Explain the decision criteria -->

### 8. Triple-slash directives

**Explain what these do and when to use them:**

```typescript
/// <reference path="./types.d.ts" />
/// <reference types="node" />
```

**Your Answer:**
<!-- Explain triple-slash directives -->

## Practical Exercise

Create a declaration file for an imaginary library called "super-math" that:
- Has a default export function `calculate(operation: string, a: number, b: number): number`
- Has named exports: `PI`, `E` (constants), and `random()` function
- Has a namespace `SuperMath` with advanced functions

```typescript
// super-math.d.ts
// Your complete declaration file here
```