import React from 'react'
import './tailwind.css'

//! Tailwind CSS
//  : Utility-First CSS 프레임워크임
//  - 미리 디자인된 컴포넌트가 아니라 원자적 유틸리티 클래스를 조합해 UI를 만드는 방식

//  cf) Bootstrap / MUI 처럼 컴포넌트를 제공하는 것이 아닌, CSS 속성이 바로 클래스로 제공됨

//@ 장점
//  1) 개발 속도 향상 (스타일 시각화가 빠름)
//   : HTML/JSX에서 바로 스타일링이 가능 (클래스만 봐도 디자인이 보임)
//  2) CSS 파일이 거의 없음
//   : 별도의 CSS 파일이 필요 없음 -> 클래스명 충돌 가능성을 고민할 필요가 없음
//  3) 반응형 편리함
//  4) 디자인 시스템 운영이 쉬움
//   : 팀 간 UI 스타일 일관성이 보장됨
//   : 모든 spacing/color/font가 scale 기반임
//  5) 확장성이 높음
//   : tailwind.config.js (커스텀 가능)

//@ 단점
//  1) HTML/JSX 클래스가 길어짐
//   : 코드 가독성이 저하될 가능성이 있음
//  2) 익숙해질 때까지 시간이 필요함
//   : tailwind 규칙 숙지에 시간이 소요됨
//  3) 디자인 설계 없이는 똑같은 UI만 복사됨
//   : 디자인 시스템 없이 사용하면 'tailwind를 사용한 일반 CSS나 다를게 없음'

const buttonStyle = {
  padding: '10px',
  background: 'blue',
  color: 'white',
  borderRadius: '4px'
}


function C_Tailwind() {
  return (
    <div>
      <button style={buttonStyle}>객체로 스타일을 지정하는 버튼</button>
      <button className='button'>클래스로 지정하는 버튼</button>
      <button className='p-4 bg-blue-500 text-white rounded-lg'>[className='p-4 bg-blue-500 text-white rounded-lg'] 이런 식으로 tailwind CSS 적용한 버튼</button>

      <div className="text-sm md:text-base lg:text-xl">[className="text-sm md:text-base lg:text-xl"] 이런식으로 한 요소에서 모든 반응형 처리가 가능하지롱 </div>
    </div>
  )
}

export default C_Tailwind