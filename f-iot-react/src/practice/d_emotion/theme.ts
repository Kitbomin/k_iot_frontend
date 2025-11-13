// theme.ts
// : 다크/라이트 모드

import type { Theme } from "@emotion/react";

// 다크/ 라이트 테마 정의 파일
//  -> 원래는 src/styles/theme.ts 에 저장함


export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: '#f7f7f8',
    card: '#ffffff',
    text: '#333333',
    accent: '#fda085',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
  }
}

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: '#1e1e1e',
    card: '#2b2b2b',
    text: '#f5f5f5',
    accent: '#f6d365',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.1)'    
  }
}


export type ThemeType = typeof lightTheme;