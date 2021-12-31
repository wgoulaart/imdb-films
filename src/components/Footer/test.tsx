import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    render(<Footer />)

    expect(screen.getByLabelText(/Footer/i)).toBeInTheDocument()
  })
})
