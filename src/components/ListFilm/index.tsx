type ListFilmProps = {
  title?: string
}

function ListFilm({ title }: ListFilmProps) {
  return <h1>{title}</h1>
}

export default ListFilm
