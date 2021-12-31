import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  max-width: 200px;

  input {
    color: var(--color-white);
    border: 0;
    width: 100%;
    height: 32px;
    padding: 8px 32px 8px 8px;
    background: rgba(196, 196, 196, 0.3);

    &:focus {
      outline: 0;
    }
  }

  @media (min-width: 640px) {
    max-width: 400px;

    input {
      padding-right: 40px;
    }
  }
`
export const ButtonSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  cursor: pointer;
`
