type FooterProps = {
  title?: string
}

function Footer({ title }: FooterProps) {
  return <footer aria-label="Footer">{title}</footer>
}

export default Footer
