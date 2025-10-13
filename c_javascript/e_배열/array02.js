//% === 데이터의 복사 ===

//! 1. 일반 자료형
// : 원본 데이터와 복사된 데이터가 별도 저장됨
// - 서로 영향을 끼치지 않음

let num1 = 10;
let num2 = num1;
console.log(num1);
console.log(num2);

num2 = 20;
console.log(num1); // 10 -> 원본 데이터가 유지됨
console.log(num2); // 20 -> 바뀜


//! 2. 참조 자료형
// : 변수명을 할당하는 형식의 복사는 주소값을 전달하게 됨
// > 원본 데이터 수정 시 같은 주소 체계를 가지는 복사 데이터도 같이 수정됨

let array01 = [11, 22, 33];
let array02 = array01;
console.log(array01);
console.log(array02);

array01[1] = 55;
console.log(array02); // 바뀜

array02[2] = 77;
console.log(array01); // 여기도 바뀜

// >> 원본과 복사본 사이의 값이 공유됨 

// 주의
array02 = [1, 2, 3]; // 새로운 주소값이 할당됨
array01[0] = 10;
console.log(array02); // array02가 변하지 않음



//% == 깊은 복사 & 얕은 복사 == //

//! 1) 얕은 복사: 주소(위치)만 복사함
//    >> 값을 공유하게 됨
let example = [1, 2, 3];
let copy = example; //주소만 전달하게 됨


//! 2) 깊은 복사: 내용(값) 자체를 완전히 새로 복사함
//    >> 값이 독립적으로 존재하게 됨
//? 원본과 복사본의 독립성을 보장 + 복사
// : 스프레드 연산자(...) 사용
// - 배열 또는 객체의 요소를 개별 요소로 확장
// - 여러 요소를 하나의 형태로 결합 시 사용함

// 1) 개별 요소 확장
let english = ['a', 'b', 'c', 'd'];

// 스프레드 연산자 사용법: ...변수명
// >> 배열 내부의 요소만 복사가 됨
let copyEnglish = [...english];
console.log(copyEnglish);

let copyEnglish2 = ['z', ...english, 'zz'];
console.log(copyEnglish2);

// 과연 원본과 복사본은 값을 공유하는가?
english[0] = 'aaaaa';
console.log(copyEnglish); // 원본과 복사본이 독립적이란걸 알 수 있음

// 2) 하나의 형태로 결함
let seperate1 = [1, 2, 3];
let seperate2 = [4, 5, 6];

let merge1 = [...seperate1, ...seperate2];
console.log(merge1); // 각 요소가 결합되서 하나의 배열이 됨

let merge2 = [...seperate2, ...seperate1];
console.log(merge2);



//! 얕은 복사: 주소만 전달, 두 배열이 같은 데이터를 공유함
//! 깊은 복사: 데이터를 새로 복사, 서로 완전히 독립적인 배열임