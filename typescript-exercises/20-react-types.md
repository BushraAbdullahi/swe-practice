# Exercise 20: React & TypeScript

## Questions to Answer

### 1. React Component Types

**a) What's the difference between these component type definitions?**

```typescript
// Option 1
const Component1: React.FC<Props> = (props) => { ... }

// Option 2  
const Component2 = (props: Props) => { ... }

// Option 3
function Component3(props: Props): JSX.Element { ... }
```

**Your Answer:**
<!-- Explain the differences and when to use each -->

### 2. Props and State Typing

**a) Define props for a UserCard component:**
```typescript
interface UserCardProps {
  // Define props for:
  // - user object with id, name, email, avatar (optional)
  // - onClick handler that receives user id
  // - isSelected boolean (optional, default false)
  // - children (optional)
}
```

**b) Define state for a form component:**
```typescript
interface FormState {
  // Define state for:
  // - form data object
  // - loading boolean
  // - errors object with field names as keys
  // - isValid boolean
}
```

### 3. Event Handling

**Type these event handlers correctly:**

**a) Input change handler:**
```typescript
const handleInputChange = (event: /* Your type here */) => {
  // Handle input change
};
```

**b) Form submit handler:**
```typescript
const handleSubmit = (event: /* Your type here */) => {
  // Handle form submission
};
```

**c) Button click handler:**
```typescript
const handleClick = (event: /* Your type here */) => {
  // Handle button click
};
```

**d) Custom event handler that receives additional data:**
```typescript
const handleCustomEvent = (event: /* Your type here */, data: UserData) => {
  // Handle custom event with data
};
```

### 4. Hooks Typing

**a) Type useState for different scenarios:**

```typescript
// String state
const [name, setName] = useState(/* Your type here */);

// Object state
const [user, setUser] = useState(/* Your type here */);

// Array state
const [items, setItems] = useState(/* Your type here */);

// Optional state
const [data, setData] = useState(/* Your type here */);
```

**b) Type useEffect dependencies:**
```typescript
useEffect(() => {
  // Effect logic
}, [/* How do you type dependencies? */]);
```

**c) Type useRef for different use cases:**
```typescript
// DOM element ref
const inputRef = useRef(/* Your type here */);

// Mutable value ref
const countRef = useRef(/* Your type here */);
```

**d) Type custom hooks:**
```typescript
// Custom hook that returns user data and loading state
function useUser(id: number): /* Your return type here */ {
  // Hook implementation
}

// Custom hook for form handling
function useForm<T>(initialValues: T): /* Your return type here */ {
  // Hook implementation
}
```

### 5. Context API

**a) Create a typed context for theme management:**
```typescript
interface ThemeContextType {
  // Define context type
}

const ThemeContext = createContext(/* Your type here */);

// Provider component props
interface ThemeProviderProps {
  // Define provider props
}

// Custom hook for using theme context
function useTheme(): /* Your return type here */ {
  // Hook implementation
}
```

### 6. Higher-Order Components (HOCs)

**a) Type a HOC that adds loading functionality:**
```typescript
function withLoading<P extends object>(
  Component: /* Your type here */
): /* Your return type here */ {
  // HOC implementation
}
```

### 7. Render Props

**a) Type a render prop component:**
```typescript
interface RenderPropComponentProps {
  // Define props including render prop
}

const RenderPropComponent = (props: RenderPropComponentProps) => {
  // Component implementation
};
```

### 8. Generic Components

**a) Create a generic List component:**
```typescript
interface ListProps<T> {
  // Define generic props
}

function List<T>(props: ListProps<T>): /* Your return type */ {
  // Component implementation
}
```

### 9. Forwarding Refs

**a) Type a component that forwards refs:**
```typescript
interface ButtonProps {
  // Define props
}

const Button = forwardRef</* Ref type */, /* Props type */>(
  (props, ref) => {
    // Component implementation
  }
);
```

### 10. Common Patterns

**Answer these questions:**

**a) How do you type children prop for different scenarios?**

**Your Answer:**
<!-- Explain different children types -->

**b) How do you make some props optional with default values?**

**Your Answer:**
<!-- Explain optional props with defaults -->

**c) How do you type props that can be either controlled or uncontrolled?**

**Your Answer:**
<!-- Explain controlled vs uncontrolled props -->

## Practical Exercises

### Exercise 1: User Management Component

Create a complete TypeScript interface for a UserManagement component that:
- Displays a list of users
- Allows adding, editing, and deleting users
- Has search and filter functionality
- Shows loading and error states

```typescript
// Define all necessary interfaces and types here
```

### Exercise 2: Form Builder

Create types for a dynamic form builder that:
- Accepts a schema to define form fields
- Supports different field types (text, email, select, checkbox, etc.)
- Has validation rules
- Returns typed form data

```typescript
// Define form builder types here
```

### Exercise 3: Data Table

Create a generic, reusable data table component with:
- Generic row data type
- Column definitions with custom renderers
- Sorting and pagination
- Row selection
- Custom actions

```typescript
// Define data table types here
```

## Best Practices

**List 5 best practices for using TypeScript with React:**

**Your Answer:**
1. <!-- First best practice -->
2. <!-- Second best practice -->
3. <!-- Third best practice -->
4. <!-- Fourth best practice -->
5. <!-- Fifth best practice -->