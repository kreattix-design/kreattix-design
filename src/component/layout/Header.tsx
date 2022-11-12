import { IconNames } from 'kreattix-design-icons/dist/types'
import { cloneElement, FC, isValidElement } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { HeaderProps } from './types'

const Header: FC<HeaderProps> = (props) => {
  const { children, className, siderController } = props
  const {
    sider: { getSider },
  } = useKreattixAppContext()

  const siderToggleHandler = () => {
    getSider(siderController?.siderKey || '')?.toggleSider()
  }

  const siderToggler = () => {
    let iconName = 'MenuLeft' as IconNames
    if (siderController?.icon) {
      if (typeof siderController.icon === 'string') {
        iconName = siderController.icon as IconNames
      } else if (isValidElement(siderController.icon)) {
        const iconProps = siderController.icon.props
        const onClick = () => {
          if (iconProps.onClick) iconProps.onClick()
          siderToggleHandler()
        }
        return cloneElement(siderController.icon, { ...iconProps, onClick })
      }
    }

    return siderController && <Icon icon={iconName} onClick={siderToggleHandler} />
  }

  const classes = classnames(`layout-header`, className, true)

  return (
    <header className={classes}>
      {siderToggler()}
      {children}
    </header>
  )
}

export default Header
