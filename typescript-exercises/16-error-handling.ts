// Exercise 16: Error Handling
// Master typed error handling in TypeScript

// TODO: Create custom error classes
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: any
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public url: string
  ) {
    super(message);
    this.name = 'NetworkError';
  }
}

class DatabaseError extends Error {
  constructor(
    message: string,
    public query: string,
    public code?: string
  ) {
    super(message);
    this.name = 'DatabaseError';
  }
}

// TODO: Create error union types
type AppError = ValidationError | NetworkError | DatabaseError;

// TODO: Create Result type for error handling
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

// TODO: Create functions that return Results instead of throwing
function validateUser(user: any): Result<{ id: number; name: string; email: string }, ValidationError> {
  // TODO: Validate user object and return Result
  if (!user.name) {
    return {
      success: false,
      error: new ValidationError('Name is required', 'name', user.name)
    };
  }
  
  if (!user.email || !user.email.includes('@')) {
    return {
      success: false,
      error: new ValidationError('Valid email is required', 'email', user.email)
    };
  }
  
  return {
    success: true,
    data: {
      id: user.id || Math.random(),
      name: user.name,
      email: user.email
    }
  };
}

async function fetchUserData(id: number): Promise<Result<any, NetworkError>> {
  // TODO: Simulate API call with potential network errors
  try {
    // Simulate network request
    if (Math.random() > 0.7) {
      throw new Error('Network timeout');
    }
    
    if (id === 404) {
      return {
        success: false,
        error: new NetworkError('User not found', 404, `/api/users/${id}`)
      };
    }
    
    return {
      success: true,
      data: { id, name: `User ${id}`, email: `user${id}@example.com` }
    };
  } catch (error) {
    return {
      success: false,
      error: new NetworkError(
        error instanceof Error ? error.message : 'Unknown network error',
        500,
        `/api/users/${id}`
      )
    };
  }
}

// TODO: Create error handling utilities
function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError;
}

function isDatabaseError(error: unknown): error is DatabaseError {
  return error instanceof DatabaseError;
}

// TODO: Create safe error handling functions
function handleError(error: unknown): string {
  if (isValidationError(error)) {
    return `Validation failed for ${error.field}: ${error.message}`;
  }
  
  if (isNetworkError(error)) {
    return `Network error (${error.statusCode}): ${error.message}`;
  }
  
  if (isDatabaseError(error)) {
    return `Database error: ${error.message} (Query: ${error.query})`;
  }
  
  if (error instanceof Error) {
    return `Error: ${error.message}`;
  }
  
  return `Unknown error: ${String(error)}`;
}

// TODO: Create async error handling with proper typing
async function safeAsyncOperation<T>(
  operation: () => Promise<T>
): Promise<Result<T, Error>> {
  try {
    const data = await operation();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}

// TODO: Create error boundary pattern for functions
function withErrorBoundary<T extends any[], R>(
  fn: (...args: T) => R,
  errorHandler: (error: unknown) => R
) {
  return (...args: T): R => {
    try {
      return fn(...args);
    } catch (error) {
      return errorHandler(error);
    }
  };
}

// TODO: Create typed catch blocks
async function demonstrateTypedCatch() {
  try {
    // Some operation that might throw
    throw new ValidationError('Invalid input', 'email', 'not-an-email');
  } catch (err: unknown) {
    // TODO: Handle different error types
    if (err instanceof ValidationError) {
      console.log(`Validation error in field ${err.field}: ${err.message}`);
    } else if (err instanceof NetworkError) {
      console.log(`Network error ${err.statusCode}: ${err.message}`);
    } else if (err instanceof Error) {
      console.log(`Generic error: ${err.message}`);
    } else {
      console.log(`Unknown error: ${String(err)}`);
    }
  }
}

// TODO: Create Option type for null safety
type Option<T> = T | null | undefined;

function isSome<T>(value: Option<T>): value is T {
  return value !== null && value !== undefined;
}

function isNone<T>(value: Option<T>): value is null | undefined {
  return value === null || value === undefined;
}

// TODO: Create Maybe monad for chaining operations
class Maybe<T> {
  constructor(private value: T | null | undefined) {}
  
  static of<T>(value: T | null | undefined): Maybe<T> {
    return new Maybe(value);
  }
  
  map<U>(fn: (value: T) => U): Maybe<U> {
    if (this.value === null || this.value === undefined) {
      return Maybe.of<U>(null);
    }
    return Maybe.of(fn(this.value));
  }
  
  flatMap<U>(fn: (value: T) => Maybe<U>): Maybe<U> {
    if (this.value === null || this.value === undefined) {
      return Maybe.of<U>(null);
    }
    return fn(this.value);
  }
  
  getOrElse(defaultValue: T): T {
    return this.value ?? defaultValue;
  }
  
  isSome(): boolean {
    return this.value !== null && this.value !== undefined;
  }
  
  isNone(): boolean {
    return this.value === null || this.value === undefined;
  }
}

// TODO: Test your error handling implementations
async function testErrorHandling() {
  // Test validation
  const userResult = validateUser({ name: 'Alice' }); // Missing email
  if (!userResult.success) {
    console.log(handleError(userResult.error));
  }
  
  // Test network error
  const networkResult = await fetchUserData(404);
  if (!networkResult.success) {
    console.log(handleError(networkResult.error));
  }
  
  // Test safe async operation
  const safeResult = await safeAsyncOperation(async () => {
    throw new Error('Something went wrong');
  });
  
  if (!safeResult.success) {
    console.log(handleError(safeResult.error));
  }
  
  // Test Maybe monad
  const maybeValue = Maybe.of('hello')
    .map(s => s.toUpperCase())
    .map(s => s.length)
    .getOrElse(0);
  
  console.log('Maybe result:', maybeValue);
  
  // Test error boundary
  const safeDivide = withErrorBoundary(
    (a: number, b: number) => {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    },
    (error) => {
      console.log('Caught error:', error);
      return 0;
    }
  );
  
  console.log('Safe divide:', safeDivide(10, 0));
}

// Run tests
testErrorHandling().catch(console.error);
demonstrateTypedCatch().catch(console.error);