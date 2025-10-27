
//! === 인터페이스(interface) === //
//  : 객체(속성, 메서드) 구조를 정의하는 TS 기능
//  +) 함수 타입 정의도 가능

//  - 컴파일 시점에 타입 체킹을 사용함
//    : 다양한 구현체에 동일한 인터페이스 사용으로 일관성과 재사용성 향상을 도모함

//? cf) 타입 별칭 (type alias)
//    : 데이터 타입 명시
//    - 원시 타입, 유니온, 인터섹션 등의 모든 타입을 별칭으로 지정 가능함
type UserType = {
  name: string;
  age: number;
}


//? 1) 인터페이스 구현 방법
//   : interface 키워드 사용
//   - 인터페이스 명은 대문자로 시작
//   - 객체의 문법 체계 모두 사용 가능 (Optional ?, readOnly 다 가능)
interface IUser {
  // 인터페이스명: I+타입명
  // 타입별칭: 타입명Type

  name?: string;
  readonly age: number;

  // 객체 메서드 명시
  // : 메서드명(매개변수: 타입): 반환타입
  greet(name: string): void;
}

let userA = IUser = {
  age: 50,

  // greet(name) {
  //   console.log(`${name} hello`);
  // }

  // 메서드 형식은 화살표 함수 권장
  greet: (name) => {
    console.log(`${name} hello~`);
  }
}

userA.greet('ARA');


//? 2) 클래스에서 인터페이스 구현
//   : implements 키워드 사용
//   - 해당 타입을 가지는 클래스 정의
class Student implements IUser {
  // 2) 클래스의 해당 속성이 반드시 초기화 될 것을 "개발자"가 컴파일러에게 안내하는 역할
  //    >> 컴파일러에게 내가 반드시 나중에 초기화 될거라고 알리는 내용
  //    -> 태그 옆에 ! 를 붙힘
  //    >> Definition Assignment Assertion
  name!: string;
  age: number; 
  // Property 'age' has no initializer and is not definitely assigned in the constructor.
  // : TS 클래스는 객체 속성이 생성자 내에서 초기화 되지 않으면 오류가 발생함


  // 1) 클래스 필드 초기화 관련 오류 해결: 생성자에서 모두 초기화할것
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string): void {
      console.log(`Hello1, my name is ${name}`);
      console.log(`Hello2, my name is ${this.name}`);
  }
}

const sutdent1 = new Student('누군가', 20); // this.name === '누군가'
sutdent1.greet('무언가');   //name === '무언가'

const sutdent2 = new Student('어떻게', 30);
sutdent2.greet('이것은');


//? 인터페이스 확장 
//  : A extends B 키워드 (A 와 B가 같아야함)

// cf) A implements B 키워드 => A 와 B 가 다른형식  A: 클래스 B: 인터페이스 여야함

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
  // color: string; - 해당 속성이 생략된 것처럼 작동
}

let square1: Square = {
  sideLength: 10,
  color: 'red'
}

// === interface VS type alias ===
// 1) interface
//  - extends 키워드로 확장 가능함 (A인터페이스 extends B인터페이스)
//  - 같은 이름으로 여러번 선언 가능 (자동 병합됨)
interface A {a: string;}
interface A {b: string;}
interface A {c: string;}
// 최종적으로 A는 interface A {a: string; b: string; c: stirng;} 이 됨
//  - 객체 형태만 정의 가능함
//  - implements 사용 가능 (클래스 구현에서 사용)
// >> 선언목적: 구조 중심, 객체 설계

// 2) type alias
//  - &(인터섹션, 교차타입)으로 확장 가능 (A타입별칭 & B타입별칭)
//  - 같은 이름으로 중복선언이 불가능함
type B = {a: string;}
// type B = {b: string;} // Duplicate identifier 'B'.
//  - 원시 타입, 유니언, 인터섹션, 튜플 등 모든 타입 표현 가능함
//  - implements 사용은 가능하지만 권장하지 않음
// >> 선언목적: 타입 조합(Union/Intersection 등) 중심