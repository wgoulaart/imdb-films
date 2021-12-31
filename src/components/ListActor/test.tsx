import { render, screen } from '@testing-library/react'
import ListActor from '.'

describe('<ListActor />', () => {
  it('should render the ListActor', () => {
    render(<ListActor />)

    expect(screen.getByLabelText(/ListActor/i)).toBeInTheDocument()
  })
})
