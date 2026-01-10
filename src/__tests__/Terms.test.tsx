import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TermsPage from '../app/terms/page';
import React from 'react';

vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

describe('TermsPage', () => {
    it('renders the Terms of Service heading', () => {
        render(<TermsPage />);
        const heading = screen.getByRole('heading', { name: /Terms of Service/i });
        expect(heading).toBeInTheDocument();
    });

    it('renders the Important Notice section', () => {
        render(<TermsPage />);
        const notice = screen.getByText(/Important Notice/i);
        expect(notice).toBeInTheDocument();
    });

    it('renders the Acceptance of Terms section', () => {
        render(<TermsPage />);
        const acceptance = screen.getByText(/1. Acceptance of Terms/i);
        expect(acceptance).toBeInTheDocument();
    });
});
