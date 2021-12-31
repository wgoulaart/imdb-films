import styled, { keyframes } from 'styled-components'

const flip = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.1909,0.4373,0.4509,0.7454);
    transform: rotateY(0);
  }

  30% {
    animation-timing-function: cubic-bezier(0.128,0.2315,0.9704,0.8632);
    transform: rotateY(153.72deg);
  }

  50% {
    animation-timing-function: cubic-bezier(0.5788,0.3001,0.5613,0.6784);
    transform: rotateY(180deg);
  }

  55% {
    animation-timing-function: cubic-bezier(0.1545,0.4929,0.6089,0.9373);
    transform: rotateY(238.68deg);
  }

  100% {
    transform: rotateY(360deg);
  }
`

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #050e12;
  border-radius: 4px;
  /* max-width: calc((100% / 2) - 8px); */

  /*
  @media (min-width: 460px) {
    max-width: calc((100% / 3) - 16px);
  }

  @media (min-width: 720px) {
    max-width: calc((100% / 4) - 16px);
  }

  @media (min-width: 1024px) {
    max-width: calc((100% / 6) - 16px);
  } */
`

export const Image = styled.figure`
  display: block;
  position: relative;
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  background: #000;
  height: 100%;

  img {
    display: block;
    position: relative;
    width: 100%;
    object-fit: cover;
    /* width: 100%; */
    /* height: 100%; */

    /* max-height: 200px; */
    /* object-position: top; */
    z-index: 1;
    /*
    max-height: 200px;
    object-fit: cover;
    object-position: top; */
  }

  &::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 3px;
    z-index: 0;
    top: calc(50%);
    left: calc(50% - 16px);
    border-radius: 50%;
    transform: translateZ(0) scale(0.5);
    animation: ${flip} 1s infinite linear;
    background: linear-gradient(45deg, #666 0%, #666 15%, #666 10%);
  }

  @media (min-width: 1024px) {
    /* height: 100%; */
    /* max-height: 300px; */

    img {
      max-height: 300px;
    }
  }
`

export const Description = styled.header`
  display: block;
  padding: calc(var(--size-base) / 2);
  background: #000;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`

export const Title = styled.h4`
  display: block;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  color: hsla(0, 0%, 71%, 1);
  font-size: 18px;
  overflow: hidden;
`

export const Year = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 51%, 1);
`
