type ListFilmProps = {
  title?: string
}

function ListFilm({ title }: ListFilmProps) {
  return <section aria-label="ListFilm">{title}</section>
}

export default ListFilm
