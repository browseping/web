import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import NotFound from '@/app/not-found';

describe('NotFound Component', () => {
    test('renders 404 heading', () => {
        render(<NotFound />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('404');
    });

    test('renders error message', () => {
        render(<NotFound />);
        const errorMessage = screen.getByText(/Oops! Page Not Found/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('renders descriptive text', () => {
        render(<NotFound />);
        const description = screen.getByText(/The page you're looking for seems to have wandered off/i);
        expect(description).toBeInTheDocument();
    });

    test('renders all navigation cards', () => {
        render(<NotFound />);

        // Check for all navigation card titles
        expect(screen.getByText('Go Home')).toBeInTheDocument();
        expect(screen.getByText('Download Extension')).toBeInTheDocument();
        expect(screen.getByText('View Leaderboard')).toBeInTheDocument();
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('navigation links have correct hrefs', () => {
        render(<NotFound />);

        const homeLink = screen.getByRole('link', { name: /Go Home/i });
        expect(homeLink).toHaveAttribute('href', '/');

        const downloadLink = screen.getByRole('link', { name: /Download Extension/i });
        expect(downloadLink).toHaveAttribute('href', '/download');

        const leaderboardLink = screen.getByRole('link', { name: /View Leaderboard/i });
        expect(leaderboardLink).toHaveAttribute('href', '/leaderboard');

        const contactLink = screen.getByRole('link', { name: /Contact Us/i });
        expect(contactLink).toHaveAttribute('href', '/contact');
    });

    test('renders navigation card descriptions', () => {
        render(<NotFound />);

        expect(screen.getByText('Return to the homepage')).toBeInTheDocument();
        expect(screen.getByText('Get BrowsePing for your browser')).toBeInTheDocument();
        expect(screen.getByText('Check out top contributors')).toBeInTheDocument();
        expect(screen.getByText('Get in touch with our team')).toBeInTheDocument();
    });

    test('renders support contact link', () => {
        render(<NotFound />);

        const supportLink = screen.getByRole('link', { name: /contact our support team/i });
        expect(supportLink).toHaveAttribute('href', '/contact');
    });
});
