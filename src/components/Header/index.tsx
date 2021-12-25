type HeaderProps = {
  title?: string
}

function Header({ title }: HeaderProps) {
  return <header aria-label="Header">{title}</header>
}

export default Header
