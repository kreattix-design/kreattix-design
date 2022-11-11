import { ReactNode } from 'react'

import { BorderStyles, FlexDirections, Orientations } from '../../types'

export interface DividerProps {
  children: ReactNode
  className: string
  direction?: FlexDirections
  type?: BorderStyles
  plain?: boolean
  orientation?: Orientations
}
