// 함수 매개변수 (기본 매개변수, 나머지 매개변수)

//! 1. 기본 매개변수(defalt)
//   : 함수에 인자를 전달하지 않았을 때 사용되는 기본값 정의
function defaltFunc(param1 = value1, param2 = value2) {

}

//? cf) 기본 매개변수
// : 값 전달이 되었으면 - 전달된 값이 지정됨
// : 값 전달이 되지 않았으면 - 기본값이 지정됨
// >> 값 전달으 ㅣ선택이 있는 경우, 무조건 값 할당이 필요한 데이터보다 뒤에 작성을 해야함

function greet1(name='비회원 고객', age) {
  console.log(`안녕하세요, ${name}님! ${age}세 입니다!`);
}

greet1('Ara', 30);
greet1(30); // 안녕하세요, 30님! undefined세 입니다! 

function greet2(age, name='비회원 고객') {
  console.log(`안녕하세요, ${name}님! ${age}세 입니다!`);
}

greet2(23, 'Ara');
greet2(23); 


//! 2. 가변 매개변수
//   : 함수 호출 시 인자 수의 고정이 없음
//   - 함수 내부에서 유동적으로 처리해버림

//? JS는 가변 매개변수를 나머지 매개변수 (Rest Parameter)를 통ㅎ ㅐ구현하게 됨
// >> 함수에 전달된 인자들을 배열의 형태로 전달받음

// 구현 방법
// : 매개변수명 앞에 ... (spread 연산자)를 붙여 정의
// > 데이터가 정확하게 지정될 변수가 있는 매개변수 목록들보다 마지막에 위치해야함

function spreadFunc(num1, num2, ...nums) {
  // num1 과 num2에는 정확한 데이터값이 할당 될 예정
  // : 배열을 담는 변수가 될거임

  console.log(nums);
}

spreadFunc(1,2,3,4,5,6,7,9);
spreadFunc(1,2,3);
spreadFunc(1,2, [1,2,3]);
// spread 연산자는 요소를 배열에 전달한다는것이 중요함


//? == 연습문제: 전달된 여러 데이터 중 최소값 구하기
// cf) Math.min() 함수: 복수의 인자를 받아 그 중 최소값을 반환함

// 매개변수 내의 ...연산자 - 나머지 매개변수
// 전달된 인수들을 하나의 배열로 모음
function FindMin(...numbers) {

  // 배열의 요소들을 개별 인수로 펼치는 역할을 함 (...연산자)
  let minNum = Math.min(...numbers);
  return minNum;
}

console.log(FindMin(31, 23, 12, 214, 32)); 