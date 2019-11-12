import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('circleci frontend', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello world!')).toBeInTheDocument()
  })
})

