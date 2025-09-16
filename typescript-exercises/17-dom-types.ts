// Exercise 17: DOM & Event Types
// Master DOM manipulation with TypeScript

// TODO: Create typed DOM element selections
function getTypedElements() {
  // TODO: Get elements with proper typing
  const input = document.getElementById('username') as HTMLInputElement;
  const button = document.querySelector('.submit-btn') as HTMLButtonElement;
  const form = document.forms.namedItem('user-form') as HTMLFormElement;
  const div = document.createElement('div') as HTMLDivElement;
  
  return { input, button, form, div };
}

// TODO: Create typed event handlers
function setupEventHandlers() {
  const input = document.getElementById('email') as HTMLInputElement;
  const button = document.getElementById('submit') as HTMLButtonElement;
  const form = document.getElementById('contact-form') as HTMLFormElement;
  
  // TODO: Type the event parameter correctly
  input.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log('Input value:', target.value);
  });
  
  // TODO: Handle different event types
  button.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    console.log('Button clicked at:', event.clientX, event.clientY);
  });
  
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log('Form submitted:', Object.fromEntries(formData));
  });
  
  // TODO: Handle keyboard events
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      console.log('Escape key pressed');
    }
  });
}

// TODO: Create custom event types
interface CustomEventDetail {
  userId: number;
  action: string;
  timestamp: Date;
}

function createCustomEvent(detail: CustomEventDetail): CustomEvent<CustomEventDetail> {
  return new CustomEvent('user-action', {
    detail,
    bubbles: true,
    cancelable: true
  });
}

function handleCustomEvent(event: CustomEvent<CustomEventDetail>) {
  console.log('Custom event:', event.detail);
}

// TODO: Create form handling utilities
interface FormData {
  [key: string]: string | number | boolean;
}

function getFormData(form: HTMLFormElement): FormData {
  const formData = new FormData(form);
  const result: FormData = {};
  
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      // Try to convert to number or boolean
      if (!isNaN(Number(value))) {
        result[key] = Number(value);
      } else if (value === 'true' || value === 'false') {
        result[key] = value === 'true';
      } else {
        result[key] = value;
      }
    }
  }
  
  return result;
}

// TODO: Create element creation utilities
function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes?: Partial<HTMLElementTagNameMap[K]>,
  children?: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  
  if (attributes) {
    Object.assign(element, attributes);
  }
  
  if (children) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }
  
  return element;
}

// TODO: Create type-safe query selectors
function querySelector<K extends keyof HTMLElementTagNameMap>(
  selector: K
): HTMLElementTagNameMap[K] | null;
function querySelector<K extends keyof SVGElementTagNameMap>(
  selector: K
): SVGElementTagNameMap[K] | null;
function querySelector<E extends Element = Element>(
  selector: string
): E | null;
function querySelector(selector: string): Element | null {
  return document.querySelector(selector);
}

function querySelectorAll<K extends keyof HTMLElementTagNameMap>(
  selector: K
): NodeListOf<HTMLElementTagNameMap[K]>;
function querySelectorAll<K extends keyof SVGElementTagNameMap>(
  selector: K
): NodeListOf<SVGElementTagNameMap[K]>;
function querySelectorAll<E extends Element = Element>(
  selector: string
): NodeListOf<E>;
function querySelectorAll(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
}

// TODO: Create intersection observer utility
interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverOptions
): IntersectionObserver {
  return new IntersectionObserver(callback, options);
}

// TODO: Create mutation observer utility
function createMutationObserver(
  callback: (mutations: MutationRecord[]) => void,
  options?: MutationObserverInit
): MutationObserver {
  return new MutationObserver(callback);
}

// TODO: Create drag and drop utilities
interface DragData {
  type: string;
  data: any;
}

function setupDragAndDrop(
  draggable: HTMLElement,
  dropZone: HTMLElement,
  onDrop: (data: DragData) => void
) {
  draggable.draggable = true;
  
  draggable.addEventListener('dragstart', (event: DragEvent) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('application/json', JSON.stringify({
        type: 'custom',
        data: { id: draggable.id }
      }));
    }
  });
  
  dropZone.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault();
  });
  
  dropZone.addEventListener('drop', (event: DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer) {
      const data = JSON.parse(event.dataTransfer.getData('application/json'));
      onDrop(data);
    }
  });
}

// TODO: Create local storage utilities with typing
class TypedStorage<T> {
  constructor(private key: string) {}
  
  get(): T | null {
    const item = localStorage.getItem(this.key);
    if (item === null) return null;
    
    try {
      return JSON.parse(item);
    } catch {
      return null;
    }
  }
  
  set(value: T): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  
  remove(): void {
    localStorage.removeItem(this.key);
  }
  
  exists(): boolean {
    return localStorage.getItem(this.key) !== null;
  }
}

// TODO: Create fetch utilities with proper typing
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

async function typedFetch<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const response = await fetch(url, options);
  const data = await response.json();
  
  return {
    data,
    status: response.status,
    message: response.statusText
  };
}

// TODO: Create canvas utilities
function setupCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D context');
  
  return {
    drawRect: (x: number, y: number, width: number, height: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    },
    
    drawCircle: (x: number, y: number, radius: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    },
    
    clear: () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
}

// TODO: Test your DOM utilities
function testDOMUtilities() {
  // Test element creation
  const button = createElement('button', {
    textContent: 'Click me',
    className: 'btn btn-primary'
  });
  
  // Test typed storage
  const userStorage = new TypedStorage<{ name: string; age: number }>('user');
  userStorage.set({ name: 'Alice', age: 25 });
  const user = userStorage.get();
  console.log('Stored user:', user);
  
  // Test custom event
  const customEvent = createCustomEvent({
    userId: 1,
    action: 'login',
    timestamp: new Date()
  });
  
  document.addEventListener('user-action', handleCustomEvent);
  document.dispatchEvent(customEvent);
  
  console.log('DOM utilities test completed');
}

// Run tests when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', testDOMUtilities);
} else {
  testDOMUtilities();
}