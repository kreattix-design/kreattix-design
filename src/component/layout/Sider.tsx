import { FC, useContext, useEffect, useState } from 'react'

import { classnames } from '../../utils'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { useKreattixContext } from '../provider'
import { LayoutContext } from './Layout'
import { SiderProps } from './types'

const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()

const Sider: FC<SiderProps> = (props) => {
  const { children, className, siderKey, collapsed } = {
    ...useKreattixContext().LayoutSider,
    ...props,
  }

  const { sider } = useKreattixAppContext()
  const { addSider, removeSider } = useContext(LayoutContext)
  const [siderCollapsed, setSiderCollapsed] = useState<boolean>(collapsed || false)

  const classes = classnames(
    {
      [`layout-sider`]: true,
      [`layout-sider-collapsed`]: siderCollapsed,
    },
    className,
    true,
  )
  const contentClasses = classnames({ [`layout-sider-content`]: true }, '', true)

  useEffect(() => {
    const uniqueId = siderKey || generateId('sider-')
    addSider(uniqueId)
    sider.addSider({
      siderKey: uniqueId,
      collapsed: false,
      toggleSider: () => setSiderCollapsed((prev) => !prev),
    })
    return () => {
      sider.removeSider(uniqueId)
      removeSider(uniqueId)
    }
  }, [])

  return (
    <aside className={classes}>
      <div className={contentClasses}>{children}</div>
    </aside>
  )
}

export default Sider
