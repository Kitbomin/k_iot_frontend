import React from 'react'
import { useNavigate } from 'react-router-dom'

//! useNavigate
//  :페이지 이동(라우팅)을 코드로 제어할 수있는 React Router 훅
//  - 브라우저의 주소를 바꾸며, 해당 경로의 컴포넌트를 렌더링함

function C_useNavigate() {
  // navigate 함수를 반환
  // : 해당 함수의 인자로 경로 설정
  const navigate = useNavigate();

  const goToSpecific = () => {
    // navigate('/basic');
    navigate('/basic', {replace: true}); // 특정경로 이동 + 현재 기록 덮어쓰기 (뒤로가기 불가능)
  }

  const goBack = () => {
    navigate(-1);
  }

  const goFoward = () => {
    navigate(+1);
  }

  return (
    <div>
      <h4>useNavigate 예제</h4>
      <button onClick={goToSpecific}>특정 경로로 이동</button>
      <button onClick={goBack}>뒤로 가기</button>
      <button onClick={goFoward}>앞으로 가기</button>
    </div>
  )
}

export default C_useNavigate