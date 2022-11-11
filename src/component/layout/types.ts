import { ForwardRefExoticComponent, ReactNode } from 'react'

import Content from './Content'
import Header from './Header'
import Sider from './Sider'

export interface LayoutContextProps {
  addSider: (siderKey: string) => void
  removeSider: (siderKey: string) => void
}

export interface LayoutProp {
  children?: ReactNode
  className?: string
  hasSider?: boolean
}

export interface HeaderProp {
  children?: ReactNode
  className?: string
  targetSider?: string
}

export interface ContentProp {
  children?: ReactNode
  className?: string
  boxed?: boolean
}

export interface SiderProps {
  children?: ReactNode
  className?: string
  siderKey: string
}

export interface LayoutCompoundProps extends ForwardRefExoticComponent<LayoutProp> {
  Sider: typeof Sider
  Header: typeof Header
  Content: typeof Content
}
