import { ReactNode } from 'react'

import { KreattixContextProps } from '../provider'

export interface KreattixAppProps {
  children?: ReactNode
  appConfig?: KreattixContextProps
}

export interface SiderItemProps {
  siderKey: string
  toggleSider: () => void
}

export interface KreattixAppContextProps {
  sider: {
    getSider: (siderKey: string) => SiderItemProps | undefined
    addSider: (sider: SiderItemProps) => void
    removeSider: (siderKey: string) => void
  }
}
