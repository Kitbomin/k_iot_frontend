import React from 'react'
import { Wrapper } from './H_Props';

/**
 * cf) 컴포넌트(Component): 리액트의 구성요소 -> 화면 만드는
 * 
 * ! Props(Properties)
 *   : 컴포넌트의 속성을 의미함
 *   : Props로 데이터 전달을 함
 *     <ChildComponent name="Ara" />
 *     - 함수형 컴포넌트에서 데이터 받는 곳: 매개변수
 *       function ChildComponent({name: string}) { ... }
 *       # 컴포넌트의 props는 객체로 전달됨
 *       # 키="값" 전달은 (객체명: {키: 데이터 타입}) 매개변수 구조로 인식
 *       #                > 해당 타입 구조는 타입 별칭으로 정의 가능함
 *       # props로 전달된 데이터는 자식 컴포넌트에서 readonly 로 취급됨
 *   : 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용됨
 * 
 * ? HTML 속성
 *   : <a href="" /> -> a태그의 href 속성
 */



function ChildComponent(props: {name: string}) {
  // props.name으로 사용
  // : props는 readonly 속성이기에 값의 재할당이 불가능함
  // props.name = 'SongMS';

  return (
    <p>
      안녕하세요 {props.name} 님
    </p>
  );
  
}



//! 1. 단일 Props 사용
// function ChildComponent2({name}: {name: string}) {
  //   return (
    //     <p>
    //       안녕하세요 {name} 님
    //     </p>
    //   );
    // }
    
//! 구조 분해 할당을 사용한 props 활용
//  +) Props 타입 정의 '타입 별칭' 사용
type Child2PropsType = {
  name: string;
}

function ChildComponent2({name}: Child2PropsType) {
  return (
    <p>
      안녕하세요 {name} 님
    </p>
  );
}


//! 2. 다중 Props 사용
function MultiProps(props: {name: string; colorProps: string;}) {
  // props.name
  // props.colorProps
  // : 여러개의 props가 전달되더라도 하나의 객체로 전달받음
  //   > 하나의 객체에 전달받거나, 한번에 각각의 요소 변수에 할당하는 구조 분해 할당 가능
  // props.name = 'afafaf'; => 재할당 안됨, 읽기 전용 속성임

  return (
    <div style={{color: props.colorProps}}>
      반갑습니다. {props.name} 님
    </div>
  );
}


// type Multi2Type = {
//   name: string; 
//   colorProps: string;
// }

// All destructured elements are unused.
// function MultiProps2({ name, colorProps }: Multi2Type) {
  
//   return (
//     <div style={{color: colorProps}}>
//       반값습니다 {name} 님
//     </div>
//   );

// }



type Multi2Type = {
  name?: string; // 선택적 프로퍼티
  colorProps: string;
}

//? 기본값 지정 (기본 매개변수 & 기본 속성값)
function MultiProps2({ name = '개구리', colorProps }: Multi2Type) {
  
  return (
    <div style={{color: colorProps}}>
      반값습니다 {name} 님
    </div>
  );
}


/** Props 정리
 * 1) 부모 -> 자식: 단방향 데이터 흐름
 * 2) 자식은 props를 읽기만 가능함 (readonly)
 * 3) 상태 변경이 필요하면 부모로부터 콜백 함수를 받아서 수행해야 함 => 지금 안할거임 개념만 알고있으면 됨
 */

//! 부모 컴포넌트
function G_Rpops() {
  const props = {
    colorProps: 'lightgray',
    name: '최지Hoon'
  }

  return (
    <Wrapper>
      {/* Property 'name' is missing in type '{}' but required in type '{ name: string; }'. */}
      <ChildComponent name='Ara' /> 
      <ChildComponent2 name='SongMS' /> 
      
      <MultiProps name='Silvia' colorProps='lightblue'/>
      <MultiProps2 name='ㅁ맘무' colorProps='lightcoral' />

      {/* //! 구조분해 할당 시 기본값 형태로 전달됨 */}
      <MultiProps2 colorProps='lightgreen' />

      {/* ...props가 구조 분해 할당을 사용해 각각의 속성명을 찾아감 */}
      <MultiProps2 {...props} />
    </Wrapper>
  )
}

export default G_Rpops