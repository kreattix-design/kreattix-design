import Paragraph from './Paragraph'
import { default as _Text } from './Text'
import Title from './Title'
import { TextCompoundProps } from './types'

const Text = _Text as TextCompoundProps
Text.Paragraph = Paragraph
Text.Title = Title

export { Paragraph, Title }
export * from './types'
export default Text
