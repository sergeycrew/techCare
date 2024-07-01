import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import Manrope from './fonts/Manrope-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }


body {
  margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
  }

p {
    padding: 0;
    margin: 0;
}

ul,
ol,
 {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input, textarea, select, button {
  font: inherit;
}

button {
    cursor: pointer;
    border: none;
  }
  
  a {
    color: black;
  }

  a:visited {
    color: black;
  }
`;
