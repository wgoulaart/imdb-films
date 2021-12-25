import { render, screen } from '@testing-library/react'
import Details from '.'

describe('<Details />', () => {
  it('should render the heading', () => {
    const { container } = render(<Details />)

    expect(
      screen.getByRole('heading', { name: /Details/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
