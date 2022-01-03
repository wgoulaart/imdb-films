import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import { BannerContainer, Description, Title, Text, Wrapper } from './style'
import Slider from 'components/Slider'
import { Settings } from 'react-slick'
import { getFilmsBanner } from 'service/api'

export type BannerProps = {
  id?: string
  image?: string
  title?: string
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  useCSS: true
}

export default function Banner({ id, image, title }: BannerProps) {
  const [listBanner, setListBanner] = useState(getFilmsBanner)

  return (
    <Slider settings={settings}>
      {listBanner &&
        listBanner.map((item) => (
          <BannerContainer key={item.title.id}>
            <Image
              src={item.title.image.url}
              width={item.title.image.width}
              height={item.title.image.height}
              objectFit=""
            />
            <Description>
              <Title>{item.title.title}</Title>
              <Text>{item.title.titleType}</Text>
            </Description>
          </BannerContainer>
        ))}
    </Slider>
  )
}
