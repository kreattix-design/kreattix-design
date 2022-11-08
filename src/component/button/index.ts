import { default as _Button } from './Button'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'
import { ButtonCompoundProps } from './types'

const Button = _Button as ButtonCompoundProps
Button.Group = ButtonGroup
Button.Link = ButtonLink

export { default as ButtonGroup } from './ButtonGroup'
export { default as ButtonLink } from './ButtonLink'
export * from './types'
export default Button
