# TypeScript Learning Exercises

Complete these exercises in order to master TypeScript fundamentals.

## Setup
```bash
npm install
```

## Exercise Structure
1. **Basic Types** ✅ - Primitive types and type annotations
2. **Primitive Types** - All TypeScript primitive types
3. **Objects & Arrays** - Complex data structures and tuples
4. **Type Aliases vs Interfaces** - When to use each
5. **Functions** - Parameter types, overloads, generics
6. **Unions & Intersections** - Combining types
7. **Literal Types** - Exact value types
8. **Enums** - Named constants
9. **Type Guards** - Runtime type checking
10. **Type Assertions** - Type casting
11. **Classes** - OOP with TypeScript
12. **Generics** - Reusable type-safe code
13. **Utility Types** - Built-in type transformations

## How to Work Through Exercises

### Compile and Run
```bash
npx tsc filename.ts && node filename.js
```

### Check Types Only
```bash
npx tsc --noEmit filename.ts
```

### Run Tests
```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode
npm run test:coverage      # With coverage
```

### Test Specific File
```bash
npx jest tests/01-basic-types.test.ts
```

## Exercise Guidelines

1. **Fill in all TODOs** - Each exercise has clear tasks
2. **Write tests** - Use the skeleton test files to verify your code
3. **Compile successfully** - No TypeScript errors
4. **Run and test** - Make sure everything works

## Topics Covered

- **Basics**: Type annotations, inference, compilation
- **Primitive Types**: number, string, boolean, any, unknown, never
- **Complex Types**: Objects, arrays, tuples
- **Type System**: Aliases, interfaces, unions, intersections
- **Functions**: Typing, overloads, generics
- **Advanced**: Classes, generics, utility types
- **Practical**: Type guards, assertions, error handling

Start with `01-basic-types.ts` (already completed) and work through each exercise!

## Testing Your Knowledge

Each exercise includes:
- **Implementation tasks** - Fill in the TODOs
- **Test skeletons** - Write tests to verify your code
- **Real-world examples** - Practical TypeScript usage

Good luck! 🚀