import { FC } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { HeaderProp } from './types'

const Header: FC<HeaderProp> = (props) => {
  const { children, className, targetSider } = props
  const {
    sider: { getSider },
  } = useKreattixAppContext()

  const siderToggler = () => {
    if (targetSider) {
      const selectedSider = getSider(targetSider)
      selectedSider?.toggleSider()
    }
  }

  const classes = classnames(`layout-header`, className, true)

  return (
    <header className={classes}>
      <Icon icon="ArrowLeft" onClick={siderToggler} />
      {children}
    </header>
  )
}

export default Header
