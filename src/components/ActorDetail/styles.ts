import styled from 'styled-components'

export const Wrapper = styled.section``
export const ImagePoster = styled.section`
  height: 464px;
  background-color: #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
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

export const HeaderMovie = styled.header`
  display: flex;
  margin-top: -100px;
  margin-bottom: calc(var(--size-base) * 2);
  gap: 32px;
`

export const MovieHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: var(--size-base);
`

export const Photo = styled.div`
  display: flex;

  img {
    width: 205px;
    height: 308px;
  }
`

export const Title = styled.h4`
  font-size: 36px;
  margin-bottom: var(--size-base);
`

export const Text = styled.p`
  font-size: 18px;
  margin-top: 15px;
`
