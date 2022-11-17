import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
  }

  body{
    font-family: 'Libre Baskerville', DM Sans;

  }


`;

export default GlobalStyle;
