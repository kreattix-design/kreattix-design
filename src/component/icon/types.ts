import { IconNames } from 'kreattix-design-icons/dist/types'
import { CSSProperties, DOMAttributes } from 'react'

import { Sizes } from '../../types'

export type IconShapes = 'none' | 'circle' | 'square'
export type IconTypes = 'outlined' | 'filled' | 'toned'

export interface IconProps extends DOMAttributes<HTMLSpanElement> {
  icon: IconNames
  shape?: IconShapes
  type?: IconTypes
  size?: Sizes
  color?: string
  style?: CSSProperties
  className?: string
}
