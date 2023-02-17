import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Theme from "./styles"

import { ThemeProvider } from "styled-components"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
