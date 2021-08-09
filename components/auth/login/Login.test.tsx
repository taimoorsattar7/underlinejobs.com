import React from 'react'
import { render, screen } from '@testing-library/react'

import Login from './Login'

describe('<Login>', () => {
  it('<Login> with empty name input on initial load', () => {
    render(<Login />)
    expect(document.querySelector('input[name="email"]').value).toBe('')
  })
})
