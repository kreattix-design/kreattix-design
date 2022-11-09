import { KreattixContextProps } from './types'

export const DefaultConfig: KreattixContextProps = {
  Box: {},
  Icon: {
    icon: 'Close',
  },
  Button: {
    type: 'solid',
  },
  ButtonLink: {
    type: 'text',
  },
  ButtonGroup: {
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
