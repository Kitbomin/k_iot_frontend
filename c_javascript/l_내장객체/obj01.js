//! 자바스크립트 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성 제공

// 1. Number 객체의 기본 메소드
//  : 수치형 데이터를 처리하는 속성과 메서드를 포함한 JS 내장 객체
//    > number 자료형

//! 1) toFixed(N): N자리까지의 반올림
let num = 123.4567;
console.log(num.toFixed(3));
console.log(num.toFixed(1));
console.log(num.toFixed()); // 자릿수를 지정하지 않으면 소수점 전체 반올림이 되어 정수가 반환됨

//! 2) isNaN(), isFinite()
//   : 각각 Nan값인지, Infinity() 값인지 확인하는 메서드
//  cf) 위 두 값은 비교연산자 사용이 불가능함
let notNum = Number('숫자로 반환할 수 없는 값');
console.log(notNum);
console.log(notNum === NaN);
console.log(Number.isNaN(notNum));
console.log(isNaN(notNum));

// Infinity(양의 무한대) / -Infinity(음의 무한대)
// >> 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성됨

console.log(10 / 0);
console.log(-10 / 0);

// cf) finity (finish 끝): 유한
//    infinity(부정접두사): 무한
console.log(Number.isFinite(notNum));
console.log(isFinite(notNum));

console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(10));


// 2. String 객체의 기본 메소드
//  : 문자열을 처리하는 메서드를 제공

//! 1) trim(): 문자열 양쪽 공백 제거(띄어쓰기, 줄바꿈)

let str = `  
            이것은 문자열입니다
            ㅏ ㅏ
                `;

console.log(str.trim()); //시작과 끝의 공백만 제거해줌 => 가운데 공백은 제거를 해주지 않는다는 소리

//! 2) split(): 문자열을 특정 기호로 나누어 배열로 반환해줌
let manyData = `
생년,월,일
2003,10,08
2000,10,24
2006,07,28
1991,10,08
`
console.log(manyData);

manyData = manyData.trim();

// 줄바꿈 기호 \n
manyData = manyData.split('\n');

console.log(manyData);

manyData = manyData.map(line => line.trim().split(','));
console.log(manyData);

//! 3) length
//   : 문자열 길이 반환
console.log(' hello, JS ^O^'.length);


//! 4) toLowerCase(), toUpperCase()
//   : 대소문자 변환
console.log('HellO'.toLowerCase());
console.log('HellO'.toUpperCase());