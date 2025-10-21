// async01.js

//# === 비동기 프로그래밍 === //
// : asynchoronous (비동기적인)
// : 아닐 비, 같을 동, 시기 기 >> 시간이 같지 않음
// - 특정 코드의 실행 완료를 기다리지 않고, 다음 코드를 실행하는 프로그래밍 방식

//? cf) 자바스크립트는 "왜?" 비동기를 쓸까?
// : JS는 단일 스레드를 사용하여 한 번에 한 줄만 실행!
// >> 하지만 자바스크립트 내에서 
//      네트워크 요청(HTTP), 파일 읽기, 타이머, 대용량 연산은 시간 소요가 많음
// >> 해당 동작에서 '동기 프로그래밍' 사용 시 
//      해당 화면이 멈추고(프리징) 클릭도 못 받는 "끊김" 현상이 발생
// >> 그래서 JS는 느린 작업은 밖에 맡겨두고(비동기), 나머지 코드를 계속 진행 
// >> 느린 작업이 끝나면 "끝났어!"라고 응답을 주고 그 결과를 이어서 처리하는 구조

// "부드러운 UI, 빠른 반응성, 높은 처리량"이 핵심 이점!

//? 비동기 프로그래밍 활용 기능
// - 네트워크 요청(서버와의 통신)
// - 파일 I/O 
// >> 시간이 오래 소요되는 작업

// % 동기 프로그래밍
console.log('동기 구현');

function work() {
  // 시간이 오래 소요되는 함수
  const start = Date.now();

  // for(let i = 0; i < 9999999999; i++) {}

  const end = Date.now();

  console.log( end - start + "ms" ); //ms 단위 반환
}

work(); //work() 작업이 종료되지 않으면 다음 콘솔창 출력이 되지 않음
console.log('동기 작업 완료 후 실행될 코드 블록');

// % 비동기 프로그래밍
console.log('비동기 구현');
function asyncWork() {
  // 시간이 오래 소요되는 작업
  // +) 콜백 함수 사용
  //    >> 다른 함수의 '인자'로 전달되는 함수

  // cf) setTimeout(); => 콜백함수, 지연시간
  //     : 지연시간 뒤에 콜백함수를 호출하게 될 거임
  setTimeout(() => {
    const start = Date.now();
    // for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();

    console.log(end - start + "ms");
  }, 0); // 0: 최소 지연시간 -> 브라우저마다 약 4ms 정도의 지연 시간이 있음

  // >> setTimeout()은 비동기 함수임 
  //    : 백그라운드에서 작업이 수행 -> 기존의 코드 흐름을 방해하지 않음

}

console.log('비동기 작업 시작');
asyncWork();

// setTimeout()의 비동기 성질로 asyncWork보다 먼저 출력이 됨
console.log('비동기 작업 완료 후 실행될 코드블록');

// % 콜백함수의 비동기 예제
function callbackWork(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();

    console.log(end - start + "ms");
  }, 0);

  callback();
}

function afterWork() {
  console.log('작업이 완료되었습니다.');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterWork);
console.log('2. 시간이 오래 걸리는 작업을 기다리지 않습니다.');
