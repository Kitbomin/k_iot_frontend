
//! 1. 동기프로그래밍
//   : 코드가 순차적으로 실행되는것을 의미
//   - 코드 흐름 예측에 용이함

//? 장단점
//  장점) 간단하고 명확함 디버깅에 용이함
//  단점) 응답성이 저하함

function syncFunc1() {
  let sum = 0;

  for (let i = 0; i < 99999; i++) {
    sum += i;
  }
  return sum;
}

function syncFunc2() {
  let sum = 0;

  for (let i = 0; i < 100; i++) {
    sum += i;
  }
  return sum;
}

function example() {
  console.log('첫번째 작업 시작');
  let result1 = syncFunc1();
  console.log(`첫번째 작업 완료: ${result1}`);

  console.log('두번째 작업 시작');
  let result2 = syncFunc2();
  console.log(`두번째 작업 완료: ${result2}`);
}

example();

//! 2. 비동기 프로그래밍
//   : 앞선 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행하는 것을 의미함
//   - 프로그램의 메인 프름과 병렬적으로 작업이 가능함 

//? 장단점
//  장점) 병렬처리와 효율성, 응답성이 향상
//  단점) 복잡성이 증가, 디버깅이 어려움

//? setTimeout(A, B)
//  인자로 콜백함수와 지연될 시간을 받아 B 밀리초 이후 A 함수 시행
function aysncFunc1 () {
  setTimeout(() => {
    let sum = 0;

    for (let i = 0; i < 9999999; i++) {
      sum += i
      
    }

    console.log(`시간이 오래 걸리는 계산식 결과 ${sum}`);
  }, 10); //비동기 처리를 위한 시간값
  
}

function aysncFunc2() {
  setTimeout(() => {
    let sum = 0;

    for(let i = 0; i <100; i++) {
      sum += i;
    }
    console.log(`두번째 작업(첫번째 작업을 기다리지 않음): ${sum}`);
  }, 0); // 지연시간 0 설정: 코드 대기 없이 곧바로 실행을 요함
}

function example2 () {
  console.log('첫번째 시작');
  aysncFunc1(); // 추후 실행

  console.log('두번째 시작');
  aysncFunc2(); // 우선 실행
}

example2();

