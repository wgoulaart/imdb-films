import { Story, Meta } from '@storybook/react/types-6-0'
import CardFilm from 'components/CardFilm'
import { Settings } from 'react-slick'
import { getTitleDetails } from 'service/api'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Components/Slider',
  component: Slider
} as Meta

const settings: Settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = () => (
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
  slidesToShow: 5
}

export const HorizontalCards: Story = () => (
  <Slider settings={horizontalCardsSettings}>
    {getTitleDetails &&
      getTitleDetails.map((film) => (
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
