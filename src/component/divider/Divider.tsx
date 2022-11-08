import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { DividerProps } from './types'

const Divider: FC<DividerProps> = (props) => {
  const { children, className, direction, type, plain, orientation } = {
    ...useKreattixContext().Divider,
    ...props,
  }
  const classes = classnames(
    {
      [`divider`]: true,
      [`divider-with-text`]: direction === 'horizontal' && children,
      [`divider-${direction}`]: direction,
      [`divider-${type}`]: type,
      [`divider-plain`]: plain,
      [`divider-${orientation}`]: orientation,
    },
    className,
    true,
  )
  const innerTextClasses = classnames(
    {
      [`divider-inner-text`]: true,
    },
    '',
    true,
  )
  return (
    <div className={classes}>
      {direction === 'horizontal' ? <div className={innerTextClasses}>{children}</div> : null}
    </div>
  )
}

export default Divider
