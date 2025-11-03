import React from 'react'

//! useParams
//  : React Router Dom 에서 제공하는 훅(Hook)
//  - URL 주소에 적힌 변수(값)를 꺼내주는 도구

// ex) https://example.com/users/10
//     : 사용자 번호(user Id: 10) - 프론트엔드 화면을 10번 유저의 페이지로 출력요청

// cf) https://example.com/api/v1/users/10 => 얘는 백엔드 경로값

//? useParams 사용 목적
//  : 주소(URL)에 따라 다른 내용을 보여주기 위함
//  - 하나의 컴포넌트(UI)에 여러 화면을 보여주는 리액트의 특성을 위해 사용

// ex) ~/users    : 모든 사용자 목록 보여주기
//   - ~/users/1  : ID가 1인 사용자 정보 보여주기
//   - ~/users/2  : ID가 2인 사용자 정보 보여주기
//  >> 주소를 각각 다르게 인식하려면, useParams로 /users/:id 중의 :id 값을 추출해야함

//? 기본 사용법
//  1) a 태그 속성을 가진 요소로 화면 전환
//   : 페이지 이동 경로는 동적 데이터(추출될 값)를 포함한 경로 그대로여야함
//     ex) `practice/post/${post.id}`
//  2) 라우트 설정
//   : 동적 데이터를 변수로 인식하기 위해 :추출할변수명 지정
//     ex) <Route path="/practice/post/:id" element={<PostDetail />} />
//  3) 동적으로 이동하는 페이지에서 변수값 추출
//   : useParams를 호출하면 URL에서 변수들을 객체로 반환함
//     ex) const params = useParams(); //% -> PostDetail 컴포넌트 내에서 호출이 이루어짐
//         params.추출할변수명 -> params.id

function B_useParams() {
  return (
    <div>B_useParams</div>
  )
}

export default B_useParams