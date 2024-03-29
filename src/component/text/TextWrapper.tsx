import { FC } from 'react'

import { TextWrapperProps } from './types'

export const sliptWrapperProps = (props: { [key: string]: any }) => {
  const { children, mark, code, keyboard, underline, deleted, strong, italic, ...itemProps } = props
  const wrapperProps = {
    children,
    mark,
    code,
    keyboard,
    underline,
    deleted,
    strong,
    italic,
  }
  return { wrapperProps, itemProps }
}

export const TextWrapper: FC<TextWrapperProps> = ({
  children,
  mark,
  code,
  keyboard,
  underline,
  deleted,
  strong,
  italic,
}) => {
  let wrappedChild = <>{children}</>
  if (italic) wrappedChild = <i>{wrappedChild}</i>
  if (strong) wrappedChild = <strong>{wrappedChild}</strong>
  if (deleted) wrappedChild = <del>{wrappedChild}</del>
  if (underline) wrappedChild = <u>{wrappedChild}</u>
  if (mark) wrappedChild = <mark>{wrappedChild}</mark>
  if (keyboard) wrappedChild = <kbd>{wrappedChild}</kbd>
  if (code) wrappedChild = <code>{wrappedChild}</code>

  return wrappedChild
}
