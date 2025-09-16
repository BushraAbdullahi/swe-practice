# Exercise 19: TypeScript Configuration

## Questions to Answer

### 1. tsconfig.json Basics

**a) What is tsconfig.json and why is it important?**

**Your Answer:**
<!-- Explain the purpose and importance of tsconfig.json -->

**b) How does TypeScript find the tsconfig.json file?**

**Your Answer:**
<!-- Explain the resolution process -->

### 2. Compiler Options

**Explain what each of these compiler options does:**

**a) `target`:**
**Your Answer:**
<!-- Explain target option -->

**b) `module`:**
**Your Answer:**
<!-- Explain module option -->

**c) `lib`:**
**Your Answer:**
<!-- Explain lib option -->

**d) `outDir` vs `rootDir`:**
**Your Answer:**
<!-- Explain the difference -->

**e) `sourceMap`:**
**Your Answer:**
<!-- Explain source maps -->

### 3. Strict Mode Options

**Explain each strict mode option and what it prevents:**

**a) `strict`:**
**Your Answer:**
<!-- Explain strict mode -->

**b) `noImplicitAny`:**
**Your Answer:**
<!-- Explain noImplicitAny -->

**c) `strictNullChecks`:**
**Your Answer:**
<!-- Explain strictNullChecks -->

**d) `strictFunctionTypes`:**
**Your Answer:**
<!-- Explain strictFunctionTypes -->

**e) `noImplicitReturns`:**
**Your Answer:**
<!-- Explain noImplicitReturns -->

### 4. Include/Exclude Patterns

**a) What's the difference between `include`, `exclude`, and `files`?**

**Your Answer:**
<!-- Explain the three options -->

**b) Write patterns to:**
- Include all .ts files in src/ and subdirectories
- Exclude node_modules and test files
- Include specific declaration files

```json
{
  "include": [
    // Your patterns here
  ],
  "exclude": [
    // Your patterns here
  ]
}
```

### 5. Path Mapping

**a) What is path mapping and why is it useful?**

**Your Answer:**
<!-- Explain path mapping -->

**b) Configure path mapping for:**
- `@/components/*` → `./src/components/*`
- `@/utils/*` → `./src/utils/*`
- `@/types/*` → `./src/types/*`

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      // Your path mappings here
    }
  }
}
```

### 6. Project References

**a) What are project references and when would you use them?**

**Your Answer:**
<!-- Explain project references -->

**b) How do you set up a monorepo with project references?**

**Your Answer:**
<!-- Explain the setup process -->

### 7. Different Environments

**Create tsconfig.json files for these scenarios:**

**a) Node.js backend project:**
```json
{
  // Your configuration here
}
```

**b) React frontend project:**
```json
{
  // Your configuration here
}
```

**c) Library that needs to output both CommonJS and ES modules:**
```json
{
  // Your configuration here
}
```

### 8. Extending Configurations

**a) How do you extend a base tsconfig.json?**

**Your Answer:**
<!-- Explain extends property -->

**b) Create a base config and extend it for development and production:**

**tsconfig.base.json:**
```json
{
  // Your base configuration here
}
```

**tsconfig.dev.json:**
```json
{
  // Your dev configuration here
}
```

**tsconfig.prod.json:**
```json
{
  // Your production configuration here
}
```

### 9. Common Issues

**Explain how to solve these common configuration issues:**

**a) "Cannot find module" errors with absolute imports:**

**Your Answer:**
<!-- Explain the solution -->

**b) TypeScript not recognizing .json imports:**

**Your Answer:**
<!-- Explain the solution -->

**c) Slow compilation times:**

**Your Answer:**
<!-- List optimization strategies -->

### 10. Best Practices

**List 5 best practices for TypeScript configuration:**

**Your Answer:**
1. <!-- First best practice -->
2. <!-- Second best practice -->
3. <!-- Third best practice -->
4. <!-- Fourth best practice -->
5. <!-- Fifth best practice -->

## Practical Exercise

**Create a complete tsconfig.json for a full-stack TypeScript project with:**
- Shared types between frontend and backend
- Strict type checking
- Path mapping for clean imports
- Separate build outputs for client and server
- Development and production configurations

```json
{
  // Your complete configuration here
}
```