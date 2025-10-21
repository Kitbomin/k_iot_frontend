function greet(name) {
  console.log(`Hello ${name}`);
}

// 메인함수
// : 사용자의 입력을 처리하는 함수
function getUserInput(callback) {
  // let name = prompt('이름을 입력해주세요');
  // callback(name);
}

getUserInput(greet);


//! 콜백 함수를 사용하는 비동기 요청 예시
//  : tjqjdhkdml xhdtls

// cf) fetch: (데이터를) 가져오다

function fetchUserData(userId, callback) {
  // 서버로부터 사용자 데이터를 가져와 해당 데이터를 처리하는 함수

  setTimeout(()=> {
    // 서버로 부터 가져온 데이터 명시
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: 'Ara',
      email: 'zzxxcc1433@naver.com'
    }

    // 가져온 사용자 데이터로 작업할 기능: 콜백함수로 작성
    callback(userData);
  }, 3000);
}

// 사용자 데이터 처리함수(콜백함수)
function handleUserData(user, callback) {
  console.log(`User Data: ${user.name}`);

  // 콜백함수 내에서 함수 실행 후 동작시킬 코드
  // : 중첩된 콜백함수
  // callback();

}

// fetchUserData() 함수 호출
fetchUserData(1, handleUserData); // 비동기 처리 로직
console.log('메인 로직 - 중단되지 않고 실행됨');


//! 콜백함수를 비동기에서 사용할 경우 "단점"
//  : 함수가 중첩된 형식이 이어짐 -> 가독성이 떨어짐

function a() {
  console.log('a');
  function b() {
    console.log('b');
    function c() {
      console.log('c');
    }
  }
}

// >> callback hell 이라 부름
//    : Promise 또는 Async/Await를 통해 콜백 지옥을 방지함 