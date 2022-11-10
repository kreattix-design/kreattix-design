import { createContext, FC, useMemo, useState } from 'react'

import { classnames } from '../../utils'
import { LayoutProp } from './types'

export interface LayoutContextProps {
  addSider: (siderKey: string) => void
  removeSider: (siderKey: string) => void
}

export const LayoutContext = createContext<LayoutContextProps>({
  addSider: () => null,
  removeSider: () => null,
})

const Layout: FC<LayoutProp> = (props) => {
  const { children, className, hasSider } = props

  const [siders, setSiders] = useState<string[]>([])

  const classes = classnames(
    {
      [`layout`]: true,
      [`layout-has-sider`]: hasSider || siders.length > 0,
    },
    className,
    true,
  )

  const contextValue = useMemo<LayoutContextProps>(
    () => ({
      addSider: (siderKey) => setSiders((prev) => [...prev, siderKey]),
      removeSider: (siderKey) => siders.filter((key) => key !== siderKey),
    }),
    [],
  )

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={classes}>{children}</div>
    </LayoutContext.Provider>
  )
}

export default Layout
