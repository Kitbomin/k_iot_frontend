import axios from 'axios'
import React from 'react'
import PostFrom from './PostFrom';
import PostList from './PostList';

//! Axios
//  : 브라우저나 Node.js 환경에서 HTTP 요청을 쉽게 처리할 수 있게 도와주는 "Promise 기반의 HTTP 클라이언트 라이브러리"
//  - 서버와 통신해서 데이터를 가져오거나 (GET) 서버에 데이터를 보낼 때 (POST, PUT, DELETE) Axios를 사용함 (간걸성과 일관성 향상에 도움을 줌)

//? Axios 설치 명령어
//  1) 기본 설치
//     npm install axios
//  2) 타입 스크립트 프로젝트
//     npm install --save-dev @types/axios

//! Axios 사용방법
//@ 1) 기본 HTTP 메서드 (async, await 기반)
// axios.get().then(res => consol.log ... )원래는 이렇게 씀
//   비동기 기반 사용
//   - GET) const response = await axios.get("REST API 경로", { params });
//          >> params( 객체 타입, 쿼리 파라미터값 {page: 1, size: 10, keyword: 'ham'}) 
//          const users = response.data;
// ---------------------------------------- 
//   - POST) const response = await axios.post("REST API 경로", data);
//          >> data( 서보로 전송할 JSON 데이터)
//@ 2) 기본 설정 (커스텀 Axios 인스턴스를 생성하는 함수)
//   - 기본 axios 사용 대신, 프로젝트 전반에서 공통적으로 사용하는 설정을 미리 지정 가능
//   - 반복 코드 없이 깔끔하게 API 요청 가능 
//  1. const instance명 = axios.create(config);
// cf) config: 다양한 설정을 담은 객체

export const mockApi = axios.create({
  // config: axios 설정 객체

  //^ 1. 모든 요청의 기본 주소 URL 지정
  //   : http://localhost:8080/api/v1
  baseURL: "https://jsonplaceholder.typicode.com",

  //^ 2. 요청 헤더를 기본 지정
  headers: {
    "Content-Type": "application/json"
    // "Authorization": "인증토큰(Bearer Token)"
  }
});

//? axios 인스턴스 사용법
// mockApi.get("/posts") === axios.get("https://jsonplaceholder.typicode.com/posts") 둘이 같음



function B_Axios() {
  return (
    <div>
      <h1>게시판 CRUD 예제 (Axios/localStorage 사용)</h1>
      <PostFrom />
      <hr/>
      <PostList />
    </div>
  )
}

export default B_Axios