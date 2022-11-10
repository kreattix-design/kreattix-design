import { ReactNode } from 'react'

import {
  BoxProps,
  ButtonGroupProps,
  ButtonLinkProps,
  ButtonProps,
  ContainerProps,
  DividerProps,
  GridProps,
  IconProps,
  ParagraphProps,
  TextProps,
  TitleProps,
} from '../../types'

export interface KreattixContextProps {
  Box: Pick<BoxProps, 'align' | 'justify' | 'direction' | 'size' | 'flex' | 'wrap' | 'gutter'>
  Button: Pick<
    ButtonProps,
    | 'type'
    | 'variant'
    | 'size'
    | 'pilled'
    | 'disabled'
    | 'icon'
    | 'iconPosition'
    | 'shadow'
    | 'fluid'
  >
  ButtonGroup: Pick<
    ButtonGroupProps,
    'type' | 'variant' | 'size' | 'pilled' | 'icon' | 'iconPosition' | 'shadow' | 'fluid'
  >
  ButtonLink: Pick<
    ButtonLinkProps,
    'type' | 'variant' | 'size' | 'pilled' | 'icon' | 'iconPosition' | 'shadow' | 'fluid'
  >
  Container: Pick<ContainerProps, 'fluid'>
  Divider: Pick<DividerProps, 'direction' | 'type' | 'plain' | 'orientation'>
  Grid: Pick<GridProps, 'align' | 'justify' | 'direction' | 'gutter'>
  Icon: Pick<IconProps, 'icon' | 'shape' | 'type' | 'size' | 'color'>
  Paragraph: Pick<ParagraphProps, 'variant' | 'ellipsis' | 'align'>
  Text: Pick<TextProps, 'variant' | 'ellipsis' | 'disabled'>
  Title: Pick<TitleProps, 'variant' | 'ellipsis' | 'align' | 'level'>
}

export interface ProviderProps {
  value: KreattixContextProps
  children?: ReactNode
}
