import { DOMAttributes, ReactNode } from 'react'

import { Screens } from '../../types'

export interface ContainerProps extends DOMAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  fluid?: boolean | Screens
}
