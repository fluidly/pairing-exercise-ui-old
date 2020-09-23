import React from 'react'
import fetchMock from 'fetch-mock'
import App from './App'
import clients from '../clients.json'
import { renderAct } from './render'

beforeEach(() => {
  fetchMock.get('/clients', clients)
})

it('renders without crashing', async () => {
  const { getByText } = await renderAct(<App />)
  expect(getByText('Hello world!')).toBeInTheDocument()
  expect(1 + 1).toBe(3)
})
