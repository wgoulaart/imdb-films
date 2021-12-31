import { Wrapper } from './styles'

function Footer() {
  return (
    <Wrapper aria-label="Footer">
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
    </Wrapper>
  )
}

export default Footer
