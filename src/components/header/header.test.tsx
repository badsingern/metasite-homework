import { describe, expect, test } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import Header from './header.tsx'

describe('Header Component', () => {
    test('should render Contactify', async () => {
        render(<Header />)
        expect(await screen.findByText('CONTACTIFY')).toBeInTheDocument()
    })
})
