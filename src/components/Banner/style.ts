import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 800px;
`

export const BannerContainer = styled.div`
  display: block;
  position: relative;
  height: 800px;
  overflow: hidden;

  img {
    width: 100%;
    max-height: 800px;
  }
`

export const Description = styled.div`
  position: absolute;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-white);
  bottom: 0;
  width: 100%;
`
export const Title = styled.h3`
  display: block;
  font-size: 64px;
`
export const Text = styled.p`
  display: block;
  font-size: 14px;
`
