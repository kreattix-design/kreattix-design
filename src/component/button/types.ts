import { IconNames } from 'kreattix-design-icons/dist/types'
import { DOMAttributes, ForwardRefExoticComponent, ReactNode } from 'react'

import { Sizes, Variants } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

export type IconPositions = 'start' | 'end'
export type ButtonTypes = 'solid' | 'outlined' | 'text'

export interface DefaultButtonProps {
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

export interface ButtonProps extends DefaultButtonProps, DOMAttributes<HTMLButtonElement> {
  disabled?: boolean
}

export interface ButtonLinkProps extends DefaultButtonProps, DOMAttributes<HTMLAnchorElement> {}

export interface ButtonGroupProps extends DefaultButtonProps {
  children?: ReactNode
  className?: string
}

export interface ButtonCompoundProps extends ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
  Link: typeof ButtonLink
}
