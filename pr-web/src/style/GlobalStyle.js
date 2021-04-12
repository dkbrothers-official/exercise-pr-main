import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: light;
    font-weight: light;
    src: url("./NotoSansKR-Light.otf") format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: regular;
    font-weight: regular;
    src: url("./NotoSansKR-Regular.otf") format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: medium;
    font-weight: medium;
    src: url("./NotoSansKR-Medium.otf") format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR", sans-serif;
    font-style: bold;
    font-weight: bold;
    src: url("./NotoSansKR-Bold.otf") format("truetype");
  }
  html {
    font-family: "Noto Sans KR", sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 10px;
    @media (max-width:1900px) {
      font-size: 9px;
     }
    @media (max-width:1550px) {
      font-size: 8px;
     }
    @media (max-width:1250px) {
      font-size: 7px;
     }
  }
  * {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    
  }

  body {
    box-sizing: border-box;
    font-family: "Noto Sans KR";
    
  }
`;

export default GlobalStyle;
