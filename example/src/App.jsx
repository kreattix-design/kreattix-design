import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  KreattixApp,
  Layout,
  Text,
} from 'kreattix-design'

function App() {
  return (
    <KreattixApp>
      <Layout>
        <Layout.Sider>Test</Layout.Sider>
        <Layout>
          <Layout.Header>Test</Layout.Header>
          <Layout.Content boxed>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <Container>
              <Box gutter={3} align="center">
                <Button variant="danger" icon="ArrowLeft" size="small">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" type="plain">
                  Test Button
                </Button>
              </Box>
              <Box gutter={3} align="center" className="mt-3">
                <Button variant="danger" icon="ArrowLeft" size="small" pilled>
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" pilled type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" pilled type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="small" pilled type="plain">
                  Test Button
                </Button>
              </Box>
              <Box gutter={3} align="center" className="mt-3">
                <Button variant="danger" icon="ArrowLeft">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" type="plain">
                  Test Button
                </Button>
              </Box>
              <Box gutter={3} align="center" className="mt-3">
                <Button variant="danger" icon="ArrowLeft" pilled>
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" pilled type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" pilled type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" pilled type="plain">
                  Test Button
                </Button>
              </Box>
              <Box gutter={3} align="center" className="mt-3">
                <Button variant="danger" icon="ArrowLeft" size="large">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" type="plain">
                  Test Button
                </Button>
              </Box>
              <Box gutter={3} align="center" className="mt-3">
                <Button variant="danger" icon="ArrowLeft" size="large" pilled>
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" pilled type="outlined">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" pilled type="text">
                  Test Button
                </Button>
                <Button variant="danger" icon="ArrowLeft" size="large" pilled type="plain">
                  Test Button
                </Button>
              </Box>
              <Divider type="dotted" orientation="left">
                <strong>Divider</strong>
              </Divider>
              <Button.Group variant="danger" pilled type="outlined">
                <Button icon="ArrowLeft">Test Button</Button>
                <Button fluid={false}>Test Button</Button>
                <Button>Test Button</Button>
              </Button.Group>
              <Grid>
                <Grid.Item>
                  <Text.Title level={4} variant="danger">
                    Vite <Icon icon="Plus" size="small" /> React
                  </Text.Title>
                </Grid.Item>
                <Grid.Item>
                  <Text.Title level={1}>
                    {`Vite `}
                    <Button type="plain">Button</Button>
                    {` React`}
                  </Text.Title>
                </Grid.Item>
              </Grid>
            </Container>
          </Layout.Content>
        </Layout>
      </Layout>
    </KreattixApp>
  )
}

export default App
