import { Wrapper } from './styles'

export type TitleHeadingProps = {
  title?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

function TitleHeading({ size = 'medium', title }: TitleHeadingProps) {
  return (
    <Wrapper role="heading" size={size}>
      {title}
    </Wrapper>
  )
}

export default TitleHeading
