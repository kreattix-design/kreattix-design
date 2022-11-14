import { IconNames } from 'kreattix-design-icons/dist/types'
import { cloneElement, FC, isValidElement, useState } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { SiderControllerProps } from './types'

const SiderController: FC<SiderControllerProps> = ({ className, siderKey, icon, accentIcon }) => {
  const { sider } = useKreattixAppContext()

  const [activeIcon, setActiveIcon] = useState<boolean>(true)

  const siderToggleHandler = () => {
    if (accentIcon) setActiveIcon((prev) => !prev)
    sider.getSider(siderKey || '')?.toggleSider()
  }

  const classes = classnames(`sider-controller`, className, true)

  if (siderKey) {
    const displayIcon = activeIcon ? icon : accentIcon
    if (typeof displayIcon === 'string') {
      return (
        <Icon className={classes} icon={displayIcon as IconNames} onClick={siderToggleHandler} />
      )
    } else if (isValidElement(displayIcon)) {
      const iconProps = displayIcon.props as any
      const onClick = () => {
        if (iconProps.onClick) iconProps.onClick()
        siderToggleHandler()
      }
      return cloneElement(displayIcon, { ...iconProps, onClick })
    }
  }
  return null
}

export default SiderController
