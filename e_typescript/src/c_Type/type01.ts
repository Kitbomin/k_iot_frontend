
//! === 타입스크립트 '타입' ===
// : 타입 명시(작성)가 필수 사항은 아님
// - 작성시 프로그램의 안정성 향상과 가독성을 높이긴 함

//! 타입 명시 방법
//  : 타입 어노테이션 (type annotation - 타입 주석)
//  - 변수명 뒤에 콜론을 사용해 타입을 지정해줌
//    >> 앞의데이터: 뒤의값

//! 타입 종류
// 1. 기본 타입(원시 타입 - string, number, boolean 등)
//  : typeof 연산자 (문자열로 타입 반환)

// 자바스크립트에서의 변수 선언
// let name = 'Ara';
// let age = 23;
// let isStudent = true;
// 타입스크립트에서의 변수 선언
let name: string = 'Ara';
let age: number = 23;
let isStudent: boolean = true;

let anyData = '문자열'; // 타입 작성 생략 가능: 타입 체킹을 생략하는 것이 아님
// anyData = 123; Type 'number' is not assignable to type 'string'. 
//? 타입을 명시하지 않아도 초기화 데이터 타입이 지정됨

// 2. 배열 타입
// 1) 기본 타입 명 뒤에 [] 첨부
let list1: string[] = ['1', '2', '3'];
// 2) 제네릭타입: Array<타입명>
let list2: Array<number> = [1, 2, 3];

// 3. void 타입
//  : 아무런 값이 없음을 나타냄
//  - 주로 함수의 반환값이 없거나, return 키워드 뒤에 값이 없는 경우

//? 함수 타입 지정 방법
// function 함수명 (파라미터: 타입): 반환타입 { ... }

// function voidType(parameter) {  // 'parameter' is declared but its value is never read.
//   console.log(parameter);       // Parameter 'parameter' implicitly has an 'any' type.
// }
// 타입 스크립트에서는 파라미터의 타입을 지정하지 않으면 오류가 발생함

function voidType(parameter: number):void {
  console.log(parameter);
  return;
}

voidType(10);

function stringReturn(str1: string, str2: string): string {
  return str1 + str2;
}

console.log(stringReturn('나는 ', '맘무')); 

// 4. null 과 undefined
//  - null: 아무것도 없음, 데이터가 잘못된 경우
//  - unddfined: 변수 생성은 했지만, 안에 값이 없는 경우

//? JS 와의 차이점
//  : JS는 각각의 타입에 다른 타입의 데이터를 지정 가능함
//  > TS는 각각의 타입으로 지정된 변수는 각 타입만 할당이 가능함

let nullType: null = null; // 타입 주석을 사용한 타입 강화 시 해당 타입의 내용물만 담을 수 있음
// nullType = 'hello'; Type '"hello"' is not assignable to type 'null'.

// let unddfinedType;
// unddfinedType = 'hello';
// unddfinedType = 123; // 얘는 오류 안남 -> 타입 주석 안썼으니까.

let unddfinedType: undefined;
// unddfinedType = 'hello'; // 오류남
// unddfinedType = 123;



// 5. any 타입 (모든)
//  : 모든 타입에 대해 허용하는 타입
//  - 타입 검사 오류 방지를 위해 사용 (모든 타입과 호환이 가능함)
//  - 사전에 오류 타입 계산 불가함 -> ts를 js 처럼 사용하는거임

let anyType: any = 3;
anyType = 'hello';
anyType = 123;
anyType = {};
anyType = [];
// 다 됨

let unknownData; // let unknownData: any
// : 선언 시 직접적인 타입 명시를 하지 않을 경우
//   >> 값이 할당되기 전까지 자동으로 any 타입으로 간주함

// 6. never 타입
//  : 절대 발생하지 않는 값의 타입임
//  - 함수가 예외를 발생시키거나, 끝나지 않을 때 사용함
function error(message: string): never {
  throw new Error(message);
}

// error('에러 발생!!!');



