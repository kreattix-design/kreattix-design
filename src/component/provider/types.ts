import { ReactNode } from 'react'

import { BoxProps, ButtonGroupProps, ButtonLinkProps, ButtonProps, IconProps } from '../../types'

export interface KreattixContextProps {
  Box: Pick<BoxProps, 'align' | 'justify' | 'direction' | 'size' | 'flex' | 'wrap' | 'gutter'>
  Icon: Pick<IconProps, 'icon' | 'shape' | 'type' | 'size' | 'color'>

  Button: Pick<
    ButtonProps,
    'type' | 'variant' | 'size' | 'rounded' | 'disabled' | 'icon' | 'iconPosition' | 'shadow'
  >
  ButtonLink: Pick<
    ButtonLinkProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition' | 'shadow'
  >
  ButtonGroup: Pick<
    ButtonGroupProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition' | 'shadow'
  >
}

export interface ProviderProps {
  value: KreattixContextProps
  children?: ReactNode
}
