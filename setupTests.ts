import '@testing-library/jest-dom/extend-expect';

HTMLMediaElement.prototype.pause = jest.fn();
HTMLMediaElement.prototype.play = jest.fn();
window.URL.createObjectURL = jest.fn();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
class ResizeObserver {
  observe() {
    0;
  }
  unobserve() {
    0;
  }
  disconnect() {
    0;
  }
}

window.ResizeObserver = ResizeObserver;

beforeAll(() => {
  console.warn = jest.fn();
});
