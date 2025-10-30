import React from 'react'

//! 자식 컴포넌트
//  : 부모로부터 사용자에 대한 데이터를 전달 받음 (props) 그걸 UI로 반환함
//  - props는 객체 형태이다

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = { user: User };
// 객체가 지금 또 객체안에 감싸져있음

// 구조분해할당
const UserCard = ({ user }: UserCardProps) => {
  console.log(user.name);
  console.log(user.age);

  // All destructured elements are unused.ts(6198) const email: string
  const {name, age, email} = user;

  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <>
      {/* 이렇게 써도 되지만 */}
      <p>{user.name} / {user.age} / {user.email}</p>
      
      {/* 얘네도 구조분해 할당이 되어있으니 가능하긴 함 */}
      <p>{name} / {age} / {email}</p>
    </>
  );
}

//! Wrapper 컴포넌트
//  : 다른 컴포넌트를 감싸는 컴포넌트
//  - props 데이터로 다른 컴포넌트(ReactNode)를 전달받음
//  - 자식 컴포넌트를 안전하게 받기 위한 타입

type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들 + 사용자 정의 컴포넌트들의 타입
  childern: React.ReactNode;
}

export const Wrapper = ({ children }: ChildrenType) => {

  return (
    <div style={{border: '2px solid black', padding: '16px'}}>
      {children}
    </div>
  );
}


function H_Props() {

  const userData = {
    name: 'Silbia',
    age: 23,
    email: 'asdf'
  }

  return (
    <div>
      {/* 
        출력이 두번씩 되는 이유?
        : React18 이후의 StrictMode가 개발 모드에서 부작용 탐지를 위해 두 번 랜더링하기 때문
        > 실제 배포 환경에서는 한번만 랜더링 함
      */}
      <UserCard user={{ name: 'Ara', age: 23, email: 'qwer123'}} />
      <UserCard user = {userData} />

      <Wrapper>
        <div>안녕하세요 만나서 반갑습니다</div>
      </Wrapper>
    </div>
  )
}

export default H_Props