console.log('Hello TypeScript');
var num = 3;
// num = '안녕하세요'; -> 오류남 Type 'string' is not assignable to type 'number'
console.log(num);
//! cf) ts코드는 실시간으로 js 컴파일 반영이 되지 않음
//   +) TS 파일은 node  파일명.ts로 실행되지 않음
