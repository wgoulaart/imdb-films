type BannerProps = {
  title?: string
}

function Banner({ title }: BannerProps) {
  return <section aria-label="Banner">{title}</section>
}

export default Banner
