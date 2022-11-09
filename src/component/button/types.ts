import { IconNames } from 'kreattix-design-icons/dist/types'
import { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react'

import { Sizes, Variants } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

export type IconPositions = 'start' | 'end'
export type ButtonTypes = 'solid' | 'outlined' | 'text'

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  pilled?: boolean
  disabled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
  fluid?: boolean
}

export interface ButtonLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  pilled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
  fluid?: boolean
}

export interface ButtonGroupProps {
  children?: ReactNode
  className?: string
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  pilled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
  shadow?: boolean
  fluid?: boolean
}

export interface ButtonCompoundProps extends ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
  Link: typeof ButtonLink
}
