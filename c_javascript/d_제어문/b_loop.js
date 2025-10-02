
// % == 자바 스크립트 '반복문' == //
// : 동일한 코드블록을 여러번 실행하는 제어문
// - for, while, do-while, (for in, for of...)

// cf) 자바스크립트 배열 선언
//   : 변수종류 변수명 = [요소1, 2, 3, ...];
//   > 하나의 ㅇ배열에 여러 데이터 타입의 요소 저장이 가능함

let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
let bools = [true, false];

// JS 배열에는 요소의 모든 타입이 동시에 삽입이 가능함
let js = [1, '자바스크립트', true, null, undefined, [1, 2, 3]];
console.log(js);

// 배열 요소 접근: 배열명 [인덱스 번호]
// 배열 길이 확인: .length 속성

/**
 * for (초기화식; 종료조건; 증감식) {
 *    표현의 결과가 참인 동안 실행
 * }
 */

console.log('=== for 반복문 ===');

for (let i = 0; i < 5; i++) {
  // 초기화 0 + N 미만 조건: N번 반복
  // 초기화 1 + N 이하 조건: N번 반복
  
  console.log(i);
}

// ? 별찍기
for (let i = 1; i <= 5; i++) {
  let stars = '';

  // 별의 개수에 대한 반복: 1 ~ 5 까지 증가
  for (let j = 0; j < i; j++) {
    // 1 행일때 j = 0             (1번 반복: 별 1개)
    // 2 행일때 j = 0, 1          (2번 반복: 별 2개)
    // 3 행일때 j = 0, 1, 2       (3번 반복: 별 3개)
    // 4 행일때 j = 0, 1, 2, 3    (4번 반복: 별 4개)
    // 5 행일때 j = 0, 1, 2, 3, 4 (5번 반복: 별 5개)

    stars += "*";
  }
  console.log(stars);
}


// % while문 
// : 주어진 조건이 참인 동안 코드블록을 계속 실행
/**
 * while (조건식) {
 *    반복할 코드
 * }
 */

console.log('for 반복문');
for (let a = 0; a < 5; a++) { // 초기화식, 조건식, 증감식 모두 포함
  console.log(a);
}

console.log('while 반복문');
let b = 0;          // 초기화식
while (b < 5) {     // 조건식
  console.log(b);

  b++;              // 증감식: 반복 되는 반복문 반드시 스코프 내에서 작성할것
}

// % do-while문
// : while문과 유사, 조건 확인 전 반드시 한번은 코드 블록을 실행해야함

/**
 * do {
 *    반복할 실행 블록
 * } while (조건식);
 *  */ 

console.log('do-while문');
let c = 0;
do {
  console.log(c);
  c += 1;         // c++
} while (c < 5);