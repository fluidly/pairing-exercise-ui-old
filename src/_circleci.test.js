import React from 'react'
import { render } from '@testing-library/react'
import App from '../src/App'

it('renders without crashing', () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello world!')).toBeInTheDocument()
})
