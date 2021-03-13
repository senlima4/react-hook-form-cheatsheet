import { render, screen } from '@testing-library/react'

import App from './App'

test('renders test text', () => {
  render(<App />)
  const textElement = screen.getByText(/Form area/i)
  expect(textElement).toBeInTheDocument()
})
