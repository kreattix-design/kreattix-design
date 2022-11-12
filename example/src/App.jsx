import { Box, Button, Colors, Icon, KreattixApp, Layout } from 'kreattix-design'

function App() {
  return (
    <KreattixApp>
      <Layout hasSider>
        <Layout.Sider siderKey="main-sider"></Layout.Sider>
        <Layout>
          <Layout.Header siderController={{ siderKey: 'main-sider' }}></Layout.Header>
          <Layout.Content boxed>
            <Box gutter={3}>
              <Button variant="danger" type="text" pilled icon="ArrowLeft">
                Button
              </Button>
              <Icon icon="Close" shape="square" type="toned" color={Colors.primary} />
            </Box>
          </Layout.Content>
        </Layout>
      </Layout>
    </KreattixApp>
  )
}

export default App
