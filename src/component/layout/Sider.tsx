import { FC, useContext, useEffect } from 'react'

import { classnames } from '../../utils'
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
  const { children, className, siderKey } = props

  const { addSider, removeSider } = useContext(LayoutContext)

  const classes = classnames({ [`layout-sider`]: true }, className, true)
  const contentClasses = classnames({ [`layout-sider-content`]: true }, '', true)

  useEffect(() => {
    const uniqueId = siderKey || generateId('sider-')
    addSider(uniqueId)
    return () => removeSider(uniqueId)
  }, [])

  return (
    <aside className={classes}>
      <div className={contentClasses}>{children}</div>
    </aside>
  )
}

export default Sider
