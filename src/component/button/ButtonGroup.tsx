import { Children, cloneElement, FC, isValidElement } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { ButtonGroupProps } from './types'

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, className, variant, size, icon, iconPosition, rounded, type, shadow, ...rest } =
    {
      ...useKreattixContext().ButtonGroup,
      ...props,
    }
  const classes = classnames(
    {
      [`btn-group`]: true,
      [`btn-shadow`]: shadow,
    },
    className,
    true,
  )
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...{ type, variant, size, rounded, icon, iconPosition, shadow },
        ...child.props,
      })
    }
    return child
  })

  return (
    <div className={classes} {...rest}>
      {childrenWithProps}
    </div>
  )
}

export default ButtonGroup
