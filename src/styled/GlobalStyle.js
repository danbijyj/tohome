import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  :root {
  --scrollbar-width: 17px; 
  }

  body {
    font-size: 16px;
    line-height: 1.6;
    color:#333;
        /* overflow-x: hidden; */
        word-break: keep-all;
  }
  .pretendard {
    font-family: 'Pretendard' !important;
    &.fw200 {
      font-weight: 200 !important;
    }
    &.fw300 {
      font-weight: 300 !important;
    }
    &.fw400 {
      font-weight: 400 !important;
    }
    &.fw500{
      font-weight: 500 !important;
    }
    &.fw600{
      font-weight: 600 !important;
    }
    &.fz16{
      font-size: 16px !important;
    }  
    &.fz20{
      font-size: 20px !important;
    }  
  }
 

  a, button {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { width:1440px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 20px;   }
   button { border:none; cursor: pointer; }

   .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export default GlobalStyle;
