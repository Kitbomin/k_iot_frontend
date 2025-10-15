// TODO 리스트 만들기 (할일 목록 관리 시스템 만들기)

//! Todo 객체 구성 
// - id: 각 할 일의 고유 식별자 (주로 "숫자"나 문자열로 표현)
// - content: 할 일의 내용 (문자열)
// - completed: 할 일의 완료 상태(불리언 데이터)


/*
Todo 객체 예시 (리터럴)

let todo = {
  id: 1,
  content: '정보처리기사 실기 따기',
  completed: false
}

*/

//! == 프로젝트 개요 == 
// 'Todo' 객체 데이터에 대한 CRUD 기능 처리
// 1. 할 일 추가: 객체를 사용해서 할 일을 저장하고 배열에 객체를 추가
//    >> 새로운 할 일(객체)를 목록(배열) 에 추가
// 2. 할 일 수정: 완료된 할 일의 complete 값을 전환 (토글, toggle)
// 3. 할 일 삭제: 지정하는 할 일을 목록에서 제거 -> shift를 써야하나...?
// 4. 할 일 목록 출력: 현재 목록의 상태를 콘솔에 출력 (R: 전체 조회) -> stringify 쓰면 될듯?


//! == 프로젝트 구현 ==

let todos = [];                   // 배열 리터럴 방식의 빈 배열 선언 - 할 일 목록을 저장할 배열 초기화
let wastebasket = [];             // 휴지통 -> 삭제된 할 일을 저장할 곳임
let nextId = 1;                   // 고유 아이디 값을 위한 전역 변수 -> id는 추가될 때마다 1씩 늘어나야하니까

// 1) 할 일 추가 함수
function addTodo(content) {       // 함수 호출 시 인자로 할 일의 내용을 전달받음
  // 할 일 생성
  const newTodo = {
    id: nextId,                   // 전역 변수는 파일 어디에서든 접근 가능함
    content: content,             // 키: 값(매개변수의 데이터 삽입)
    completed: false
  };

  // 다음 할 일 추가 시 사용할 고유 ID값(전역 변수) 증가
  nextId++;

  // 할 일을 목록에 추가
  todos.push(newTodo);

  // 현재까지의 todo 리스트를 출력하는 함수 호출
  displayTodo();
  
}

// 2) 할 일 수정 함수: 완료 상태 변경
//  : 수정하고자 하는 특정 할 일의 id를 매개변수로 전달 받아 '완료 상태 전환(토글)'을 할거임
function toggleTodo(id) {
  // 전체 할 일 목록 중 id값과 일치하는 할 일만 완료 상태를 전환
  // ? map: 배열을 순회하여 동일한 기능 적용 후 새로운 배열에 담아 반환해줌 
  // ?      >> 요소의 개수 변화가 없게 map을 사용함

  // ? 배열의 콜백함수 메서드 'forEach, map, filter'
  // ? >> 콜백함수의 인자(value, index, array)
  // ?    : 순서는 반드시 지킬 것: 두번째 인자만 사용하고 싶은 경우 -> (, index)

  todos = todos.map(todo => {
    // 화살표 함수의 구현부가 여러 줄 일 경우에는 {} 사용해서 묶을 것 -> 생략 불가
    // +) 하나의 식일 경우: {} + return 생략 가능

    // id값 일치 여부 확인 (if문)
    if (todo.id === id) {

      // cf) spread 연산자 사용 (...)
      //   : 객체나 배열의 내부 요소만 추출하는 연산자 

      //? +) 객체의 속성 변경
      //  객체명.속성키 = 속성값;
      //  - 해당 속성키가 존재하는 경우: 객체 속성값이 재할당 됨
      //  - 해당 속성키가 존재하지 않는 경우: 객체 속성이 생성됨 

      // let obj1 = { a: 1, b: 2 };
      // let obj2 = { ...obj1 }; => obj1의 요소만 가져와서 새로운 객체를 생성함 (메모리 주소가 달라짐)
      // obj1.a = 3; => 재할당
      // obj1.c = 4; => 생성이 될거임

      // let obj3 = { ...obj1, b: 22 }

      return { ...todo, completed: !todo.completed }; 
    }

    return todo;  // id가 일치하지 않는 데이터는 기존 객체를 그대로 반환
    
  }
);
  displayTodo();

}

// 3) 할 일 삭제 함수
//  : 삭제하고자 하는 id를 가진 할 일을 todos 배열에서 제거
//  >> 배열 내부 요소에서 제거 (요소 개수 변화가 일어남: filter)
function deleteTodo(id) {

  const idx = todos.findIndex(todo => todo.id === id); //삭제할 요소의 인덱스 번호를 반환
  if (idx === -1) {
    console.log(`id ${id}는 없습니다.`);
    return;     // if문 종료
  }

  // splice(시작인덱스, 삭제할 요소의 개수, 추가할 요소): 제거, 추가 가능
  // 1) 제거: (시작인덱스, 삭제할 요소의 개수)      >> 제거된 요소가 배열로 반환됨
  // 2) 추가: (시작인덱스, 0, 추가할 요소 나열)

  // 이걸 구조 분해 할당이라 함 -> 배열에 있는걸 분해해서 다른 배열에 또 넣어줌
  //! removed 라는 상수를 사용 가능함
  const [removed] = todos.splice(idx, 1);     // 배열 반환함 
  wastebasket.push(removed);

  // 1, 2, 3, 4, 5 중에서 4를 제거
  // => 4와 일치하지 않는 1, 2, 3, 5 만을 새로운 배열로 저장한다는 것과 같음 -> 이러면 4가 삭제된것 처럼 보일 수 있음

  todos = todos.filter(todo => todo.id != id);
  displayTodo();

}

// 4) 할 일 목록 출력
function displayTodo() {
  console.log("현재 할 일 목록");
  todos.forEach(todo => {
    // 삼항 연산자
    console.log(
      `${todo.id}: ${todo.content} - ${todo.completed ? '완료됨' : '완료되지 않음'}`
    );

    // 논리 연산자
    // : 완료시 ☑️ 기호를 출력
    console.log(`${todo.id}: ${todo.content} - ${todo.completed && '☑️'}`);

    // cf) completed(true - 완료됨): 체크 출력해야함
  })
}


// +) 할 일 복구/비우기 기능 함수
function restoreTodo(id) {
  const idx = wastebasket.findIndex(waste => waste.id === id);

  if(idx === -1) {
    console.log(`휴지통에 id ${id}가 없어요`);
    return;
  }

  const [restored] = wastebasket.splice(idx, 1);
  todos.push(restored);
  displayTodo();
}

// +) 휴지통 비우기
function emptyWastebasket() {
  wastebasket.length = 0;     // 휴지통 비우기 - 길이값 초기화
}


//! == 프로젝트 실행 == 
addTodo('자바스크립트 복습하기');
addTodo('미니프로젝트 끝내기');
addTodo('자바 복습하기');
addTodo('공모전하기');

toggleTodo(3);
toggleTodo(2);


deleteTodo(1);

emptyWastebasket();

restoreTodo(1);

