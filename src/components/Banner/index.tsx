import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import { BannerContainer, Description, Title, Text } from './style'
import Slider from 'components/Slider'
import { Settings } from 'react-slick'
import API from 'service/api'
import Container from 'components/Container'

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
}

export default function Banner() {
  const [listBanner, setListBanner] = useState(API.getFilmsBanner)

  useEffect(() => {
    setListBanner(API.getFilmsBanner)
  }, [listBanner])

  return (
    <Container>
      <Slider settings={settings}>
        {listBanner &&
          listBanner.map((item) => (
            <BannerContainer key={item.title.id}>
              <Image
                src={item.title.image.url}
                layout="fill"
                objectFit="cover"
              />
              <Description>
                <Title>{item.title.title}</Title>
                <Text>{item.title.titleType}</Text>
              </Description>
            </BannerContainer>
          ))}
      </Slider>
    </Container>
  )
}
