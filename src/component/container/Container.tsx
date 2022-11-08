import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { ContainerProps } from './types'

const Container: FC<ContainerProps> = (props) => {
  const { children, className, fluid, ...rest } = { ...useKreattixContext().Container, ...props }

  const classes = classnames(
    {
      [`container`]: !fluid,
      [`container-fluid`]: fluid === true,
      [`container-${fluid}`]: fluid !== true && fluid !== false,
    },
    className,
    true,
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Container
