import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DownloadPage from '../app/download/page';
import React from 'react';

vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

describe('DownloadPage', () => {
    it('renders the Download page headers', () => {
        render(<DownloadPage />);
        const heroHeading = screen.getByText(/Get BrowsePing/i);
        expect(heroHeading).toBeInTheDocument();
        const subHeading = screen.getByText(/For Your Browser/i);
        expect(subHeading).toBeInTheDocument();
    });

    it('renders the Choose Your Browser section', () => {
        render(<DownloadPage />);
        const browserHeading = screen.getByText(/Choose Your Browser/i);
        expect(browserHeading).toBeInTheDocument();
    });

    it('renders the Manual Installation section', () => {
        render(<DownloadPage />);
        const manualHeading = screen.getByText(/Prefer Manual Installation\?/i);
        expect(manualHeading).toBeInTheDocument();
    });
});
