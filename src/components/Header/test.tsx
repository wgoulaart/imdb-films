import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('should render the Header component', () => {
    render(<Header />)

    expect(screen.getByLabelText(/c-header/i)).toBeInTheDocument()
  })
})
