import { FC } from 'react'

import { ResponsiveGutters } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { BoxProps } from './types'

const Box: FC<BoxProps> = (props) => {
  const { children, className, align, justify, direction, size, flex, wrap, gutter, ...rest } = {
    ...useKreattixContext().Box,
    ...props,
  }

  const isFlex = align || justify || direction || flex || gutter

  const responsiveClasses: { [key: string]: boolean } = {}
  if (gutter && typeof gutter === 'object') {
    Object.keys(gutter).forEach((item) => {
      const key = item as keyof ResponsiveGutters
      responsiveClasses[`g-${key}-${gutter[key]}`] = true
    })
  }

  const classes = classnames(
    {
      [`box`]: true,
      [`box-flex`]: isFlex,
      [`box-inline`]: !isFlex && size === 'hug-content',
      [`box-flex-inline`]: isFlex && size === 'hug-content',
      [`box-${size}`]: size && size !== 'hug-content',
    },
    classnames(
      {
        [`align-${align}`]: align,
        [`justify-${justify}`]: justify,
        [`direction-${direction}`]: direction,
        [`wrap`]: wrap,
        [`g-${gutter}`]: (gutter || gutter === 0) && !isNaN(Number(gutter.toString())),
        ...responsiveClasses,
      },
      className,
    ),
    true,
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Box
