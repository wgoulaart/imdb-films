import { Story, Meta } from '@storybook/react/types-6-0'
import CardFilm from 'components/CardFilm'
import { getMostPopularMovies } from 'components/ListFilm/stories'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Components/Slider',
  component: Slider
} as Meta

const settings: Settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false
}

const Slide = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 30rem;
  padding: 10rem 0;
  color: #ffb800;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`

export const Banner: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

const horizontalCardsSettings: Settings = {
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

export const Cards: Story = () => (
  <Slider settings={horizontalCardsSettings}>
    {getMostPopularMovies &&
      getMostPopularMovies.map((film) => (
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
)
