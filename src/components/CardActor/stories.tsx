import { Story, Meta } from '@storybook/react'
import CardActor, { CardActorProps } from '.'

export default {
  title: 'Components/CardActor',
  component: CardActor
} as Meta

export const Default: Story<CardActorProps> = (args) => <CardActor {...args} />

Default.args = {
  id: '/name/nm4043618',
  name: 'Tom Holland',
  image: {
    id: '/name/nm4043618/images/rm662558465',
    url: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg'
  },
  filmography: ['1', '2', '3', '4', '5', '6', '7', '8'].length
}
