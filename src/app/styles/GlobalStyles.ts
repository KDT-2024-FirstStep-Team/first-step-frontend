'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --gr10: #1a1919;
    --gr20: #272625;
    --gr30: #343232;
    --gr40: #4e4b4b;
    --gr50: #8f8a8a;
    --gr60: #c1bebe;
    --gr70: #e6e5e6;
    --gr80: #f3f2f2;
    --gr90: #f8f7f7;
    --gr100: #ffffff;
    --pr10: #ec6560;
    --pr20: #f4a9a4;
    --pr30: #f9d4d2;
    --pr40: #fdeded;
    --pr50: #fff6f5;
  }

  body {
    background-color: var(--gr100);
    color: var(--gr20);
    font-family: 'Pretendard', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .app-container {
    position: relative;
    margin: 0 auto;
    max-width: 450px;
  }

  .content {
    margin-top: 64px;
    height: calc(100vh - 64px - 86px);
    overflow-y: auto;
    width: 100%;
  }
`;

export default GlobalStyles;
