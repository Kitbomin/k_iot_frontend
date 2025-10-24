
//! === 리터럴(literal, 문자 그대로의) 타입 ===
// : 특정 '값' 만을 가질 수 있는 타입을 정의할 때 사용
// - 특정 '값' 으로 타입을 제한

//? 리터럴 타입의 종류
// 1) 해당 값만을 가지는 상수(const)
let str1 = '안녕하세요';
str1 = 'hello';
console.log(str1);

const str2 = '안녕하세요';
// str2 = 'a';

// 2) 해당 값만을 타입으로 지정한 변수
let num1 = 123;
num1 = 234;
num1 = 345;

let num2: 123 = 123;
// num2 = 234; //Type '234' is not assignable to type '123'.

// >> 다른 값을 할당하려 하면 타입에러가 발생하게 됨

//? 리터럴 타입 사용 예시
//  : type키워드(타입 별칭) 와 함께 사용됨
//  +) 유니언 타입고 함께 사용하여 다양한 값을 표현함과 동시에 제한 가능
//     >> 변수가 '특정 값'들 중 '하나만 가질 수 있도록 제한함'

// 1) 변수 사용
type Directions = 'up' | 'down' | 'left' | 'right';

let move: Directions;
// move = 'diagonal'; // Type '"diagonal"' is not assignable to type 'Directions'.ts(2322) let move: Directions
move = 'down';

// let move2: string;
// move2 = 'diagonal';


// 2) 매개변수 사용
function setAlignment (align: 'left' | 'center' | 'right') {
  // let container = document.querySelector('#container');

  // container.style.textAlign = align;
}

setAlignment('center');

// 3) iot반 학생 관리 시스템
type Students = '학생1' | '학생2' | '학생3' | '학생4' | '학생5';

let student: Students;

function attendanceFunc(student: Students) {
  console.log(`${student}가 출석하였습니다.`);
}

// attendanceFunc('학생 6');
attendanceFunc('학생1');

// cf) 리터럴 타입을 활용한 유니언 타입 사용 시 여러 타입의 데이터 혼합 가능
type mixedType1 = 'yes' | 'no' | 1 | 2 | 3;
type mixedType2 = [1, 2] | {id: string; password: string;};

//! 객체 리터럴 타입
// : 실제 객체 데이터 정의
type UserType = {
  name: 'Ara',
  height: 158
}

let user: UserType = {
  name: "Ara",
  height: 158
}

// user.name = 'Silbia'; => 이렇게 해도 할당 안됨

// +) 객체의 구조적 타이핑(덕 타이핑)
//  : 객체의 타입을 실제 값 보다는 그 구조나 멤버에 의해 결정하는 방식
//  - 객체의 형태가 유사하다면, 같은 타입으로 간주

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Name: ${person.name}, age: ${person.age}`);
}

// Person 타입이 명시적으로 구현되지 않은 객체 생성
const p1 = {
  name: '송슈슈',
  age: 26,
  hobby: 'play guitar'
}

const p2 = {
  name: 'Ara'
}

const p3 = {
  name: '김태희',
  age: 21
}

greet(p1); // - 구조적 타이핑에 의해 Person 취급 (hobby)속성 무시
// greet(p2); - Person 타입의 구조와 일치하지 않음 -> Person으로 취급하지 않음
greet(p3); // - Person과 구조가 일치하기 때문에 Person 취급

// +) 중첩된 객체타입 정의
type Address = {
  street: string;
  city: string;
  zipCode?: string;
}

type UserProfile = {
  username: string;
  email: string;
  address: Address; // 타입 객체의 구조를 가짐
}

let userProfile: UserProfile = {
  username: 'Ara',
  email: 'qwer1234',
  address: {
    street: '123street',
    city: '부산'
  }
}


// +) 객체의 인덱스 서명
//  : 객체의 모든 속성에 대해 타입을 정의하지 않고 키와 값의 타입만 정의해 구조를 유연하게 적용하는 방법

type UserDataType = {
  //? 일반적인 객체의 속성 타입 명시
  name: string; //속성명: 속성 타입

  //? 인덱스 서명(index signature, 시그니처)
  // [속성명: 인덱스 타입]: 속성값타입;
  [key: string]: string | number | boolean;

  // + 키(key)는 string 사용 권장
  //   값(value)는 어떤 타입으로든 가능함
}

let userData: UserDataType = {
  name: 'Ara',
  
  height: 123,
  age: 23,
  isStudent: true,
  hobby: '운동',
  // arr: ['aaa', 'aaa'] => 인덱스 서명에 존재하지 않는 값은 할당이 불가능함
}

userData.email = "zzxxcc1433@naver.com";
// userData.address = { city: 'busna' }; => 명시되지 않은 값은 할당이 불가능함