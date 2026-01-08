import '@testing-library/jest-dom';

// Mock IntersectionObserver
class IntersectionObserverMock {
    root = null;
    rootMargin = '';
    thresholds = [];
    disconnect() { }
    observe() { }
    unobserve() { }
    takeRecords() { return []; }
}

window.IntersectionObserver = IntersectionObserverMock as unknown as typeof IntersectionObserver;
