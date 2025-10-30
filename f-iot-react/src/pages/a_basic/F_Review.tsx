// React 스니펫
// : rfce (함수형 컴포넌트 생성 + export default 내보내기)
// - tsx 파일은 반듣시 컴포넌트 형식이며 HTML 요소를 반환해야함

// cf) ts 파일은 비워둬도 됨 
//   -> 일반 ts 코드 형식이면서 모듈(변수, 함수, 클래스 ...) 반환을 하면 됨


//! 1. Component
//   : 컴포넌트, 사용자 인터페이스(UI)를 구축하는 기본 단위

// cf) 사용자 인터페이스(UI)
//     : 사용자와 컴퓨터 시스템 사이의 의사소통 매개 (화면)

// - 화면을 구성하는 코드 집합 (재사용 가능함)
// - 재사용은 export(내보내기)와 import(가져오기)를 통해 구현함
// - 파일명이 반드시 '대문자'로 시작해야함 (UpperCalmelCase)
//   cf) 일반함수(기능적)는 '소문자'로 시작해야함 (lowerCamelCase)

// - 컵포넌트는 항상 HTML 요소를 반환함
//   : 함수형 컴포넌트의 return 키워드 뒤에서 작성됨
//   : 반환되는 컴포넌트가 한 개일 경우 () 생략 가능
//                      다수 일 경우 () 생략 불가

//! 2. JSX(TSX) 문법 체계
//  1) 단일 루트 노드를 사용
//   : 최상단 루트 태그가 존재함
//   - 최상단에 형제 태그가 있을 수 없음 -> 반드시 하나의 부모가 필요함
//   - <></> 빈 Fragment 태그를 사용

//  2) 태그 닫기

//  3) 대소문자 구분
//   - 소문자로 작성된 태그는 HTML 요소로 인식
//   - 대문자로 작성된 태그는 사용자 정의 컴포넌트로 인식함
//       >> <Img /> 태그가 오류 나는 상황
//          1) 해당 컴포넌트를 사용하지 않음
//          2) 해당 컴포넌트를 import하지 않거나 경로지정이 잘못된 경우

//  4) JSX(TSX) 내에서 HTML 코드 작성 시
//   - 대부분 lowerCamelCase 사용 권장함
//     : css속성, on- 이벤트 핸들러 등등
//   - class명 속성은 className으로 대체됨

export function ExampleComponent() {
  let name = 'Ara'
  let fruits = ['사과', '오렌지', '망고'];

  // function : JS 문법
  // >> JS 문법 내에서 HTML 코드 작성 시 () 소괄호 사용
  //    : return 뒤 () 가 있음

  return (
    <>
      <h1>2025.10.30 강의</h1>
      <p>복습 중입니다.</p>
      {/* HTML 코드 내에서 JS 코드 작성 시 {} 중괄호 사용해야함 */}
      <p>{name} 학생</p>
      {/* 배열 순회 출력 */}
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}

import React from 'react'

function F_Review() {
  return (
    <div>
      {/* <ExampleComponent/> */}
    </div>
  )
}

export default F_Review