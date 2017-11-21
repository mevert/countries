import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import CountriesContainer from './container/countriesContainer'

const theme = createMuiTheme()

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <CountriesContainer />
    </div>
  </MuiThemeProvider>
)

export default App
