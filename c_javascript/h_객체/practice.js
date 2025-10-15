//! 배열
// 변수종류(const/let) 변수명;
// 변수종류(const/let) 변수명 = [값1, 2, 3];


//! 함수
// 1) 함수 선언식: function 함수명(매개변수 나열) { ... }
// 2) 함수 표현식: 변수종류 변수명 = function() { ... }
// 3) 화살표 함수: 변수종류 변수명 = () => { ... }


//! 객체
//? 키와 값의 쌍으로 나열 (속성과 기능 사이는 콤마로 분리 가능)
/**
 * 변수종류 변수명 = { 
 *      키: 값,                 //속성 지정
 *      키: {
 *         키: 값,
 *         키: 값
 *      }
 *      키: function() {        //함수 지정
 *      ...
 *      },
 *      키: function() { ... }
 *    }
 * 
 * 
 * == 객체 접근 방법 ==
 * 변수명(객체명).속성명;
 * 변수명(객체명).기능명();
 */

//! 객체, 배열, 함수 복습 문제


// 문제 1
// 1) 객체 생성
// : person 객체 생성 - name(문자열), age(숫자), isStudent(boolean) 속성 추가

// cf) 불리안 타입 변수 명명 규칙 -> is~~

// let은 속성값 변경이 가능함
let person = { //객체 리터럴 방식: {} 중괄호 사용

  // 속성 (변수): '키: 값'의 쌍으로 정의
  name: 'Ara',
  age: 23,
  isStudent: true
}

// 객체의 속성값에 접근
// 1) 객체명.속성명;
console.log(person.age);
// 2) 객체명[속성명];
console.log(person["name"]);



// 2) 배열 생성
// : fruits 배열 생성, 여러가지 과일 이름을 문자열로 추가 (3가지 이상)
// - 두번째 과일을 콘솔에 출력

let fruits = ['banana', 'apple', 'mango'];
console.log(fruits[1]);


// 3) 함수 생성
// : 두개의 숫자를 매개변수로 받아 그 합을 반환하는 add 함수 작성
function add1(x, y) {
  result = x + y;

  return result;
}

let add2 = function(a, b) {
  return a + b;
}

let add3 = (p, q) => p + q;

console.log(add1(1, 2));
console.log(add2(1, 4));
console.log(add3(3, 2));



//! 문제 2
/**
 * ? 배열의 요소를 각각 순회하여 변수에 할당
 *    : 중괄호 내에서 변수를 활용하게 됨
 *    >> 배열명[인덱스명]
 *    >> 객체명["키명"]
 * 
 * for (let 변수명 in 배열명) {
 *  
 * }
 */

// const sameFive = {
//   arr = [1, 2, 3, 4, 5]

//   for(let i in arr) {
//   arr[i] += 5 - arr[i];

//   return arr;
// }
// }


console.log('== 문제 2 ==');

// 1) 객체 탐색: 초급에서 작성한 peerson 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
for(let i in person) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.isStudent);
}

// 2) 배열 메서드(배열 내장 함수) 사용: 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장, 이 배열을 콘솔에 출력

arr = []
for(let i in fruits) {
  upper = fruits[i].toUpperCase;
  arr.push(upper);
  console.log(arr);
}

// 3) 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

function change(a, b) {
  arr = []
  
  for(i in a) {
    arr.push(a[i])
    console.log(arr);
  }
  for(j in arr) {
    console.log(arr);
    arr[j] = arr[j] + b[j]
  }
  return arr
}
console.log(change([1, 2, 3], [4, 5, 6])); 

//! == 문제 3 ==

// 1) 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringfy(객체데이터)
// >> JSON.parse(JSON데이터)

let stringfyPerson = JSON.stringify(person);
let parsePerson = JSON.parse(stringfyPerson);

console.log(stringfyPerson);
console.log(parsePerson);


// 2) 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링(filter)하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

// 성인 사용자의 이름만 새로운 배열로 저장 //# map
// const users = ['John', 'Doe'];

function adultUserNames(users) {
  return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}

console.log(adultUserNames(users)); // [ 'John', 'Doe' ]

