import React from 'react'

//! 이벤트 핸들러
//  : 사용자와 상호작용 (클릭, 입력, 제출 등)에 반응해 실행되는 함수

// HTML) <button onclick={}></button>
// JSX) <button onClick={}></button> //? camelCase로 작성 + on-이벤트 이름

//! 이벤트 등록 방법
//  1) 함수 이름 전달
//   : <button onClick={handleButtonclick}></button>
//  2) 익명함수 사용
//   : <button onClick={() => {cosole.log('클릭함')}></button>
//? 함수 호출을 하면 안됨: 호출 시 즉시 실행되버림

//! 이벤트 핸들러 전달
//# 자식 컴포넌트
interface ButtonProps {
  children: React.ReactNode;
  onButtonClick: () => void;
}

// 이벤트 핸들러를 자식 컴포넌트에 전달함
// 부모 컴포넌트) 이벤트 핸들러를 정의함
// 자식 컴포넌트) 해당 핸들러를 props로 받아 실행함
// >> 이벤트 로직은 부모가 담당하게 되고, UI는 자식이 담당하게 되는 '역할 분리'가 됨
function ButtonComponent({children, onButtonClick}: ButtonProps) {
  return (
    <button onClick={onButtonClick}>
      {children}
    </button>
  );
}


//! props.children을 사용해 이벤트 재사용
//  : 부모 컴포넌트에서 속성(props)로 message값과 해당 컴포넌트 태그들 사이의 내용을 전달받을 거임
//# 자식 컴포넌트
interface ConsoleProps {
  message: string;
  children: React.ReactNode
}

function ConsoleButton({message, children}: ConsoleProps) {
  return (
    <button onClick={() => console.log(`${message}`)}>
      {children}
    </button>
  );
}


//# 부모 컴포넌트
function J_Handler() {

  // 이벤트 핸들러 함수 - handle + 요소 + 행위 로 작명함 -> 권장함
  // 또는 요소 + 행위 + handler 이렇게 쓰기도 함        -> 딱히 권장 안함
  function handleButtonClick () {
    console.log('버튼을 클릭했어요');
  }

  // 자식 컴포넌트에 전달할 이벤트 핸들러 함수 -> 화살표 함수 사용을 권장함
  const buttonHandler = () => {
    console.log('부모로 부터 전달하는 이벤트 핸들러 함수');
  }


  /**
   * cf) 이벤트 핸들러 명명규칙 (권장 사항)
   * 1) on - 시작
   *    : props로 전달받는 이벤트 핸들러 (이벤트 바인딩 용)
   *    - 컴포넌트 외부에서 전달받는 이벤트 핸들러
   *    EX) onButtonclick, onFormSubmit
   * 
   * 2) -Handler
   *    : 내부 함수 (실제 처리 함수)
   *    - 내부에서 정의된 로직 함수
   *    EX) buttonClickHandler, formSubmitHandler
   * 
   * 3) handler-
   *    : 내부함수 (단일 컴포넌트 내부에서만 쓰이는 함수)
   */

  return (
    <div>
      <button onClick={handleButtonClick}>클릭해주세요</button>


      <hr />
      <ButtonComponent onButtonClick={buttonHandler}>
        클릭 이벤트 전달
      </ButtonComponent>

      <hr />
      <ConsoleButton message='A버튼 클릭'>A버튼</ConsoleButton>
      <ConsoleButton message='B버튼 클릭'>B버튼</ConsoleButton>

      <hr />
      <form onSubmit={(e) => {
        e.preventDefault(); // 새로고침 방지
        console.log('전송완료');
      }}>
        <button type='submit'>제출하기</button>
        <input type="submit" />
      </form>
    </div>
  )
}

export default J_Handler