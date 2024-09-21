"use client";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    body {
    font-family: 'SFPro'
    }

    // Pretendard
    @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 100;
    src: url('/static/Pretendard-Thin.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 200;
    src: url('/static/Pretendard-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 300;
    src: url('/static/Pretendard-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    src: url('/static/Pretendard-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    src: url('/static/Pretendard-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    src: url('/static/Pretendard-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    src: url('/static/Pretendard-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    src: url('/static/Pretendard-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    src: url('/static/Pretendard-Black.ttf') format('truetype');
  }

  //Poppins
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('/static/Poppins-SemiBold.ttf') format('truetype');
  }

  //SFPro
  @font-face {
    font-family: 'SFPro';
    font-style: normal;
    font-weight: 400;
    src: url('/static/SF-Pro-Display-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'SFPro';
    font-style: normal;
    font-weight: 500;
    src: url('/static/SF-Pro-Display-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'SFPro';
    font-style: normal;
    font-weight: 600;
    src: url('/static/SF-Pro-Display-Semibold.otf') format('opentype');
  }

  @font-face {
    font-family: 'SFPro';
    font-style: normal;
    font-weight: 700;
    src: url('/static/SF-Pro-Display-Bold.otf') format('opentype');
  }


`;

export default GlobalStyle;
