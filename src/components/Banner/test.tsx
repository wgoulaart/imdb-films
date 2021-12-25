import { render, screen } from '@testing-library/react'
import Banner from '.'

describe('<Banner />', () => {
  it('should render the Banner', () => {
    render(<Banner />)

    expect(screen.getByLabelText(/Banner/i)).toBeInTheDocument()
  })
})
