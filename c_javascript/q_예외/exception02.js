/**
 * ! Error 객체
 * : JS 내의 모든 예외는 JS 내장 객체인 Error 객체를 상속받음
 * - Error 객체의 주요 속성 -> name, message, stack
 * 
 * ? 사용자 정의 예외 객체
 *   : 예외가 발생하면 예외와 발생된 정보를 확인
 *   - new Error('message 속성에 담길 문자값');
 */

let myError = new Error('에러를 생성합니다.');
// console.log(myError.message);

//? throw 키워드
//  : 강제 예외 발생 키워드
//  - 예외나 기타 명시적인 값을 표현하는데에 사용

// --- 예외를 발생시켜 보았다 --- //
// throw myError;
// throw '안녕하세요';
// throw 25;

function text(object) {
  if (!object || object.a === undefined || object.b === undefined) {
    // object가 undefined 라면?
    // : 매개변수가 변수로 선언은 되었지만 인자값이 전달이 되지 않은 경우임

    // object.a 와 object.b가 undefined 라면?
    // : 객체의 각 속성에 초기화가 되지 않은 경우임

    throw new Error('함수 호출 시 object와 a, b 속성이 전달되어야 합니다.');
  }
  console.log(object.a + object.b);
}

// text(); // Error: 함수 호출 시 object와 a, b 속성이 전달되어야 합니다.

try {
  text({a: 5, b: 3});
  text({a: 2, b: 'Ara'});
  text(); // 에러 발생:  함수 호출 시 object와 a, b 속성이 전달되어야 합니다.
  text({a: 2});
  text({b: 'Ara'});
} catch (e) {
  console.error('에러 발생: ', e.message);
}

console.log('일반적인 코드 흐름');
