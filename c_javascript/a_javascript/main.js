// main.js
// ! 자바스크립트 파일 확장자: .js

// cf) 주석
//    : ctrl + /

// 1) 한 줄 주석: //
// 2) 여러줄 주석: /**/
// 3) 문서 주석: /** */

// JS 주석
/**
 * 문서 주식이에요
 * 여러줄 주석이기도 하구요
 */

// console.log("Helloooooooooooo");

// 기능
// : 버튼을 클릭하면 새로운 이름을 입력받는 창이 생성, 작성된 이름으로 버튼 내의 Player 명이 변경되도록 하는 기능

// 현재 웹 문서에서 button 태그를 찾아 저장
// ? query(질문하다)Selector(선택자를)
const button = document.querySelector('button');

// 저장된 변수에 클릭 이벤트를 추가
// ? add(더하다)EventListener(이벤트 읽기를)
button.addEventListener('click', updateName);

// updateName: 새로운 이름을 입력받고 버튼을 수정하는 기능
// 사용자 정의 함수
function updateName () {
  const name = prompt('새로운 이름을 입력해주세요.');

  // 저장된 변수에 클릭 이벤트를 추가
  // 변수명.기능(); -> 객체 형식
  button.textContent = `Player 1: ${name}`;
}

// ! 플러그인설치 
// - 코드 스니펫 (JavaScript (ES6) code snippets) 설치 -> JS 단축키 제공
// clg: console.log();
// >> 출력문 (콘솔 창 출력)
//    - 간단한 코드, 결과값 출력 (개발자 친화적 코드)
// >> 개발자 도구 -> Console 창에 있음 
console.log('안녕하세요오오오오오');

// fun
function name(params) {
  
}

// fof
// 반복문
for (const item of object) {
  
}

for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}

//imp
// import moduleName from 'module';