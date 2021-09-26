import { createGlobalStyle } from 'styled-components'
import { md, sm, xs } from './components/Theme/breakpoints'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(203, 203, 210, 0.15);
    
    font-size: 16px;

    ${md`
font-size: 15px;
    `}

    ${sm`
      background-color: #edf5ff;
    `}
    
    ${xs`
      font-size: 14px;
    `}

  }

  input {
    font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export default GlobalStyle
