import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactPage from '../app/contact/page';
import React from 'react';

vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

describe('ContactPage', () => {
    it('renders the Contact Us heading', () => {
        render(<ContactPage />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent(/Contact/i);
        expect(heading).toHaveTextContent(/BrowsePing/i);
    });

    it('renders the General Inquiries section', () => {
        render(<ContactPage />);
        const inquiries = screen.getByText(/General Inquiries/i);
        expect(inquiries).toBeInTheDocument();
        const email = screen.getByText(/support@browseping.com/i);
        expect(email).toBeInTheDocument();
    });

    it('renders the Meet the Developer section', () => {
        render(<ContactPage />);
        const devHeading = screen.getByText(/Meet the Developer/i);
        expect(devHeading).toBeInTheDocument();
        const devName = screen.getByText(/Akash Kumar/i);
        expect(devName).toBeInTheDocument();
    });
});
