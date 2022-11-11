import { KreattixApp, Layout } from 'kreattix-design'

function App() {
  return (
    <KreattixApp>
      <Layout hasSider>
        <Layout.Sider siderKey="main-sider">Test</Layout.Sider>
        <Layout>
          <Layout.Header targetSider="main-sider">Test</Layout.Header>
          <Layout.Content boxed></Layout.Content>
        </Layout>
      </Layout>
    </KreattixApp>
  )
}

export default App
