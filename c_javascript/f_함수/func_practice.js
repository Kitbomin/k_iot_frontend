//! == JS 함수 예시
//? 요구사항 정리
// 1. 회사의 직원들을 위한 월별 근무 시간과 시급을 기반으로 급여 계산 프로그램 작성
// - calculatePay(hours, rate);
// - 근무시간, 시급을 인자로 받고, 총 급여를 계산하여 반환

// 2. 근무 시간이 160 시간 초과 시, 초과 근무 시간은 기본 시급의 1.5배 계산

// 3. 각 직원의 월별 근무 시간ㅇ과 시급이 다를 수 있기 때문에 유연하게 동작 가능한 함수로 작성

// 직원 A: 172 시간, 시급 20달러
// 직원 B: 160 시간, 시급 22달러
// 직원 A: 180 시간, 시급 18달러

// > 직원 @ 급여: $ 계산된 금액

// function calculatePay(hours, rate) {
//   let total = 0;
//   let plusTotal = 0;
//   let plusworkT = 0;
//   let plusRate = 0;

//   if (hours > 160) {
//     plusworkT = hours - 160;

//     plusRate = rate * 1.5;
    
//     plusTotal = plusworkT * plusRate;

//     total = hours * rate;

//     total = total + plusTotal
//   }
// }


function calculatePay(hours, rate) {
  if (hours > 160) {
    const reqularPay = 160 * rate;

    //160시간 초과시의 급여
    const overtimePay = (hours - 160) * (rate * 1.5);

    return reqularPay + overtimePay;

  } else {
    return hours * rate;
  }
}

console.log(calculatePay(172, 20));
console.log(calculatePay(162, 30));
console.log(calculatePay(180, 18));