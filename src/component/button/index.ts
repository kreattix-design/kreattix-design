import { default as _Button } from './Button'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'
import { ButtonCompoundProps } from './types'

const Button = _Button as ButtonCompoundProps
Button.Group = ButtonGroup
Button.Link = ButtonLink

export { ButtonGroup, ButtonLink }
export * from './types'
export default Button
