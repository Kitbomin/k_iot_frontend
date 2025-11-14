import React from 'react'


//! clamp() 함수
//  : 클램프
//  - clamp(min, preferred, max)
//    -> 최소값, 선호값, 최대값 을 보장하는 CSS 함수
//    -> 반응형에 주로 사용되고 특히 타이포그래피, 간격, 너비에 많이 사용됨

//? clamp() 사용 방법
//  property(속성): clamp(min, preferred, max);
//  1) min: 허용되는 최소값 (ex: 1rem, 14px)
//  2) preferred: 브라우저가 먼저 계산하려고 하는 값 (보통 vw, calc() 사용)
//  3) max: 허용되는 최대값 (ex: 3rem, 24px)
//  >> 브라우저는 preferred 값을 계산한 뒤 
//     => 그 값이 min보다 작으면 min을 사용 / 그 값이 max 보다 크면 max를 사용함 

function B_Clamp() {
  /*
    clamp(1rem, 2.5vw, 2rem)
    >> 1rem === 16px (2rem === 32px)

    1) 320px 화면 (모바일은 480px 이하임)
      : 2.5vw === 320 * 0.025 === 8px
        @ 비교
          min 16px / preferred 8px / max 32px
          >> 16px이 산출됨 -> preferred가 min보다 작으니까
          
    2) 768px 화면 (태블릿은 768~1024px 정도임)
      : 2.5vw === 768 * 0.025 === 19.2px
        @ 비교
          min 16px / preferred 19.2 px / max 32px
          >> 19.2px 정도 산출됨

    3) 1440px 화면 (PC는 1024px 이상임)
      : 2.5vw === 1440 * 0.025 === 36px
        @비교
          min 16px / preferred 36px / max 32px
          >> 32px이 산출됨 -> preferred가 max보다 크니까
  
  */


  return (
    <div style={{
      width: 'clamp(280px, 60vw, 1200px)',
      margin: '0 auto'
    }}>
      div도 clamp로 처리가 가능하죠
      {/* clamp(1.125rem, 2.5vw, 2rem):
          1.125rem: = 18px이 최소
          2.5 vw: 선호값
          2rem: = 32px이 최대 */}
      <h1 style={{fontSize: 'clamp(1.125rem, 2.5vw, 2rem)'}}>유동 타이포 그래피</h1>
      
      <button style={{ padding: 'clamp(0.5rem, 1vw, 1rem)'}}>
        버튼 패딩을 뷰포트에 맞춰 유동적으로 조정 <br /> 얘는 브라우저 창 크기에 따라 패딩 값이 바뀌어요
      </button>
        
      

    </div>
  )
}

export default B_Clamp