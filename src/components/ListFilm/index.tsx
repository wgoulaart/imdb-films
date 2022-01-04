import CardFilm, { CardFilmProps } from 'components/CardFilm'
import Slider from 'components/Slider'
import TitleHeading from 'components/TitleHeading'
import Link from 'next/link'
import { Settings } from 'react-slick'

import { StyledLink, Wrapper } from './style'

type ListFilmProps = {
  title?: string
  items: CardFilmProps[]
}

const settings: Settings = {
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 5,
  infinite: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
}

function ListFilm({ title, items }: ListFilmProps) {
  console.log(`listFilm`, items)
  return (
    <>
      <TitleHeading size="large" title={title} />
      <Wrapper aria-label="ListFilm">
        <Slider settings={settings}>
          {items?.map((film) => (
            <Link
              href={{
                pathname: '/movie-detail',
                query: { id: film.id }
              }}
              passHref
              key={film.id}
            >
              <StyledLink>
                <CardFilm
                  id={film.id}
                  title={film.title}
                  titleType={film.titleType}
                  year={film.year}
                  image={film.image}
                />
              </StyledLink>
            </Link>
          ))}
        </Slider>
      </Wrapper>
    </>
  )
}

export default ListFilm
