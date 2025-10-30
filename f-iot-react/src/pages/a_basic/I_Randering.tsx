
import React from 'react'


//! 렌더링(Rendering)
//  : 작성한 코드를 화면에 출력하는 기능을 가지고 있음
//  - React가 코드(JSX/TSX)를 실제 브라우저 화면(UI)로 바꾸는 과정

// cf) React는 데이터(state, props) 가 변경되면 필요한 부분만 다시 렌더링함
//     > 화면 전체가 아니라 변경된 컴포넌트만 효율적으로 갱신함 (재랜더링)

interface ItemType {
  // 여행 짐 싸기
  // : 짐 항목의 이름, 준비완료 여부

  name: string;
  isPacked: boolean;
}

//! 자식 컴포넌트임
function Item({ name, isPacked }: ItemType) {
  //? 조건부 랜더링
  //  : 조건에 따라 UI를 다르게 보여주는 방법임
  //  - if문: 가장 명확하지만, JSX 안에서 사용할 수 없음 => 그래서 return 위에서 처리해야함

  //  - 삼항 연산자: JSX 안에서 표현 가능함. 한 줄로 간결하게 적을 수 있음

  //  - 논리 연산자: "조건이 참인 경우에만" => AND, "조건이 거짓인 경우에만" => AND

  //# 1. if 조건문을 사용한 조건부 랜더링
  //? react의 JSX는 괄호가 문법적 요소로 사용됨 - return문 위에서 작성되야함
  // if (isPacked) {
  //   return (
  //     <li>{name} ✔️</li>
  //   );
  // } else {
  //   return (
  //     <li>{name}</li>
  //   );
  // }

  //# 2. 삼항 연산자를 사용한 조건부 랜더링
  //   : 조건 ? 참일경우 : 거짓일 경우
  // return (
  //   if문 보다 엄청 간결해짐
  //   <li>{isPacked ? name + '✔️' : name}</li> 
  // );

  //# 3. 논리연산자를 사용한 조건부 랜더링
  return (
    <li>
      {/* 
        논리연산자 A && B
        : 모든 값이 true 여야 true값 반환
        - A가 false면 B값 출력 자체를 안함
        - A가 true면 B값을 출력함
      */}
      {/* 삼항연산자보다 더 간단함 */}
      {name} {isPacked && '✔️'}
    </li>
  );
}


function I_Randering() {
  //! 배열 랜더링
  //  : 배열 랜더링 시 map() 메서드를 사용함
  //  - 리액트는 return문 안에서 JSX 요소들의 배열을 랜더링
  //    > 순회한 후 데이터 값이 있어야 element에 데이터 전달이 가능해짐

  // cf) forEach()는 단순 반복 실행만 하고 리턴값이 없어서 사용하지 않음
  const people = ['Ara', 'Lia', 'Silvia', 'SongMS', 'ChoiJH'];
  const peopleDescription = [
    {
      id: 0,
      name: 'Ara',
      job: 'developer'
    },

    {
      id: 1,
      name: 'KimBM',
      job: 'student'
    },

    {
      id: 2,
      name: 'Silvia',
      job: 'musician'
    },

    {
      id: 3,
      name: 'SongMS',
      job: 'musician'
    },

    {
      id: 4,
      name: 'ChoiJH',
      job: 'student'
    },
  ];

  //# map 콜백 함수를 사용한 배열 랜더링
  //  : 요소 개수에 변화가 없음
  //  - 전체 내용 랜더링

  const listItems = people.map((person, index) => {
    return <li key={index}>{person}</li>
  });


  //# filter 콜백함수를 사용한 배열 랜더링
  //  : 요소의 개수에 변화가 있음
  //  - 조건에 따른 랜더링

  const businessPeople = peopleDescription.filter(person => person.job === 'developer');

  const businessPeopleRender = businessPeople.map(person => <li key={person.id}>{person.name}</li>);

  //! React 랜더링 시 key 속성 사용 -> 중요함 진짜
  //  : React에서 배열의 각 항목을 식별하고 성능을 최적화하기 위해 사용됨
  //  - map()을 통해 여러 요소를 랜더링 할 때, key는 React가 어떤 항목이 변경, 추가 또는 삭제 되었는지 파악하는 용도로 사용됨
  //? 같은 배열 내에서 유일해야함 (데이터의 PK값을 주로 사용함 | index 값도 사용함 근데 권장은 안함)

  


  return (
    <div>
      <p>여행용 짐 목록</p>
      <Item name='과자' isPacked={true} />
      <Item name='음료수' isPacked={false} />

      <hr />

      <p>Map을 사용한 전체 리스트 랜더링</p>
      <ul>{listItems}</ul>

      <hr />
      <p>filter를 사용한 조건부 렌더링</p>
      <ul>{businessPeopleRender}</ul>
    </div>
  )
}

export default I_Randering