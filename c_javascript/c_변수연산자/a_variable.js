// ! 변수: 데이터를 저장하기 위한 공간

// 필수 명명 규칙
// - 첫문자: 영문자, _, $ 가능
// - 띄어쓰기 허용 X
// - 대소문자 구분
// - 예약어 사용하면 안됨

// let 1num; X
// let num ber; X

// -------------------------//

// 선택 명명 규칙
// - lowerCamelCase 사용 권장

// EX) now, _now, now$25, now_25 (o)
//     25now, now 25, *now       (x)


// ? 올해 연도(currentYear), 태어난 연도(birthYear)
//   나이: age = currentYear - birthYear

// ! JS 변수 선언 방식(2가지- let, var)

// 1) 변수 선언 방법: 변수종류 변수명;
let letVar;
var varVar;

// 2) 변수 할당(대입) 방법: 변수명 = 데이터(값);
letVar = 10;
varVar = 20;

// 3) 변수 선언과 동시에 초기화
let letVar2 = 10;
let varVar2 = 20;

// ! let과 var의 차이
// 1. 공통점: 재할당 가능(변수의 특성), 호이스팅이 가능함

// ? 호이스팅 -> 인터프린터(코드를 읽는 기기) 가 코드를 실행하기 전 변수, 함수, 클래스 등의 선언문을 해당 범위의 맨 위로 올리는 것 ex) 파이썬

// 2. 차이점
//  - let: 동일한 영역 내에서 재선언 불가, 호이스팅 가능(선언부만 올려지고 초기화되지 않아 접근이 불가능함)
//  - var: 동일한 영역 내에서 재선언 가능, 호이스팅 가능(선언 시 undefined 초기화되어 접근이 가능함)

// ? TDZ(Temporal Dead Zone): 변수가 선언되고 초기화되기 전까지의 공간
//  - let은 TDZ에 있을 경우 사용이 불가능
//  - var는 TDZ의 변수값 사용이 가능함

// let letVar; // 위에 있어서 재선언 안됨
var varVar; // 근데 얘는 재선언 가능함


// letVar3 = 30; // 선언 전 초기화를 함...
// console.log(letVar3);
// ReferenceError: Cannot access 'letVar3' before initialization
// > 호이스팅이 되지만, 실질적인 선언 문장을 읽기 전 호출이 불가능함 

varVar3 = 40;
console.log(varVar3); //호이스팅과 TDZ 접근 가능으로 내용값 출력이 가능함

let letVar3; // 이게 다 호이스팅 덕
var varVar3;

// ! 변수 선언 예시 (나이 계산 프로그램)
let currentYear = 2025;
let birthYear = 2000;

let age;
age = currentYear - birthYear;
console.log(birthYear + '년도에 태어난 사람의 나이는' + age + '세 입니다.');


// ! 상수 (constant)
// : 변하지 않는 수, 한번 할당된 값이 변경이 되지 않음 (재할당 불가)
// - 선언과 동시에 반드시 초기화가 되어야함 

// ? 상수 명명 규칙 (필수 - 변수오 ㅏ동일)
// 선택 명명 규칙
// : UPPER_SNAKE_CASE

const PI = 3.14;
// PI = 3;
// TypeError: Assignment to constant variable.

const ME = "KitBomin";
// ME = "aa";
// TypeError: Assignment to constant variable.

