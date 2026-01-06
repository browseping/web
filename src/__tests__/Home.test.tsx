import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import HeroSection from '@/components/home/HeroSection'

vi.mock('@/hooks/useBrowserDetector', () => ({

    default: () => ({
        detectedBrowser: null,
        allBrowsers: []
    })
}))

test('HeroSection renders main heading', () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Socialize')
    expect(heading).toHaveTextContent('Your Browsing')
})

