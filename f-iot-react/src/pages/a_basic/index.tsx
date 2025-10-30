// 프로젝트 메인 파일 인식은 i로 시작하는걸 잡는게 있어서 소문자 i로 시작해야함
// : index 파일명은 해당 폴더의 메인 파일로 인식됨
// - 임포트 시 폴더명 만으로 가져오기가 가능해짐

import React from 'react'
import B_Counter from './B_React_Counter'
import C_Component, { img, Img } from './C_Component'
import D_JSX from './D_JSX'
import E_JSX from './E_JSX'
import F_Review from './F_Review'

const h2Style = {
  backgroundColor: 'black',
  color: 'orange'
}

// React는 반드시 컴포넌트 명이 대문자여야만
function Index() {

  // 해당 함수형 컴포넌트의 리턴값: HTML 코드 요소
  return (
    <div>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >=== 리액트 기본 문법 ===</h1>
      <h2 style={h2Style}>1. 리액트 VS 타입스크립트 (카운터 예제)</h2>
      {/* 컴포넌트는 주로 단일 태그로 사용 */}
      <B_Counter />
      <h2 style={h2Style}>2. Component: 리액트를 구성하는 기본 구조</h2>
      <C_Component/>
      {/* 컴포넌트: 재사용 가능한 UI 집합 */}
      <div style={{backgroundColor: 'pink'}}>
        <Img />
        {img()}
      </div>

      <h2 style={h2Style}>3. JSX(TSX) 리액트의 기본 문법 </h2>
      <D_JSX/>
      <E_JSX/>
      {/* <h2 style={h2Style}> 복습 중 </h2> */}
      {/* <F_Review/> */}

      

    </div>
  )
}

export default Index