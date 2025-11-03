import React, { useState } from 'react'

//! Hooks
//  : 리액트 '함수형 컴포넌트'에서 사용할 수 있는 기능
//  : use- 키워드로 시작함
//    >> '여기서 해당 기능을 사용한다' 라는 의미

// ex) useState   : 상태(state) 기능을 여기서 사용한다.
//     useEffect  : 부수효과(effect) 기능을 여기서 사용한다.

//! useState
//  : React의 함수형 컴포넌트 내부에서 state(상태)를 관리할 수 있도록 제공하는 (대표적인) 기능

//? 특징
//@  - '컴포넌트 단위'에서의 상태관리
//@  - '상태값(state)'과 '해당 상태를 업데이트하는 함수(setState)'를 한 쌍으로 반환함
//      >> 상태값_변수명, set상태값_변수명 => user, setUser | post, setPost | password, setPassword
//   - 상태 변경 시 컴포넌트는 자동으로 재랜더링 됨
//   - 상태 업데이트는 비동기적으로 처리됨
//@  - 배열 구조 분해 할당으로 사용함 -> [state, setState] = useState(initialValue);
//      >> useState() 호출 시 인자로 전달되는 값은 state에 처음 할당될 기본값임
//@  - 제네릭<type> 으로 타입 명시가 가능함
//      >> useState<User>({ name: 'Ara', age: 23 });

//* 얘는 안됨 -> 함수 안에서 사용할 수 있음
// const [state, setState] = useState();

function State01() {
  //? 기본 구조와 명명 규칙
  // const [state, setState] = useState<type>(initialValue);

  //@ state         : 현재 상태값 (변수)
  //@ setState      : 상태를 업데이트하는 함수
  //@ initialValue  : 초기값, 초기 상태를 설정 (생략 가능함 - undefined 값임)
  
  // 명명 규칙: set + 상태명(name -> setName, count -> setCount, post-> setPost)

  //? useState 호출 규칙
  //@  - 반드시 컴포넌트의 최상단에서 호출해야함
  //     : 조건문, 반복문, 내부 함수에서 호출이 불가능함
  //* 아래는 오류남
  // if(true) { const [state, setState] = useState(); }
  //   - 여러개의 상태 사용시, 관련있는 훅 끼리 묶어서 컴포넌트 상단에 배치하는 것이 가독성 향상에 도움됨
  //@   +) hooks는 React 내부의 함수이기 때문에 - import 필요


  //? useState 실습 예제 - 카운터 컴포넌트
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('안녕하세용ㅇ');
  // if(true) { const [msg, setMsg] = useState<string>('반값습니다.'); }

  //^ 이벤트 핸들러 정의
  //? 이벤트 핸들러 내에서 count 값 변경: 상태 설정 함수를 사용
  //  1) 상태설정 함수를 그대로 사용
  //   : 이전의 상태를 직접 참조하게됨
  //     >> 주로 현재(이전, 최신)의 값과 관련이 없는 변화가 이루어질 경우 사용함
  const handleUpClick = () => {
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(5); // 상태 설정 함수의 인자값이 상태 변수로 전달됨

    // 2) 함수형 컴포넌트 사용
    //  : 현재(이전, 최신)의 상태값을 기반으로 상태를 업데이트하는 경우 사용
    // cf) set - 상태 변경 함수 내에서 콜백 함수를 쓰는 경우가 있다는걸 알아둬야함
    //     >> setCount(() => { return })
    //     >> 해당 콜백함수의 인자는 '상태의 최신값'
    //     >> prev-상태명 ( prevName, prevCount, prevUser ... / previous 에서 따옴 )
    setCount( prevCount => prevCount + 1 );
    setCount( prevCount => prevCount + 1 ); // 현재 상태를 읽어서 2씩 증가하게 됨
  }
  const handleDownClick = () => {
    // setCount(count - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }



  return (
    <div>
      <p>카운트 클릭 횟수: {count}</p>
      <button onClick={handleUpClick}>카운트 +2 증가</button>
      <button onClick={handleDownClick}>카운트 -2 감소</button>

      <p>{message}</p>
      {/* 화면 출력 안됨 -> Uncaught ReferenceError: msg is not defined at State01 (State01.tsx:87:11) */}
      {/* <p>{msg}</p> */}
    </div>
  )
}

export default State01