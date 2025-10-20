
//! 객체의 속성 존재 여부 확인
//  : 객체에 존재하지 않는 속성에 접근하면 undefined
//  > 조건문 + undefined 값 여부 확인하면 속성 여부 확인 가능

let obj = {
  name: 'Ara',
  height: 158,
  job: 'developer'
}

if(obj.name != undefined) {
  console.log(obj.name);
} else {
  console.log('name 속성은 없음');
}


// ! 조건문을 사용한 연산자로 검증
// 1) 논리연산자
//? or 연산자: 하나라도 true면 true

console.log('== or 연산자 ==');
obj.name || console.log('name 속성 없음');  // 출력되는거 없음
obj.hobby || console.log('hobby 속성 없음');// hobby 속성 없음 이라고 출력됨

//? and 연산자: 모두 true여야 true

console.log('== and 연산자 ==');
obj.name && console.log('name 속성 있음');  // 출력됨
obj.hobby && console.log('hobby 속성 있음');// 출력되는거 없음

// 2) 삼항연산자
//  : 객체의 기본 속성 지정에 많이 쓰임
console.log('== 삼항 연산자 ==');
obj.name = obj.name ? obj.name : '비회원 고객';
console.log(obj.name);

obj.nickname = obj.nickname ? obj.nickname : '임시닉네임';
console.log(obj.nickname);


// >> 논리연산자 변환
console.log('== 논리 연산자 변환 ==');
obj.name = obj.name || '이름을 알 수 없음'; // 이름 출력
obj.age = obj.age || '나이를 알 수 없음';   // 나이를 알 수 없음 출력

console.log(obj.name);
console.log(obj.age);

