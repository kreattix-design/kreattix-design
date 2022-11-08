import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { ParagraphProps } from './types'

const Paragraph: FC<ParagraphProps> = (props) => {
  const { className, variant, align, ellipsis, ...rest } = {
    ...useKreattixContext().Paragraph,
    ...props,
  }
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-${align}`]: align,
      [`text-ellipsis-single-line`]: ellipsis,
    },
    className,
  )

  const { wrapperProps, itemProps } = sliptWrapperProps(rest)

  return (
    <p className={classes} {...itemProps}>
      <TextWrapper {...wrapperProps} />
    </p>
  )
}

export default Paragraph
