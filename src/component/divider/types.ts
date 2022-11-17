import { DOMAttributes, ReactNode } from 'react'

import { BorderStyles, FlexDirections, Orientations } from '../../types'

export interface DividerProps extends DOMAttributes<HTMLDivElement> {
  children: ReactNode
  className: string
  direction?: FlexDirections
  type?: BorderStyles
  plain?: boolean
  orientation?: Orientations
}
