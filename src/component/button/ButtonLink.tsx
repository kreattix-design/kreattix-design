import { IconNames } from 'kreattix-design-icons/dist/types'
import { FC } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixContext } from '../provider'
import { ButtonLinkProps } from './types'

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const {
    children,
    className,
    variant,
    size,
    icon,
    iconPosition,
    pilled,
    type,
    shadow,
    fluid,
    ...rest
  } = {
    ...useKreattixContext().ButtonLink,
    ...props,
  }
  const classes = classnames(
    {
      [`btn`]: true,
      [`btn-fluid`]: fluid,
      [`btn-${variant}`]: variant,
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-pilled`]: pilled,
      [`btn-with-icon`]: icon && children,
      [`btn-only-icon`]: icon && !children,
      [`btn-icon-${iconPosition}`]: icon && iconPosition,
      [`btn-shadow`]: shadow,
    },
    className,
    true,
  )
  const iconClasses = classnames(
    {
      [`btn-icon`]: true,
    },
    '',
    true,
  )
  const iconComponent = (icon: IconNames) => <Icon icon={icon} className={iconClasses} />

  return (
    <a className={classes} {...rest}>
      {!icon ? (
        children
      ) : (
        <>
          {iconPosition !== 'end' && iconComponent(icon)}
          {children && <span>{children}</span>}
          {iconPosition === 'end' && iconComponent(icon)}
        </>
      )}
    </a>
  )
}

export default ButtonLink
