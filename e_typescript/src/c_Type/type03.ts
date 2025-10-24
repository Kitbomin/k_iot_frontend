
//! == 타입 별칭 (type alias) ==
//  : 새로운 타입 이름을 생성해 기존 타입을 참조할 수 있게 하는 긴으
//  - 코드의 재사용성과 가독성을 향상

//? 기본 사용 방법
//  : type 키워드 사용
//  - type 타입별칭 = 타입;
//  +) 타입별칭 지정 시 일반 변수와의 차이를 위해 UpperCamelCase 사용 권장

// 1. 변수 타입 별칭: 사용 거의 안함
type TextType = string;
let textMsg1: TextType = "텍스트 문자열입니다."
let textMsg2: string = "텍스트 문자열입니다.";
// 별 차이가 없음...

type NumberType = number;
let num1: NumberType = 123;
let num2: number = 234;

//! === 타입 어노테이션 사용 ===
//? 문제1: 기본타입 정의하기
let username: string;
let userAge: number;
let isSubscribed: boolean;

//? 문제2: 배열 타입 정의하기
let fruits: Array<string>;
let numbers: number[];

//? 문제3: void 타입을 사용하는 함수 정의하기
function printMessage (message: string): void {
  console.log(message);
}

// cf) 원시타입 키워드 그대로를 사용하는 것이 코드 해석과 가독성에 도움이 됨

// 2. 객체타입 별칭
const user: {
  name: string;
  height: number;
} = {
  name: 'Ara',
  height: 158,
}


type UserType = {
  name: string;
  height: number;
}

const user1: UserType = {
  name: 'Song',
  height: 178,
}

const user2: UserType = {
  name: '',
  height: 158
}


// 3. 함수 타입 별칭
//  : UserType 타입인 매개변수를 받아 boolean 타입의 반환 값을 생성하는 함수
//  - type 타입별칭 = (매개변수: 타입지정) => 반환타입;

type ValidUser = (user: UserType) => boolean;

// cf) 함수타입 별칭 사용 시 함수 표현식 또는 화살표 함수 사용 권장

const isValidUser: ValidUser = (user) => user.name !== ''; 

console.log(isValidUser(user1));
console.log(isValidUser(user2));

type FuncType = (num: number) => number;

const exampleFunc: FuncType = (num) => {
  num *= 2;
  return num;
}

exampleFunc(3); //6

type ArrayReturnType = (num: number) => number[];

const arrayReturnFunc: ArrayReturnType = (num) => {
  return [num, num];
}

arrayReturnFunc(4); // [4, 4]

// === 타입 별칭 사용 ===

//! 문제 1: 타입 어노테이션 사용
// 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
let age: number;
// 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
let isStudent: boolean;
// 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
age = 23;
isStudent = true;

console.log(`Age: ${age}, sutudent: ${isStudent}`);

//! 문제 2: 타입 별칭 사용
// ProductType이라는 타입 별칭을 생성
type ProductType = {
  id: string;
  name: string;
  price: number;
}
// 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함

let Product: ProductType = {
  id: '1',
  name: '삼성 노트ㅜㅂㄱ',
  price: 300000
}