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
    rounded,
    disabled,
    type,
    shadow,
    ...rest
  } = { ...useKreattixContext().Button, ...props }
  const classes = classnames(
    {
      [`btn`]: true,
      [`btn-disabled`]: disabled,
      [`btn-${variant}`]: variant,
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-rounded`]: rounded,
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
    <button className={classes} disabled={disabled} {...rest}>
      {!icon ? (
        children
      ) : (
        <>
          {iconPosition === 'start' && iconComponent(icon)}
          {children && <span>{children}</span>}
          {iconPosition === 'end' && iconComponent(icon)}
        </>
      )}
    </button>
  )
}

export default Button
