import { createGlobalStyle } from 'styled-components';
import { device } from './devices';
const GlobalStyle = createGlobalStyle`
    :root {
        --space-unit: 1em;
        --space-xxs:  calc(0.25 * var(--space-unit)); 
        --space-xs:   calc(0.5 * var(--space-unit));  
        --space-sm:   calc(0.75 * var(--space-unit)); 
        --space-md:   calc(1.25 * var(--space-unit)); 
        --space-lg:   calc(2 * var(--space-unit)); 
        --space-xl:   calc(5 * var(--space-unit));   
        --space-xxl:   calc(10.25 * var(--space-unit)); 
    }

    @media ${device.tablet} {
        :root {
            --space-unit: 1.7em;
        }
    }

    @media ${device.desktop} {
        :root {
            --space-unit: 2em;
        }
    }

   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Rubik', sans-serif; 
       cursor: none;
   }
   
   html {
    font-size: 125%;
    background-color: #44756b;
    overflow-x: hidden;
  }

  ::selection {
    background-color: #A98AFE;
  }

   body {
      line-height: 1.4;
      overflow-x: hidden;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }
    
    body::-webkit-scrollbar-track {
        background-color: #333a47;
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #0047b4;
    }

   .headroom-wrapper {
    position: fixed;
    z-index: 999;
   }

   .headroom--unpinned {
    svg {
        background-color: #D65F32 !important;
        color: #f5f5f5 !important;
    }
   }

   .shake-it {
    animation-name: horizontal-shaking;
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 2;
}

@keyframes horizontal-shaking {
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
   }

   #spinner {
        margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
    }
  
    @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
`;

export default GlobalStyle;
