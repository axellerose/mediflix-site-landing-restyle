import { createGlobalStyle } from "styled-components"

import "fontsource-raleway/400-normal.css"
import "fontsource-raleway/500-normal.css"
import "fontsource-raleway/600-normal.css"
import "fontsource-raleway/700-normal.css"
import "typeface-nunito-sans"

export const VISUALLY_HIDDEN = "visually-hidden"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local('Raleway Regular'), local('Raleway-Regular');
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src: local('Raleway Medium'), local('Raleway-Medium');
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: local('Raleway Medium'), local('Raleway-Medium');
  }
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: local('Raleway Bold'), local('Raleway-Bold');
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Nunito Sans Regular'), local('Nunito-Regular');
  }
  @font-face {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Nunito Sans Light'), local('Nunito-Light');
  }

  :root {
    ${props => props.theme.typography.main}
  }
  * {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  input {
    padding: 0;
    border: 0;
    background: none;
    ${props => props.theme.typography.main};
    outline: 0;

    /* &:-webkit-autofill {
            border: "0";
            -webkit-transition:
              color 9999s ease-out, background-color 9999s ease-out;
            -webkit-transition-delay: 9999s;
          }
    &::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      display: none !important;
      pointer-events: none;
      position: absolute;
      right: 0
    } */
  }

  button {
    border: 0;
    background: none;
    ${props => props.theme.typography.main}
    padding: 0;
  }

  .${VISUALLY_HIDDEN} {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important; 
    width: 1px !important; 
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
`
