import { render, screen } from '@testing-library/react'
import ListFilm from '.'

describe('<ListFilm />', () => {
  it('should render the heading', () => {
    const { container } = render(<ListFilm />)

    expect(
      screen.getByRole('heading', { name: /ListFilm/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
