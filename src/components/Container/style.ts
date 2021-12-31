import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: var(--size-base);

  @media (min-width: 640px) {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 960px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    max-width: 1024px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    max-width: 1366px;
  }
`
