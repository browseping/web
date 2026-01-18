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
        const description = screen.getByText(/The page you're looking for doesn't exist or has been moved/i);
        expect(description).toBeInTheDocument();
    });

    test('renders home page link', () => {
        render(<NotFound />);

        const homeLink = screen.getByRole('link', { name: /Go back to the homepage/i });
        expect(homeLink).toHaveAttribute('href', '/');
    });
});
