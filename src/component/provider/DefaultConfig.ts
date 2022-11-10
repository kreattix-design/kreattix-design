import { KreattixContextProps } from './types'

export const DefaultConfig: KreattixContextProps = {
  Box: {},
  Button: {
    type: 'solid',
  },
  ButtonGroup: {
    type: 'solid',
  },
  ButtonLink: {
    type: 'text',
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
  Icon: {
    icon: 'Close',
  },
  Paragraph: {
    align: 'justify',
    ellipsis: false,
  },
  Text: {
    ellipsis: false,
  },
  Title: {
    level: 1,
    ellipsis: false,
  },
}
