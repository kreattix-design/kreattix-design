import { createContext, FC, useMemo } from 'react'

import { classnames } from '../../utils'
import { LayoutContextProps, LayoutProps } from './types'

export const LayoutContext = createContext<LayoutContextProps>({
  addSider: () => null,
  removeSider: () => null,
})

const Layout: FC<LayoutProps> = (props) => {
  const { children, className, hasSider } = props

  let siders: string[] = []
  const setSiders = (sider: string) => (siders = [...siders, sider])

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
      addSider: setSiders,
      removeSider: (siderKey) => siders.filter((key) => key !== siderKey),
    }),
    [siders],
  )

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={classes}>{children}</div>
    </LayoutContext.Provider>
  )
}

export default Layout
