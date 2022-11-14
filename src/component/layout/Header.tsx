import { merge } from 'lodash'
import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import SiderController from '../sider-controller'
import { HeaderProps } from './types'

const Header: FC<HeaderProps> = (props) => {
  const { children, className, siderController } = merge(useKreattixContext().LayoutHeader, props)

  const classes = classnames(`layout-header`, className, true)

  return (
    <header className={classes}>
      <SiderController {...siderController} />
      {children}
    </header>
  )
}

export default Header
