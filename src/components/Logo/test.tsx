import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    render(<Logo />)
    expect(screen.getByTestId(/gazin-films/i)).toBeInTheDocument()
  })

  it('shoul render the logo with default parameters size and color', () => {
    render(<Logo color="white" size="base" />)

    expect(screen.getByTestId(/gazin-films/i).parentElement).toHaveStyle({
      height: '24px'
    })
  })
})
