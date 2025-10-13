// 

//% JS의 배열
//  : 여러개의 데이터를 순차적으로 나열한 자료 구조
//  - 다양한 타입을 하나의 배열에 저장 가능함 
//  - 배열의 크기가 고정적이지 않음 (동적임)

// +) 인덱스번호: 0부터 시작
// +) 각 데이터를 지칭하는 말: 요소

//! 1. 배열 생성 방식

// 1) 리터럴('문자 그대로의' , literal) 방식

// 변수종류 변수명 = ['요소1', '2', '3', ...];
let fruits = ['사과', '오렌지', '망고', '바나나'];                      // 대괄호 안에 원하는 요소를 ,로 구분해 나열함
let numbers = [1, 2, 3, 4, 5];                                      // 숫자도 가능
let empty = [];                                                     // 빈 배열도 가능
let variableValues = [1, '문자', true, undefined, null, [1, 2, 3]]; // 여러 타입의 요소를 동시에 지정하는것도 가능


// 2) Array 생성자 사용 방식
// : 새로운 배열 생성 시 배열 크기, 초기값 지정 가능

// 변수종류 변수명 = new Arrya(크기값);          // 방법 1
// 변수종류 변수명 = new Arrya(초기값 나열);      // 방법 2
let arrayFruits1 = new Array(3);
let arrayFruits2 = new Array('사과', '오렌지', '망고');

//! 2. 배열 활용
//? 1) 요소 접근 & 수정
const sports = ['축구', '야구', '농구'];  // const를 써서 상수로 씀 (상수는 재할당이 불가능함)

//clg: console.log(); - snippet 기능 (에밋 아님)
console.log(sports[1]); //배열명[인덱스번호]

sports[2] = 'basketball';               // 근데 여기선 const를 썼는데 재할당이 되네?
console.log(sports);

// cf) 참조 자료형: 배열, 함수, 객체 등
//      >> 실제 데이터가 저장되는것이 아닌, 메모리 주소를 저장해 '참조'하는 형식임 
//      * 자바 스크립트는 내부 주소까지 가서 내용을 직접 들고와줌 

const basketball = '농구';
// basketball = 'basketball'; // TypeError: Assignment to constant variable. 오류가 남

//? 요소 길이
console.log(sports.length);

// cf) JS 배열은 동적 배열: 임의로 배열의 크기 수정이 가능함
//      >> 비워지는 요소는 undefined 값 (새로운 공간의 타입)

sports.length = 6;

sports[4] = '새로운 요소';
// 이어지는 undefined를 empty item 으로 표기해줌 
console.log(sports); // [ '축구', '야구', 'basketball', <1 empty item>, '새로운 요소', <1 empty item> ]
console.log(sports[3]); // 이렇게 콕 집어서 출력하면 undefined가 뜸 



//? 배열 탐색 & 정보 확인
// : JS의 배열이 가지는 기본 기능
// - 배열명.기능명();

let snacks = ['칸쵸', '초코송이', '포테토칩', '초코송이'];

// 1) indexOf(요소값): 찾는 요소의 첫번째 인덱스를 반환 (없으면 -1)
console.log(snacks.indexOf('초코송이')); // 1
console.log(snacks.indexOf('딸기송이')); // -1

// 2) lastIndexOf(요소값): 배열의 끝부터 찾는 요소의 첫번째 인덱스를 반환 (없으면 -1)
console.log(snacks.lastIndexOf('초코송이')); // 3
console.log(snacks.lastIndexOf('딸기송이')); // -1

// 3) includes(): 배열에 해당 요소의 존재 여부를 확인 - boolean 값으로 반환함
let hasPotatochip = snacks.includes('포테토칩');
console.log(hasPotatochip);


//? 배열 조작 함수
fruits = ['Apple', 'Banana'];


// 1) 추가: push()      - 맨 마지막 요소에 추가 (+ 수정된 배열 길이를 반환)
//         unshift()   - 제일 첫번째 요소부터 하나 이상의 요소를 추가 (+ 수정된 배열 길이를 반환)
// 2) 삭제: pop()       - 맨 마지막 요소를 삭제 (+ 해당 값을 반환함)
//          shift()     - 제일 첫번째 요소를 제거 (+ 해당 값 반환)

// +) splice() - 추가/제거 다 가능함          

let newLength = fruits.push('Cherry');
console.log(newLength);
console.log(fruits);

let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

newLength = fruits.unshift('mango', 'orange');    // 시작 부분에 하나 잉상의 요소 추가 (, 로 나열)
console.log(newLength);
console.log(fruits);

//? 추가: 추가 후의 배열 길이를 반환
//? 삭제: 삭제한 요소를 반환

//? splice()
// 1) 추가 시: splice(시작 인덱스, 0, 아이템 나열)
//          >> 3번째 인자값(아이템)이 있으면 추가로 인식됨 
console.log(fruits);
fruits.splice(1, 0, 'Straqberry', 'Coconut');
console.log(fruits);


// 2) 삭제 시: splice(시작 인덱스, 삭제할 요소의 개수)
//          >> 2번째 인자값의 개수 만큼 시작 인덱스에서 삭제
let removedFruits = fruits.splice(1, 2);
console.log(removedFruits);


//? 요소 정렬
// sort(): 오름차순 정렬
// reverse(): 내림차순 정렬
console.log(fruits.sort());
console.log(fruits.reverse());


//? 배열 변환
let fruitValues = ['사과', '반나나', '망고'];
console.log(fruitValues.join()); // 구분자를 전달하지 않으면 기본값은 ','
console.log(fruitValues.join(', '));
console.log(fruitValues.join('-'));
console.log(fruitValues.join(' '));

let str1 = '사과,바나나,망고';
let str2 = '사과-반나나-망고';
let str3 = '사과 반나나 망고';

console.log(str1.split(','));
console.log(str2.split('-'));
console.log(str3.split(' '));


//! 다차원 배열
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10]
];

console.log(matrix[2]);
console.log(matrix[2][3]);