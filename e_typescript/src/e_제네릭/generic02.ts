
//! 제네릭 제약조건
//  : 타입 매개변수가 특정 조건을 만족해야 함을 명시
//  - 제네릭 타입의 사용 범위 제한

function pringLength<T>(arg: T): void {
  // console.log(arg.length);
  // 길이값 측정을 못하는 타입이 있을 수도 있어서 이런 오류 발생
  // Property 'length' does not exist on type 'T'.

  // T는 반드시 length 속성을 가진 타입 사용 조건 지정
}

//? 제약조건 예시
interface ILength {
  length: number;
}

// T의 타입 변수가 반드시 ILength 인터페이스를 포함하는 타입이엏야함
// '타입변수' extends '반드시 포함될 타입'
// > 타입 검증이 타입 변수 지정 시에 결정됨
function constraints<T extends ILength>(arg: T): void {
  console.log(arg.length);
}

// constraints<boolean>(true); // Type 'boolean' does not satisfy the constraint 'ILength'.
// constraints<number>(123); // Type 'number' does not satisfy the constraint 'ILength'.

constraints<string>('안녕하세요오');

console.log(constraints({
  length: 10, // 필수 속성만 명시되어있으면 가능 - length 속성을 반드시 포함함 (구조적 타이핑, 덕 타이핑)
  value: 3,
  addedOption: 'hi'
}));


//? keyof 연산자
//  : 객체의 속성을 타입으로 간주

type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = "name" | "age"; 가 됨
// : 객체 형태의 타입에서 속성만 뽑아 유니온 타입으로 생성해주는 연산자임

let keyofValue1: Union = "name"; // 리터럴 타입
let keyofValue2: Union = "age";

//? 조건부 타입
//  : 타입 매개변수에 대한 조건 표현식 사용이 가능
//  - 조건 키워드 사용
type Check<T> = T extends string ? 'String' : 'Not a String'; // 타입에 따라 리터럴 타입을 반환해줄거임

type Type1 = Check<string>;
type Type2 = Check<number>;

let a: Type1 = 'String';
let b: Type2 = 'Not a String'; // 타입만 보고 조건을 분기할 수 있음

function checkType<T>(value: T): Check<T> {
  let result = typeof value === 'string' ? ('string' as Check<T>) : ('Not a String' as Check<T>);
  return result;
}

console.log(checkType('문자열 전달'));
console.log(checkType(500));