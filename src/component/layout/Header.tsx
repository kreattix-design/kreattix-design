import { FC } from 'react'

import { classnames } from '../../utils'
import { HeaderProp } from './types'

const Header: FC<HeaderProp> = (props) => {
  const { children, className } = props

  const classes = classnames(
    {
      [`layout-header`]: true,
    },
    className,
    true,
  )

  return <header className={classes}>{children}</header>
}

export default Header
