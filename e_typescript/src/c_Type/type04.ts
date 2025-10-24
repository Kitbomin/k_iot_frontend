
//! === Union 타입 ===
// : 여러 타입 '중' 하나가 될 수 있는 값을 나타내는 방법
// - 값에 허용된 타입을 두 개 이상으로 지정
// - OR 연산자 (A 또는 B ... 중에서)
// - verical bar 사용 (|) 하여 표현

//? 유니언 타입 사용
// type UnionType명 = Type1 | Type2 | Type3 ...;

type VariableType = string | number | boolean | string[];

let value: VariableType = '문자열';
value = 123;
value = true;
value = ['1', '2', '3'];
// value = [1, 2, 3]; -> 얜 안됨

// >> TS는 변수의 타입이 어노테이션 또는 초기화 값으로 지정됨
//    : 유니언 타입은 타입에 대한 확장성을 가짐

//? 타입 별칭 사용 예시
// 'A' 가 회원이면서 관리자
type User = {
  id: string;
  password: string;
  name: string;
  address: string;
}

type Admin = {
  id: string;
  password: string;
  department: string; //회사 부서
}

// 위 두가지 타입을 가지는 사이트에서 타입 별칭이 union 타입인 경우
type AdminUser = Admin | User;
// 밑이랑 조금 유사하긴 함
// type AdminUser = {
//   id: string;
//   password: string;

//   name? : string;
//   address?: string;
//   department? : string;
// }

let Ara: AdminUser = {
  id: 'qwer123',
  password: 'qwer123',

  department: '개발팀',
  // name: 'Ara',
  // address: '부산광역시'
}

//? 타입 별칭에서 union 타입 사용 시 
//  : 정확한 타입 지정을 위해 '타입 가드'를 사용해야함 
// cf) 타입 가드: 조건문을 통해 타입을 좁혀나가는 방식

type Union = string | number;
function getAge(age: Union) {
  // 나이가 전달될 경우
  // - 숫자: 소수점 자리가 없도록 반올림 + 문자열ㄹ로 반환해주는 .toFixed() 사용
  // - 문자: 대문자로 변환하여 반환 (.toUpperCase())

  // +) 유니언 타입의 변수는 포함된 타입에서 모두 포함하는 속성과 메서드만 사용 가능함
  // age.toFixed(); // Property 'toFixed' does not exist on type 'Union'. Property 'toFixed' does not exist on type 'string'.

  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  } else {
    age = age.toUpperCase();
    return age;
  }
}

console.log(getAge(12.3456));
console.log(getAge('12 years old'));