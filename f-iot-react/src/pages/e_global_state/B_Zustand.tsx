import { useAuthStore } from '@/stores/auth.store';
import React from 'react'
import { create } from 'zustand';

//! Zustand (독어로 상태 라는 의미를 가지고 있음)
//  : 상태관리 라이브러리
//  - React Hooks 기반 + 최소한의 API를 사용해 상태를 쉽게 생성하고 접근할 수 있게 해줌
//  - create로 store 생성 / 훅 형태의 useStore로 컴포넌트가 구독을 하는 형식임

//? 장점
//  1) 부분 구독이 가능: useStore(s => s.x); 형태로 필요한 값만 구독 가능
//     -> 불필요한 렌더링 감소
//  2) 미들웨어: devtools, persist, immer 등을 사용 가능함
//  3) TypeScript 친화적: 상태, 액션 타입 정의가 유연함

//? 파일명 & 명명 규칙 (베스트 프렉티스)
//@ 파일명  
//  : <domain>.store.ts
//  ex) auth.store.ts, cart.store.ts, ui.store.ts ...

//@ 훅 명
//  : use도메인Store
//  ex) useAuthStore, useCartStore, useUiStore ... 

//@ 상태 타입 네이밍
//  : AuthState, CartState, UserState, UiState ...

//? 설치
// npm install zustand

//! == Zustand 예제(폴더/ 파일 단위 분리 X 예제) == //

//? 0. 저장소 타입 선언
interface CountState {
  // 객체의 속성
  count: number;

  // 객체의 메서드
  increment: () => void;
  decrement: () => void;
}

//? 1. store 생성
//   : 전역 상태가 담긴 저장소 
//   - create 함수를 사용해 생성함 (zustand 라이브러리에 포함되어있음)
//     > 애플리케이션에서 관리할 상태와 상태 업데이트 함수들이 포함되어있음

//^ count 값에 대한 전역 상태 관리
//  : create 함수의 제네릭 타입
//    -> 전역 관리할 대상(상태와 액션)을 정의함

// +) create 함수는 set 함수를 인자로 전달함
//  : set은 zustand 스토어의 상태를 업데이트 하는데에 사용됨
export const useCountStore = create<CountState>(set => ({
  //@ 객체 반환 - CountState 타입
  //  상태 변경 전 초기값 설정
  count: 0,

  increment: () => set(state => ({ count: state.count + 1})),
  decrement: () => set(state => ({ count: state.count - 1})),
}));



function B_Zustand() {
  //? 2. store 호출
  //   : 구조 분해할당을 사용해 전역 상태 변수값, 전역 상태 설정 함수 할당
  const { count, increment, decrement } = useCountStore();
  const {user, logout} = useAuthStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      {user && (
        <p>
          {user.loginId}님 환영합니다.
          <button onClick={logout}>로그아웃</button>
        </p>
      )}
    </div>
  )
}

export default B_Zustand