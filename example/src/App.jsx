import { Box, Button, Colors, Icon, KreattixApp, Layout, SiderController } from 'kreattix-design'

function App() {
  return (
    <KreattixApp>
      <Layout hasSider>
        <Layout.Sider siderKey="main-sider"></Layout.Sider>
        <Layout>
          <Layout.Header siderController={{ siderKey: 'main-sider' }}>Test</Layout.Header>
          <Layout.Content boxed>
            <Box gutter={3}>
              <Button variant="danger" type="text" pilled icon="ArrowLeft">
                Button
              </Button>
              <SiderController siderKey="main-sider" icon="MenuLeft" accentIcon="MenuRight" />
              <Icon icon="Close" shape="square" type="toned" color={Colors.primary} />
            </Box>
          </Layout.Content>
        </Layout>
      </Layout>
    </KreattixApp>
  )
}

export default App
