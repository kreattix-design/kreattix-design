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
    'type' | 'variant' | 'size' | 'rounded' | 'disabled' | 'icon' | 'iconPosition' | 'shadow'
  >
  ButtonGroup: Pick<
    ButtonGroupProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition' | 'shadow'
  >
  ButtonLink: Pick<
    ButtonLinkProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition' | 'shadow'
  >
  Container: Pick<ContainerProps, 'fluid'>
  Divider: Pick<DividerProps, 'direction' | 'type' | 'plain' | 'orientation'>
  Icon: Pick<IconProps, 'icon' | 'shape' | 'type' | 'size' | 'color'>
  Grid: Pick<GridProps, 'align' | 'justify' | 'direction' | 'gutter'>
  Text: Pick<TextProps, 'variant' | 'ellipsis' | 'disabled'>
  Paragraph: Pick<ParagraphProps, 'variant' | 'ellipsis' | 'align'>
  Title: Pick<TitleProps, 'variant' | 'ellipsis' | 'align' | 'level'>
}

export interface ProviderProps {
  value: KreattixContextProps
  children?: ReactNode
}
