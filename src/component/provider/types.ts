import { ReactNode } from 'react'

import { BoxProps } from '../box/types'

export interface KreattixContextProps {
  Box: Pick<BoxProps, 'align' | 'justify' | 'direction' | 'size' | 'flex' | 'wrap' | 'gutter'>
}

export interface ProviderProps {
  value: KreattixContextProps
  children?: ReactNode
}
