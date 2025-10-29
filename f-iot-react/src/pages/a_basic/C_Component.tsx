import React from 'react'
// import B_React_Counter from './B_React_Counter'
// import B_React_Counter from '@/pages/a_basic/B_React_Counter'
import dog from '@/assets/imgs/강아지이미지.jpg'

/**
 * ! 컴포넌트 (Component)
 *   : 사용자 인터페이스(UI)를 구축하는 기본 단위 요소
 *   - 함수형 컴포넌트를 사용
 *   
 * ? 컴포넌트 사용 방법
 *   1) 컴포넌트 내보내기
 *      > export default : 컴포넌트명 변경 가능 - {} 미사용
 *      > export         : 컴포넌트명 변경 불가능 - {} 사용
 * 
 *   2) 컴포넌트 가져오기
 *      > 불러올 환경에서 경로를 지정
 *      : vite React는 상대경로, 절대경로 모두 사용 가능함
 *      : @(기본 URL 설정)를 사용한 절대 경로 사용을 권장
 *        > vite.config.ts 와 tsconfig.app.json 파일에 각각 경로 지정이 필수임
 * 
 * ? 컴포넌트 특징
 *   : 파일명이 반드시 대문자로 시작함 (UpperCamelCase 사용)
 *     ex) MainContainer, NavBar, SignUp .. 
 *         - JS/TS의 일반 함수 형태와 구분하기 위해 머리글자를 대문자로 씀
 *           > 일반 함수 (lowerCamelCase 사용)
 * 
 *   : rfc, rfce 스니펫 사용 시 
 *     - 파일명이 함수명으로 구현, 해당 함수는 컴포넌트로 인식됨
 *     - 파일명을 대문자로 작성하는걸 권장함
 * 
 *   cf) index.tsx 파일명
 *     : 폴더명을 활용한 import 사용을 위함
 *     - 내ㅐ부의 함수(컴포넌트)명은 대문자로 수정해야함 -> 외부에서 인식 가능한 컴포넌트로 생성해야 하니까
 */

export function Img () {
  //? TS 코드 내에서 HTML 코드 작성 시
  //  : () 소괄호 내에 작성해야함

  //? HTML 코드 내에서 TS 코드 작성 시 
  //  : {} 내에서 작성해야함
  
  //? 함수형 컴포넌트(tsx)는 return 시 HTML을 반환함
  return (
    // 컴포넌트 내의 HTML 코드 작성 시 
    // : 최상위 노드는 반드시 하나여야함
    // - 비워질 수 없음
    <div>
      <p>Img 컴포넌트의 시작</p>
      {/* HTML 코드 내에서 TS 문법 사용 시 {} 사용해야함 */}
      <img src={dog} alt="강아지 이미지" width={300}/>
    </div>
  );
}

//? 일반 함수 (컴포넌트 X)
// HTML) 대소문자 구분 X: <p> === <P>
//  TSX) 대소문자 구분 O: <p> =/= <P>
//       : React 컴포넌트
export function img() {
  return '이미지(일반 함수)';
}


function C_Component() {
  // TSX 컴포넌트 사용 시
  // : 마크업(태그)이 한 개인 경우 () 소괄호 생략 가능
  // - 여러 개일 경우 반드시 소괄호로 감싸서 표현해야함
  
  // return <Img/>
  return (
    <div>
      {img()}
      {/* 컴포넌트 태그는 단일 태그 사용 권장함 <컴포넌트명 /> */}
      <Img/>
    </div>

  ); 
}

export default C_Component