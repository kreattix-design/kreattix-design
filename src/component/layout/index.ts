import Content from './Content'
import Header from './Header'
import { default as _Layout } from './Layout'
import Sider from './Sider'
import { LayoutCompoundProps } from './types'

const Layout = _Layout as LayoutCompoundProps
Layout.Sider = Sider
Layout.Header = Header
Layout.Content = Content

export { default as Content } from './Content'
export { default as Header } from './Header'
export { default as Sider } from './Sider'
export * from './types'
export default Layout
