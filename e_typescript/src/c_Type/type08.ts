
// ! === 타입 단언 (Type Assertion) === //
// : "개발자"가 TS 컴파일러 (tsc) 보다 데이터 타입의 주도권을 가지는 방법
// - 컴파일러에게 '이 데이터의 타입을 내가 지정한 타입으로 간주해라' 라고 지시내리는 행위

//? 타입 단언 방법
//  : as 키워드 사용
//  - 데이터 as 데이터타입

let someValue: any = 'this is a string';

// someValue = true; // 어떠한 값이든 할당은 가능하지만, 개발자가 문자열로 단언 하고 싶을 경우

// let length = someValue.length;
// console.log(length); //undefined가 출력됨 => somValue를 true로 바꿔서.

let length = (someValue as string).length;
// let length: number = (someValue as string).length;
console.log(length);


//? 타입 단언 사용 예시
//  : 웹 개발에서 DOM 요소를 조작할 때, 특정 DOM 요소를 구체적인 HTMLElement 타입으로 단언
//  - TS가 자동으로 해당 DOM 요소의 정확한 타입을 추론할 수 없음


//# 1) HTMLElement 타입 단언
// HTMLElement: 모든 HTML 요소 타입의 최상위 타입
// - getElementById(), querySelector() 등으로 HTML 요소를 가져올 때 리턴받는 DOM 객체의 타입은 HTMLElement 타입임
// +) 해당하는 선택자의 요소가 없을 경우 null을 반환함

// cf) HTMLElement 타입은 각 요소들이 가진 고유한 속성에 접근할 수 없음
//     -> 각 DOM 객체가 가지는 고유한 속성에 접근하기 위해서는 반드시 타입 단언이 필요함
//     Ex) HTMLButtonElement로 단언 시 .disabled 속성에 접근이 가능함

//? 자주쓰는 DOM 타입 단언
//  - button: HTMLButtonElement
//  - intput: HTMLInputDelement
//  - form  : HTMLFormElement
//  - div   : HTMLDivElement
//  - img   : HTMLImageElement


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');

  //? bool 속성
  //  HTML) HTML 키워드 만으로 명시함
  //      <button disabled>버튼</button>
  //  DOM ) DOM객체명.bool속성 = true;
  //      : boolean 값으로 설정 (기본값 false)

  if(button) {
    // 찾는 조건의 HTML 요소가 있는 경우
    (button as HTMLButtonElement).disabled = true;
  }
  // TS 컴파일러는 실시간 코드를 변환하지 않음 -> 코드 수정 시 재컴파일 필요함
});

//# 2) JSON 문자열
//   - 객체(parse) <-> JSON(stringfy)
//   : JSON 문자열을 분석(parse)해 반환되는 데이터는 any 타입으로 간주됨 

const jsonString = '{"name": "Ara", "age": 23}';
const userData1 = JSON.parse(jsonString);
console.log(typeof userData1);

type UserType = {
  name: string;
  age: number;
}

const userData2 = JSON.parse(jsonString) as UserType;
console.log(typeof userData2);
