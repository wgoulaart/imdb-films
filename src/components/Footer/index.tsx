import Container from 'components/Container'
import { Wrapper } from './styles'

function Footer() {
  return (
    <Wrapper aria-label="Footer">
      <Container>
        <h4>GazinFilms © 2021</h4>
        <p>
          Desenvolvido por{' '}
          <a
            href="https://github.com/wgoulaart"
            target="_blank"
            rel="noreferrer"
            role="link"
          >
            @William Goulart
          </a>
        </p>
      </Container>
    </Wrapper>
  )
}

export default Footer
