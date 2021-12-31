import styled, { css } from 'styled-components'
import { TitleHeadingProps } from '.'

const small = css`
  font-size: var(--size-small);
  line-height: calc(var(--size-small) + 6px);
`
const medium = css`
  font-size: var(--size-base);
  line-height: calc(var(--size-base) + 6px);
`
const large = css`
  font-size: var(--size-large);
  line-height: calc(var(--size-large) + 6px);
`
const xlarge = css`
  font-size: var(--size-xlarge);
  line-height: calc(var(--size-xlarge) + 6px);
`

export const Wrapper = styled.h1<TitleHeadingProps>`
  color: var(--color-white);
  ${(props) => props.size == 'small' && small};
  ${(props) => props.size == 'medium' && medium};
  ${(props) => props.size == 'large' && large};
  ${(props) => props.size == 'xlarge' && xlarge};
  margin-top: calc(var(--size-base) / 2);
`
