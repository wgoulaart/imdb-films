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
  background: #050e12;
  border-radius: 4px;

  @media (min-width: 640px) {
    width: calc(100% - 16px);
  }
`

export const Image = styled.figure`
  display: block;
  position: relative;
  background: #000;
  height: 100%;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  img {
    display: block;
    position: relative;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: top;
    z-index: 1;
    transition: all 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
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

  @media (min-width: 630px) {
    height: 290px;

    img {
      height: 290px;
    }
  }
`

export const Description = styled.header`
  display: flex;
  flex-direction: column;
  padding: calc(var(--size-base) / 2);
  background: #000;
  border-radius: 0 0 4px 4px;
`

export const Title = styled.h4`
  display: block;
  width: calc(100% - 16px);
  color: hsla(0, 0%, 71%, 1);
  font-size: 18px;
  line-height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Year = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 51%, 1);
`
