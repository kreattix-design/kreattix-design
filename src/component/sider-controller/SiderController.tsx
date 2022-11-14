import { IconNames } from 'kreattix-design-icons/dist/types'
import { cloneElement, FC, isValidElement } from 'react'

import Icon from '../icon'
import { useKreattixAppContext } from '../kreattix-app/KreattixApp'
import { SiderControllerProps } from './types'

const SiderController: FC<SiderControllerProps> = ({ siderKey, icon }) => {
  const {
    sider: { getSider },
  } = useKreattixAppContext()
  const siderToggleHandler = () => {
    getSider(siderKey || '')?.toggleSider()
  }

  if (siderKey) {
    if (typeof icon === 'string') {
      return <Icon icon={icon as IconNames} onClick={siderToggleHandler} />
    } else if (isValidElement(icon)) {
      const iconProps = icon.props
      const onClick = () => {
        if (iconProps.onClick) iconProps.onClick()
        siderToggleHandler()
      }
      return cloneElement(icon, { ...iconProps, onClick })
    }
  }
  return null
}

export default SiderController
