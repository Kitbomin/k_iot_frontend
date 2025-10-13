//! 1. 배열 합계 구하기
let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0; // 배열의 요소 합을 저장

  let length = array.length;

  for (let i = 0; i < length; i++) {
    // 요소 전체를 순회함
    sum += array[i];
    console.log(sum);
  }
  return sum;
}

console.log('답: ' + sumArray(array));
console.log(sumArray([24, 31, 76, 45]));



//! 2. 특정 수 이상의 요소 필터링 
// 전달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환 해줄거임

function filterTen(array) {
  let filteredValue = []; //10 이상의 값을 담는 배열

  let length = array.length;

  for(let i = 0; i < length; i++) {
    if (array[i] > 10) {
      filteredValue.push(array[i]);
    }
    
    console.log(i + '번째 반복: ' + filteredValue);
  }
  return filterTen;
}

console.log(filterTen([3, 15, 23, 5, 11, 19, 10, 55, 60]));


//! 3. 배열의 평균 구하기
// - findAverage(array)
// : 평균 == 전체 요소의 합 / 요소의 개수

function findAverage(array) {
  let findSumValue = 0;
  let findAverageValue = 0;

  let length = array.length;

  for(let i = 0; i < length; i++) {
    findSumValue += array[i];
  }
  findAverageValue = findSumValue / length;
  console.log(findAverageValue);
  
  return findAverage;
}

console.log(findAverage([1, 2, 3, 4, 5, 6, 7]));




//! 4. 배열 내의 최대값 찾기
// - findMax(array)
// : 배열의 첫번째 요소를 max 라는 변수에 담기
// -> 배열을 순회하며 max랑 비교 -> max보다 크면? 그걸로 대체
function findMax(array) {
  let max = []
  max.push(array[0]);

  let length = array.length;

  for(let i = 0; i < length; i++) {
    max.push(array[i]);
    
    if (max[0] < max[1]) {
      max.shift();
    }
    else {
      max.pop();
    }

    console.log('현재 배열 상태: ' + max);
  }

  return findMax;
}

console.log(findMax([1,5,3,4,2,3,1,7,8,9]));