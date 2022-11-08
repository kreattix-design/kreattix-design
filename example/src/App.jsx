import { Box, Button, Icon, Provider } from 'kreattix-design'

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
        <Button size="large" icon="ArrowRight" iconPosition="end">
          Test Button
        </Button>
        <h1>
          Vite <Icon icon="Plus" size="small" /> React
        </h1>
      </Box>
    </Provider>
  )
}

export default App
