import { IconNames } from 'kreattix-design-icons/dist/types'
import { FC } from 'react'

import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixContext } from '../provider'
import { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant,
    size,
    icon,
    iconPosition,
    pilled,
    disabled,
    type,
    shadow,
    fluid,
    ...rest
  } = { ...useKreattixContext().Button, ...props }
  const classes = classnames(
    {
      [`btn`]: true,
      [`btn-disabled`]: disabled,
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
  const iconClasses = classnames(`btn-icon`, '', true)
  const iconComponent = (icon: IconNames) => <Icon icon={icon} className={iconClasses} />

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {!icon ? (
        children
      ) : (
        <>
          {iconPosition !== 'end' && iconComponent(icon)}
          {children && <span>{children}</span>}
          {iconPosition === 'end' && iconComponent(icon)}
        </>
      )}
    </button>
  )
}

export default Button
