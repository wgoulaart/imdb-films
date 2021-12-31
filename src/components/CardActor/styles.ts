import styled from 'styled-components'

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  width: 193px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  color: #b6b6b6;

  &:hover {
    color: var(--color-white);

    img {
      transform: scale(1.1);
    }
  }
`
export const PhotoProfile = styled.div`
  display: block;
  width: 193px;
  height: 193px;
  overflow: hidden;
  border-radius: 200px;
  margin-bottom: var(--size-base);

  img {
    width: 100%;
    transition: all 0.3s;
  }
`

export const TitleActor = styled.h4`
  font-size: 18px;
  line-height: 24px;
`

export const QtdFilms = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: #b6b6b6;
`
