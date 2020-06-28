import { createGlobalStyle } from 'styled-components';

import { FONT_SIZE_ROOT, COLOR_GENERIC_TEXT } from './helper/constants/styles';

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    outline: 0;
    box-sizing: border-box;
  }

  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 2rem;
  }

  html {
    color: ${COLOR_GENERIC_TEXT};
    font-size: ${FONT_SIZE_ROOT};
    box-sizing: border-box;
    word-break: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 400;
    line-height: 1.1;
    text-rendering: optimizeLegibility;
  }
`;
