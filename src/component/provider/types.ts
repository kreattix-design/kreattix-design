import { ReactNode } from 'react'

import { BoxProps } from '../box/types'
import { IconProps } from '../icon'

export interface KreattixContextProps {
  Box: Pick<BoxProps, 'align' | 'justify' | 'direction' | 'size' | 'flex' | 'wrap' | 'gutter'>
  Icon: Pick<IconProps, 'icon' | 'shape' | 'type' | 'size' | 'color'>
}

export interface ProviderProps {
  value: KreattixContextProps
  children?: ReactNode
}
