import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  render(<App />)
  expect(1 + 1).toBe(3)
})
