import { ForwardRefExoticComponent, ReactNode } from 'react'

import {
  AlignItems,
  FlexDirections,
  Gutters,
  JustifyContents,
  ResponsiveGutters,
} from '../../types'
import GridItem from './GridItem'

export interface GridProps {
  children?: ReactNode
  className?: string
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  gutter?: Gutters | ResponsiveGutters
}

export interface GridItemProps {
  children?: ReactNode
  className?: string
  span?: number | ResponsiveGutters
  offset?: number | ResponsiveGutters
  order?: number | ResponsiveGutters
}

export interface GridCompoundProps extends ForwardRefExoticComponent<GridProps> {
  Item: typeof GridItem
}
