import { KreattixContextProps } from './types'

export const DefaultConfig: KreattixContextProps = {
  Box: {},
  Icon: {
    icon: 'Close',
  },
  Button: {
    iconPosition: 'start',
    rounded: false,
    type: 'solid',
  },
  ButtonLink: {
    iconPosition: 'start',
    rounded: false,
    type: 'text',
  },
  ButtonGroup: {
    iconPosition: 'start',
    rounded: false,
    type: 'solid',
  },
  Container: {},
  Divider: {
    direction: 'horizontal',
    type: 'solid',
    plain: false,
    orientation: 'center',
  },
  Grid: {
    gutter: 3,
  },
  Text: {
    ellipsis: false,
  },
  Paragraph: {
    align: 'justify',
    ellipsis: false,
  },
  Title: {
    level: 1,
    ellipsis: false,
  },
}
