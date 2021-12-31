import { render, screen } from '@testing-library/react'
import ListFilm from '.'

describe('<ListFilm />', () => {
  it('should render the ListFilm', () => {
    render(<ListFilm />)

    expect(screen.getByLabelText(/ListFilm/i)).toBeInTheDocument()
  })
})
