import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 

   }
   #root{
       margin:0 auto;
   }

   html {
    font-size: 125%;
    background-color: #44756b;
  } /*20px*/
  

   body {
      line-height: 1.6;
      overflow-x: hidden;
   }

   .headroom-wrapper {
    position: fixed;
    z-index: 999;
   }

   .headroom--unpinned {
    svg {
        background-color: #ff944e !important;
        color: #f5f5f5 !important;
    }
   }
`;

export default GlobalStyle;
