import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LeaderboardPage from '../app/leaderboard/page';
import React from 'react';

vi.mock('@/components/layout/Layout', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>,
}));

// Mock components that might use window/hooks
vi.mock('@/components/leaderboard/PublicLeaderboard', () => ({
    default: () => <div data-testid="public-leaderboard">Public Leaderboard</div>,
}));

describe('LeaderboardPage', () => {
    it('renders the Leaderboard page headers', () => {
        render(<LeaderboardPage />);
        const heading = screen.getByText(/Top Browsing Champions/i);
        expect(heading).toBeInTheDocument();
    });

    it('renders the mocked PublicLeaderboard component', () => {
        render(<LeaderboardPage />);
        expect(screen.getByTestId('public-leaderboard')).toBeInTheDocument();
    });

    it('renders the Join the Competition link', () => {
        render(<LeaderboardPage />);
        const link = screen.getByText(/Join the Competition/i);
        expect(link).toBeInTheDocument();
    });
});
