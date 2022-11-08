import { IconNames } from 'kreattix-design-icons/dist/types'
import { ForwardRefExoticComponent } from 'react'

import { Sizes, Variants } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

export type IconPositions = 'start' | 'end'
export type ButtonTypes = 'solid' | 'outline' | 'text'

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  disabled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
}

export interface ButtonLinkProps extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
}

export interface ButtonGroupProps {
  children?: React.ReactNode
  className?: string
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
}

export interface ButtonCompoundProps extends ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
  Link: typeof ButtonLink
}
