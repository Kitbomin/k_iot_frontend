
//! 타입스크립트 객체 타입

//? 1. 객체 타입 지정(명시) 방법
// {} 중괄호를 사용
//   - 각 데이터 별(속성별) 타입 명시의 구분은 세미콜론 사용을 권장함 (+ , 콤마 사용도 가능하긴함)
const user: {
  name: string;
  age: number;
  favorite: any[];
  height: number;
} = {
  name: 'Ara',
  height: 158,
  age: 29,
  favorite: [1, '악기', false, null, undefined],
  // nicname: '개구리' // 타입을 명시하지 않은 속성은 정의할 수 없음
}

//? 2. 객체의 선택 속성 (선택적 프로퍼티)
//   : 속성명 뒤에 물음표(?)를 붙혀 해당 속성이 존재하지 않을 수도 있음을 표현함
const Ara: {
  name: string;
  height?: number;
} = {
  name: 'Ara'
  // height: 158 -> 생략해도 오류가 나지 않음 (선택적 속성)
}

//? 3. 읽기 전용 속성
//   : 속성명 앞에 readonly 키워드를 사용해 해당 속성의 재할당을 금지함
const readonlyUser: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: 'Ara',
  age: 23,

}

// 객체의 속성값 수정
// 객체명.속성명 = 재할당값;

// readonlyUser.name = 'Silbia'; // Cannot assign to 'name' because it is a read-only property.
// readonlyUser.age = 30;        // Cannot assign to 'age' because it is a read-only property.
readonlyUser.address = '부산광역시';

console.log(readonlyUser);

