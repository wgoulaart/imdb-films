import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    render(<Heading />)

    expect(screen.getByRole('heading', { name: /Heading/i }))
  })
})
