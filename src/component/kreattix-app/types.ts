import { ReactNode } from 'react'

import { KreattixContextProps } from '../provider'

export interface KreattixAppProps {
  children?: ReactNode
  appConfig?: KreattixContextProps
}

export interface SiderItemProps {
  siderKey: string
  collapsed: boolean
  toggleSider: () => void
}

export interface KreattixAppContextProps {
  sider: {
    list: SiderItemProps[]
    getSider: (siderKey: string) => SiderItemProps | undefined
    addSider: (sider: SiderItemProps) => void
    removeSider: (siderKey: string) => void
  }
}
