import { Wrapper } from './style'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>
}
