import { Resume } from './Resume'
import { render } from '@testing-library/react'

describe('Counter', () => {
    it('should render the text `Count: <count>` for the given count prop', () => {
        const count = 1
        const add = jest.fn()
        const remove = jest.fn()
        const component = render(
            <Resume />
        )
        expect(component.getByTestId('counter-output')).toHaveTextContent(
            'Count: 1'
        )
    })
})