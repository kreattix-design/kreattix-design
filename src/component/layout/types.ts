import { DOMAttributes, ForwardRefExoticComponent, ReactNode } from 'react'

import { SiderControllerProps } from '../sider-controller'
import Content from './Content'
import Header from './Header'
import Sider from './Sider'

export interface LayoutContextProps {
  addSider: (siderKey: string) => void
  removeSider: (siderKey: string) => void
}

export interface LayoutProps extends DOMAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  hasSider?: boolean
}

export interface HeaderProps extends DOMAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  siderController?: SiderControllerProps
}

export interface ContentProps extends DOMAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  boxed?: boolean
}

export interface SiderProps extends DOMAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  siderKey: string
  collapsed?: boolean
}

export interface LayoutCompoundProps extends ForwardRefExoticComponent<LayoutProps> {
  Sider: typeof Sider
  Header: typeof Header
  Content: typeof Content
}
