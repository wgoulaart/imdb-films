import { render, screen } from '@testing-library/react'
import Details from '.'

describe('<Details />', () => {
  it('should render the Details', () => {
    render(<Details />)

    expect(screen.getByLabelText(/Details/i)).toBeInTheDocument()
  })
})
