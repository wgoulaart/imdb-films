import CardFilm, { CardFilmProps } from 'components/CardFilm'
import Slider from 'components/Slider'
import TitleHeading from 'components/TitleHeading'
import { Settings } from 'react-slick'

import { Wrapper } from './style'

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
  return (
    <>
      <TitleHeading size="large" title={title} />
      <Wrapper aria-label="ListFilm">
        <Slider settings={settings}>
          {items?.map((film) => (
            <CardFilm
              key={film.id}
              id={film.id}
              title={film.title}
              titleType={film.titleType}
              year={film.year}
              image={film.image}
            />
          ))}
        </Slider>
      </Wrapper>
    </>
  )
}

export default ListFilm
