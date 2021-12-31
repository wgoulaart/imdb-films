import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }



  a {
    color: inherit;
    text-decoration: none;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: var(--font-base);
    font-size: var(--size-base);
    color: var(--color-white);
    background-color: var(--bg-app);
  }

  html {
    --bg-app: #191B1F;
    --color-dark: #1F1F1F;
    --color-white: #ffffff;
    --font-base: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --size-small: 14px;
    --size-base: 16px;
    --size-large: 36px;
    --size-xlarge: 48px;
  }
`
export default GlobalStyles
