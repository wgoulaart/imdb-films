import { Wrapper } from './styles'

import Logo from 'components/Logo'
import InputSearch from 'components/InputSearch'

function Header() {
  return (
    <Wrapper>
      <Logo />
      <InputSearch />
    </Wrapper>
  )
}

export default Header
