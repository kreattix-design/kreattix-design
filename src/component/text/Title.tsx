import { FC } from 'react'

import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TitleProps } from './types'

const Title: FC<TitleProps> = (props) => {
  const { className, level, variant, align, ellipsis, ...rest } = {
    ...useKreattixContext().Title,
    ...props,
  }
  const classes = classnames(
    {
      [`text`]: true,
      [`text-title`]: true,
      [`text-${variant}`]: variant,
      [`text-${align}`]: align,
      [`text-ellipsis-single-line`]: ellipsis,
    },
    className,
  )

  const { wrapperProps, itemProps } = sliptWrapperProps(rest)

  const newProps = { className: classes, ...itemProps }

  switch (level) {
    case 6:
      return (
        <h6 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h6>
      )
    case 5:
      return (
        <h5 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h5>
      )
    case 4:
      return (
        <h4 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h4>
      )
    case 3:
      return (
        <h3 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h3>
      )
    case 2:
      return (
        <h2 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h2>
      )
    case 1:
    default:
      return (
        <h1 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h1>
      )
  }
}

export default Title
