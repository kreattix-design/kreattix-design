import * as IconsList from 'kreattix-design-icons'
import { IconNameListProps } from 'kreattix-design-icons/dist/types'
import { createElement, CSSProperties, FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { IconProps } from './types'

const Icon: FC<IconProps> = (props) => {
  const { className, icon, shape, type, size, color, style, ...rest } = {
    ...useKreattixContext().Icon,
    ...props,
  }

  const classes = classnames(
    {
      [`icon`]: true,
      [`icon-${size}`]: size,
    },
    className,
    true,
  )
  const Icons: IconNameListProps = IconsList
  const shapes = ['circle', 'square']

  const styles: CSSProperties = style || {}
  if (color) styles.color = color

  let iconName = icon
  if (shape && shapes.includes(shape)) {
    switch (shape) {
      case 'square':
        iconName += 'Square'
        break
      default:
        iconName += 'Circle'
        break
    }
    switch (type) {
      case 'filled':
        iconName += 'Filled'
        break
      case 'toned':
        iconName += 'Toned'
        break
      default:
        iconName += 'Outlined'
        break
    }
  }

  if (!Icons[iconName]) return null
  return (
    <span className={classes} style={styles} {...rest}>
      {createElement(Icons[iconName], {})}
    </span>
  )
}

export default Icon
