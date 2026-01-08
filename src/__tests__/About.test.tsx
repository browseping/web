import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutPage from '../app/about/page';
import React from 'react';

// Mock the Layout component because it uses Navbar and Footer which might have problematic hooks for a simple unit test
vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

describe('AboutPage', () => {
    it('renders the redefining heading', () => {
        render(<AboutPage />);
        const heading = screen.getByText(/Redefining the/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the browsing experience heading', () => {
        render(<AboutPage />);
        const heading = screen.getByText(/Browsing Experience/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the journey section', () => {
        render(<AboutPage />);
        const journeyHeading = screen.getByText(/Be Part of the Journey/i);
        expect(journeyHeading).toBeInTheDocument();
    });
});
