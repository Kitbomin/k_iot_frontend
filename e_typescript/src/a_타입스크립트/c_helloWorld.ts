
console.log('Hello TypeScript');

let num: number = 3;
// num = '안녕하세요'; -> 오류남 Type 'string' is not assignable to type 'number'

console.log(num);

//! cf) ts코드는 실시간으로 js 컴파일 반영이 되지 않음
//   +) TS 파일은 node  파일명.ts로 실행되지 않음

//  >> ts-node 를 사용한 실시간 번역 및 실행
//     : js 파일 생성 X
//     : npm install ts-node --save-dev
//?       -> 설치 후 package.json 파일 확인

//(버전확인) npx ts-node -v