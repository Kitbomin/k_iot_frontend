import React, { memo, useCallback, useState } from 'react'

//! useCallback 
//  : React 함수형 컴포넌트 Hook
//  : 특정 콜백함수가 의존성 배열에 명시된 값들이 변경되지 않는 한 동일한 함수 인스턴스를 유지하도록 해주는 훅
//  > 콜백함수를 메모이제이션(Memoization)한다고 함
//@  > 주로 자식 컴포넌트에 함수 전달 시 사용됨

//? React 컴포넌트 리렌더링
//  : 함수는 컴포넌트가 리렌더링(상태 변화 || props 값 변경)될 때마다 새로운 함수 인스턴스를 생성함
//  +) 해당 함수가 자식 컴포넌트의 props로 전달되는 경우
//      > 부모의 리렌더링마다 함수의 주소값이 변경되어 새로운 값으로 인식하고, 자식 컴포넌트를 리렌더링 하게 됨

//! 자식 컴포넌트
//? React.memo
//  : React에서 불필요한 자식 컴포넌트의 리렌더링을 방지하기 위한 성능 최적화 도구
//  > 이전 렌더링 때의 props와 지금 렌더링 때의 props를 비교함
//    : 동일하면 다시 렌더링하지 않고 스킵함
//    : 다르면 재렌더링 실행됨
const Button = memo(({ handleClick }: {handleClick: () => void}) => {
  console.log('버튼이 렌더링 되었습니다.');
  return <button onClick={handleClick}>자식 컴포넌트의 버튼</button>
})

//! 부모 컴포넌트
function A_UseCallback() {
  //^ Hooks
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  //@ useCallback 사용 방법
  /** const 함수명 = useCallback(콜백 함수 - 기존 실행 함수, [deps]);
   * const callbackFunc = useCallback(() => {
   *  
   * }, [deps])
   * 
   * ? 배열 안의 deps가 변경될 때만 함수를 다시 생성함
   *   : 그렇지 않으면 이전에 만든 함수를 재사용함 (메모이제이션)
   */

  //^ Event Handler
  //  : 부모 컴포넌트 재렌더링마다 함수의 주소값이 변경됨 -> 이벤트가 발생하는게 아님
  // const handleCountClick = () => {
  //   console.log('이벤트 발생');
  //   setCount(prevCount => prevCount + 1);
  // }
  const handleCountClick = useCallback(() => {
    console.log('이벤트 발생');
    setCount(prevCount => prevCount + 1);
  }, [count]); 

  console.log('부모 렌더링');

  let a = 10; // 컴포넌트 재렌더링마다 새롭게 초기화 + 할당
  function example() { // 컴포넌트 재렌더링마다 함수값이 새롭게 할당됨
  }
  return (
    <div>
      <h5>useCallback</h5>
      <p>Count: {count}</p>
      <button onClick={handleCountClick}>부모 컴포넌트의 버튼</button>
      {/* 
        1) props값 변경으로 리렌더링 - useCallback으로 조절 가능
        2) 실제 부모 컴포넌트의 리렌더링 - useCallback으로 조절이 안됨
      */}
      <Button handleClick={handleCountClick}/>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}

export default A_UseCallback