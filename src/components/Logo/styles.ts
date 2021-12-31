import styled from 'styled-components'

export const Wrapper = styled.div`
  color: var(--color-white);
  margin-right: auto;
  height: var(--size-base);

  svg {
    height: var(--size-base);
  }

  @media (min-width: 640px) {
    height: 24px;

    svg {
      height: 24px;
    }
  }

  @media (min-width: 1024px) {
    height: 48px;

    svg {
      height: 48px;
    }
  }
`
