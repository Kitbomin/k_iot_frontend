import React, { useReducer, useState } from 'react'

//! === React 컴포넌트의 상태 관리 (useState VS useReducer) === //

//! 1) useState
//   : 리액트에서 가장 기본적인 상태 관리 HOOKS
//   - 간단한 상태값 변경 시 사용됨
//   - '컴포넌트 내부에서 직접적인 상태 처리'만 가능함
//   >> 단순한 값(숫자, 문자, boolean ...) 을 관리할 때 적합함
//   >> 컴포넌트 내부에서 바로 상태를 변경하는 상태 변경 함수(set~)를 호출함
//   const [상태변수, set상태설정함수] = useState<Type>(initialValue);


//! 2) useReducer
//   : 리액트에서 복잡한 상태로직을 관리하는 HOOKS
//   - '상태 업데이트 로직'을 외부에서 선언 가능함 (재사용 가능)
//   >> 상태 업데이트 로직을 리듀서 함수(reducer)로 분리하여 관리 가능함 => 개발자가 직접 작성해서 분리 생성 가능함
//   const [state, dispatch] = useReducer(reducer, 초기상태);

//? useReducer 구성 요소
//  - state: 현재 상태값 (관리되는 데이터)
//  - dispatch: 액션(Action)을 전달하여 상태를 변경하는 함수
//    >> 해당 함수에 액션을 전달 할 경우, 'reducer'함수가 호출되어 새로운 상태를 계산하게 됨
//  - reducer: 리듀서함수(상태를 어떻게 변경할지 정의한 함수)
//    >> useReducer의 인자로 전달되는 함수
//    >> 상태 변경 로직을 포함 (switch, case) 하고, 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환함

/**
 * ? 리듀서 함수 (상태변경 로직을 포함하는 함수)
 * function reducer(state, action) {
 *  switch(action.type) {
 *    case '동작 A':
 *      return 새로운 상태;
 *    case '동작 B':
 *      return 새로운 상태;
 *    default:
 *      return state;
 *  }
 * }
 */

//? useReducer 장점
//  1) 복잡한 로직 분리 - 상태 변경 로직을 컴포넌트 외부로 분리 가능
//  2) 여러 컴포넌트에서 같은 reducer를 공유 가능함
//  3) 상태 변경 흐름이 명확함 - dispatch가 값을 받음 > reducer가 전달 받아서 > state 변경

//? useState VS useReducer 사용 상황 정리
//  단순한 값(토글, 입력값 등)                -> useState 사용
//  복잡한 상태 로직(여러 조건, 단계적 변경)    -> useReducer 사용
//  여러 상태가 하나의 이벤트로 함께 변할 경우  -> useReducer 사용


export type CountState = {
  count: number;
}

export type CountAction = { type: 'increment' } | { type: 'decrement' }

// 리듀서 함수 (일반 함수 정의)
export function reducer(state: CountState, action: CountAction): CountState {
  switch (action.type) {
    case 'increment':
      // 리듀서 함수에는 콜백 형태의 사용이 필요 없음
      // : 현재 상태(state)값을 인자로 직접 전달받기 때문임
      return {count: state.count + 1}
      
    case 'decrement':
      return {count: state.count - 1}
  }
}


function Reducer01() {
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // state 타입: 객체 타입

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h5>useState를 사용한 상태관리</h5>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>

      <h5>useReducer를 사용한 상태관리</h5>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
    </div>
  )
}

export default Reducer01