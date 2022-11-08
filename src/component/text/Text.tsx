import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TextProps } from './types'

const Text: FC<TextProps> = (props) => {
  const { className, variant, ellipsis, disabled, ...rest } = {
    ...useKreattixContext().Text,
    ...props,
  }
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-disabled`]: disabled,
      [`text-ellipsis-single-line`]: ellipsis === true,
    },
    className,
  )

  const { wrapperProps, itemProps } = sliptWrapperProps(rest)

  return (
    <span className={classes} {...itemProps}>
      <TextWrapper {...wrapperProps} />
    </span>
  )
}

export default Text
