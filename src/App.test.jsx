import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello world!')).toBeInTheDocument()
  expect(1 + 1).toBe(3)
})
