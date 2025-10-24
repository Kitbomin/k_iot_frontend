
//! 타입 스크립트 환경 설정
/**
 * == 전체 개요 ==
 * 1. Node.js 설치 가 전제
 * 2. 프로젝트 폴더 생성
 * 3. TypeScript 컴파일러(typescript compiler - tsc) 설치
 * 4. TypeScript 설정 파일 (tsconfig.json) 생성 및 설정
 * 5. 기본 소스 구조 구성 (src 등)
 * 6. 빌드 & 실행 테스트
 * 
 * (선택)
 * ESLint + Prettier 설정
 * 
 * (선택)
 * Nodemon + ts-node 로 자동 실행 환경 구성
 */

//# 1. Node.js 설치
// 설치 확인 -> 윈도우 + r
//          -> node -v / node --version / npm -v

// +) Node.js 설치 시 npm이 자동 설치됨
//  : npm(node package manager)은 Node.js의 기본 패키기 관리 도구
//  - npm을 사용해 JS의 라이브러리를 쉽게 설치하고 관리가 가능함
//  - 프로젝트의 의존성 관리를 해줌  & 스크립트 실행 기능을 베공해줌

// == npm 기본 명령어 == //
// 1) npm init 
//  : 새로운 Node.js 프로젝트 시작
//  - 기본값으로 pakage.json 파일이 생성됨
//  - 'y' 옵션 추가 (npm init -y) => 이러면 질문없이 기본값으로  package.json 파일 생성해줌

/**
 * 
 * {
 * ! package.json (npm ini -y) 버전
    "name": "e_typescript", //? 프로젝트의 이름설정 (기본값 - 현재 디렉터리 이름)
    "version": "1.0.0",     //? 프로젝트 시작 버전 
    "description": "",      //? 프로젝트의 간단한 설명
    "main": "index.js",     //? 진입점 JS 파일 (빌드 결과 기준)
    "scripts": {            //? npm run 명령어 정의 (npm 명령어로 프로젝트 실행, 테스트 빌드 가능)
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],         //? 검색 키워드
    "author": "",           //? 작성자
    "license": "ISC"        //? 라이선스 종류
  }
 */

  //# 3. typeScript 설치
  //   : 타입스크립트 설치 (npm 사용)
  //     >> 타입스크립트 사용을 위해서는 로컬 | 전역 환경에 TS 설치가 필수임
  
  // == 설치 방법 ==
  // git bash 사용 > TS 프로젝트 최상단(e_typescript)
  //? npm을 사용해 '타입스크립트 패키지'를 설치할거임
  //   - 전역 설치 ('g' 옵션, global)
  //     : 개발자 컴퓨터 전체에 기능을 추가 
  // > npm install -g typescript

  //   - 프로젝트 별 설치 (개발 의존성 설치)
  //     : 현재 사용하고 있는 프로젝트 내의 기능 추가
  // > npm install typescript --save-dev
  // > npm install typescript -D
  // > npm i typescript -D
  // --- 다 같은거임 ---
  // +) --save-dev(-D) VS -save(-S)
  //  : devDependencies - 개발 과정에서 필요한 패키지들의 목록
  //  : dependencies    - 프로젝트 실행에 필요한 패키지들의 목록

  //? 프로젝트 내의 타입스크립트 버전확인 (설치확인)
  //  : tec -v

  //# 4. 타입스크립트 설정 파일 생성
  //   : npx tsc --init
  //? npx
  //  cf) tsc 는 TypeScript의 컴파일러
  //    >> npm으로 설치 시 프로젝트 로컬에만 설치됨
  //    >> npx는 npm이 제공하는 실행 도우미
  //       : 로컬의 실행 파일을 찾아서 전역 설치 
  //         (타입스크립트 전역 설치 완료시 tsc --init 만 입력해도 가능)


  // {
  //   "compilerOptions": {
  //     "target": "ES2020",          //? 변환될 JS 버전               
  //     "module": "CommonJS",        //? Node.js는 CommonJS 모듈 사용          
  //     "rootDir": "./src",          //? TypeScript 원본 코드 폴더          
  //     "outDir": "./dist",          //? 컴파일된 JS 출력 폴더          
  //     "strict": true,              //? 타입 검사 강화          
  //     "esModuleInterop": true,     //? import express from "express" 형태 사용          
  //     "skipLibCheck": true,        //? 라이브러리 타입 검사 생략으로 속도가 향상됨          
  //     "forceConsistentCasingInFileNames": true
  //   },
  //   "include": ["src/**/*"]
  // }

  //# 5. 타입스크립트 코드 컴파일 실행
  //  tsc(typescript compiler)
  //  : TS 파일을 JS 파일로 변환하는 도구
  //  - tsc 파일명.ts
  //    >> 동일한 파일명의 파일명.js 생성
  //  - node 파일명.js 로 실행