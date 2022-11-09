import { ForwardRefExoticComponent, HTMLAttributes } from 'react'

import {
  AlignItems,
  FlexDirections,
  Gutters,
  JustifyContents,
  ResponsiveGutters,
} from '../../types'
import GridItem from './GridItem'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  gutter?: Gutters | ResponsiveGutters
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: number | ResponsiveGutters
  offset?: number | ResponsiveGutters
  order?: number | ResponsiveGutters
}

export interface GridCompoundProps extends ForwardRefExoticComponent<GridProps> {
  Item: typeof GridItem
}
