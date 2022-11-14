import { IconNames } from 'kreattix-design-icons/dist/types'
import { ReactNode } from 'react'

export interface SiderControllerProps {
  className?: string
  icon?: IconNames | ReactNode
  accentIcon?: IconNames | ReactNode
  siderKey?: string
}
