import { IconNames } from 'kreattix-design-icons/dist/types'
import { cloneElement, FC, isValidElement } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { useKreattixContext } from '../provider'
import { HeaderProps } from './types'

const Header: FC<HeaderProps> = (props) => {
  const { children, className, siderController, iconName } = {
    ...useKreattixContext().LayoutHeader,
    ...props,
  }
  const {
    sider: { getSider },
  } = useKreattixAppContext()

  const siderToggleHandler = () => {
    getSider(siderController?.siderKey || '')?.toggleSider()
  }

  const siderToggler = () => {
    if (siderController?.icon) {
      if (typeof siderController.icon === 'string') {
        return (
          siderController && (
            <Icon
              icon={(siderController.icon as IconNames) || iconName}
              onClick={siderToggleHandler}
            />
          )
        )
      } else if (isValidElement(siderController.icon)) {
        const iconProps = siderController.icon.props
        const onClick = () => {
          if (iconProps.onClick) iconProps.onClick()
          siderToggleHandler()
        }
        return cloneElement(siderController.icon, { ...iconProps, onClick })
      }
    }
    return (
      siderController?.siderKey && (
        <Icon icon={iconName as IconNames} onClick={siderToggleHandler} />
      )
    )
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
