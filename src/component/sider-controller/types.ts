import { IconNames } from 'kreattix-design-icons/dist/types'
import { ReactNode } from 'react'

export interface SiderControllerProps {
  className?: string
  icon?: IconNames
  accentIcon?: IconNames
  iconComponent?: ReactNode
  accentIconComponent?: ReactNode
  siderKey?: string
}
