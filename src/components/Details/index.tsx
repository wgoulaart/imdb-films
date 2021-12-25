type DetailsProps = {
  title?: string
}

function Details({ title }: DetailsProps) {
  return <div aria-label="Details">{title}</div>
}

export default Details
