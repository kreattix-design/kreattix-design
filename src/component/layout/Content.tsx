import { FC } from 'react'

import { classnames } from '../../utils'
import { ContentProp } from './types'

const Content: FC<ContentProp> = (props) => {
  const { children, className, boxed } = props

  const classes = classnames(`layout-content`, className, true)

  const bodyClasses = classnames(
    {
      [`layout-content-body`]: true,
      [`layout-content-body-boxed`]: boxed,
    },
    className,
    true,
  )

  return (
    <section className={classes}>
      <div className={bodyClasses}>{children}</div>
    </section>
  )
}

export default Content
