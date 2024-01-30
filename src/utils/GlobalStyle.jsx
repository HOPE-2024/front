import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
        ${reset}
  :root {
    --BLUE : #136CFB ;  
    --SKY : #3C84F8 ;
    --NAVY : #023382 ;
    --DEEPBLUE :  #023B96;
    --BLACK : #333;
    --WHITE : #fff;
  }
  * {
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, textarea{
    font-family: 'Noto Sans KR', sans-serif;
    color: #333333;
  }
  h2 {
    font-size: 2.2em;
  }
  h3 {
    font-size: 1.6em;
  }
  .container {
    max-width: 1280px;
    margin: 0 auto;
    @media only screen and (max-width:1280px){
      padding: 0 20px;
    }
  }
  @media only screen and (max-width:768px) {
    body {
      font-size: 12px;
    }
    .container {
      width: 90vw;
      padding: 0;
    }
  }
  

`;
export default GlobalStyle;
