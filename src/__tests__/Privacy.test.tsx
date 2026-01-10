import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PrivacyPage from '../app/privacy/page';
import React from 'react';

vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

describe('PrivacyPage', () => {
    it('renders the Privacy page heading', () => {
        render(<PrivacyPage />);
        const heading = screen.getByText(/Your Privacy is Our/i);
        expect(heading).toBeInTheDocument();
        const brand = screen.getByText(/Priority/i);
        expect(brand).toBeInTheDocument();
    });

    it('renders the Privacy Summary section', () => {
        render(<PrivacyPage />);
        const summary = screen.getByText(/Privacy Summary/i);
        expect(summary).toBeInTheDocument();
    });

    it('renders the What Information We Collect section', () => {
        render(<PrivacyPage />);
        const collection = screen.getByText(/What Information We Collect/i);
        expect(collection).toBeInTheDocument();
    });
});
