//! 4. Math 내장 객체: 수학과 관련된 기본 연산 객체

console.log(`원주율 값: ${Math.PI}`);

console.log(`0 이상 1 미만의 난수 생성: ${Math.random()}`);
// console.log(`0 이상 N 미만의 난수 생성: ${Math.random() * N}`);
console.log(`0 이상 10 미만의 난수 생성: ${Math.random() * 10}`);

console.log(`소수점 자리 내림: ${Math.floor(Math.random() * 10)}`);

console.log(`제곱근(square root): ${Math.sqrt(16)}`);
console.log(`제곱근(square root): ${Math.sqrt(225)}`);



//! 5. Date 객체: 날짜, 시간 데이터 객체

let now = new Date();

// 한국 UTC는 9시간 빠름: UTC + 9 할것
console.log(now); // 2025-10-20T03:12:59.428Z

//! 날짜
// getDate()    : 현재 '일'
// getDay()     : 현재 '요일' (일요일 = 0 ~ 토요일 = 6 으로 출력됨)
// getFullYear(): 현재 '년도' (YYYY: 2025)
// getMonth()   : 현재 '월' (1월 = 0 ~ 12월 = 11 으로 출력됨 => 현재 월은 반환값 + 1 하면 출력됨)

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);

//! 시간
// getHours()   : 0 ~ 23
// getMinutes() : 0 ~ 59
// getSeconds() : 0 ~ 59

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(`현재 시간은 ${now.getHours()}시: ${now.getMinutes()}분: ${now.getSeconds()}초 입니다.`);


//! 현지 날짜 표기법 & 시간 표기법 : Locale(현재의)

console.log(now.toLocaleDateString()); // YYYY-MM-DD
console.log(now.toLocaleTimeString()); // 오전/오후 HH:mm:SS

// cf) 월 - 일 - 년도 (MM-DD-YYYY)


//! == 요일 데이터 문자열로 일반인들도 알아볼 수 있게 출력 ==
const current = new Date();
console.log(current); //2025-10-20T03:23:28.608Z (요일 값은 여기에 잘 안찍힘)

// 요일 배열 정의
const days = ['일', '월', '화', '수', '목', '금', '토'];

// getDay()로 인덱스를 받아 배열에서 요일 문자열 추출
const dayString = days[now.getDay()];

console.log(dayString);