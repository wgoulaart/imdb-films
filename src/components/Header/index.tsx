import { Wrapper, Container } from './styles'

import Logo from 'components/Logo'
import InputSearch from 'components/InputSearch'

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <InputSearch />
      </Container>
    </Wrapper>
  )
}

export default Header
