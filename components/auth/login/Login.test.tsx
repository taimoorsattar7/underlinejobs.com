import React from 'react'
import { render, screen } from '@testing-library/react'

import Login from './Login'

describe('<Login>', () => {
  // eslint-disable-next-line no-undef
  it('<Login> with empty name input on initial load', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<Login />)
    // eslint-disable-next-line no-undef
    expect(document.querySelector('input[name="email"]').value).toBe('')
  })
})
