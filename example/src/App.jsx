import { Box, Icon, Provider } from 'kreattix-design'

import reactLogo from './assets/react.svg'

function App() {
  return (
    <Provider value={{}}>
      <Box size="fullscreen" align="center" justify="center">
        <div className="App">
          <Box justify="center">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Box>

          <h1>
            Vite <Icon icon="Plus" /> React
          </h1>
        </div>
      </Box>
    </Provider>
  )
}

export default App
