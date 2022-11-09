import { Box, Button, Container, Divider, Grid, Icon, Provider, Text } from 'kreattix-design'

import reactLogo from './assets/react.svg'

function App() {
  return (
    <Provider value={{}}>
      <Box size="fullscreen" align="center" justify="center" direction="vertical">
        <Box justify="center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Box>
        <Container>
          <Box gutter={3} align="center">
            <Button variant="primary" icon="ArrowLeft" size="small">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" type="outlined">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" type="plain">
              Test Button
            </Button>
          </Box>
          <Box gutter={3} align="center" className="mt-3">
            <Button variant="primary" icon="ArrowLeft" size="small" pilled>
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" pilled type="outlined">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" pilled type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="small" pilled type="plain">
              Test Button
            </Button>
          </Box>
          <Box gutter={3} align="center" className="mt-3">
            <Button variant="primary" icon="ArrowLeft">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" type="outlined">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" type="plain">
              Test Button
            </Button>
          </Box>
          <Box gutter={3} align="center" className="mt-3">
            <Button variant="primary" icon="ArrowLeft" pilled>
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" pilled type="outlined">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" pilled type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" pilled type="plain">
              Test Button
            </Button>
          </Box>
          <Box gutter={3} align="center" className="mt-3">
            <Button variant="primary" icon="ArrowLeft" size="large" fluid>
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" type="outlined">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" type="plain">
              Test Button
            </Button>
          </Box>
          <Box gutter={3} align="center" className="mt-3">
            <Button variant="primary" icon="ArrowLeft" size="large" pilled fluid>
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" pilled type="outlined" fluid>
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" pilled type="text">
              Test Button
            </Button>
            <Button variant="primary" icon="ArrowLeft" size="large" pilled type="plain">
              Test Button
            </Button>
          </Box>
          <Divider type="dotted" orientation="left">
            <strong>Divider</strong>
          </Divider>
          <Button.Group variant="primary" pilled type="outlined" fluid>
            <Button icon="ArrowLeft">Test Button</Button>
            <Button fluid={false}>Test Button</Button>
            <Button>Test Button</Button>
          </Button.Group>
          <Grid>
            <Grid.Item>
              <Text.Title level={4} variant="primary">
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
      </Box>
    </Provider>
  )
}

export default App
