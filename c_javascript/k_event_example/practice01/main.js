let todoInput = document.querySelector('#todo-input');

let addButton = document.querySelector('#add-button');

let todoList = document.querySelector('#todo-list');



// 이벤트 핸들러 함수임
function addTodo() {
  // input 태그에 입력값이 있는 경우에만 li 내용 생성
  if (todoInput.value !== '') {
    // 동적으로 list 아이템 생성
    // : document.createElement('태그명');
    // - 생성된 태그가 곧바로 웹 문서에 할당되지 않음
    // - 보여질 위치의 부모 요소 내에 삽입해야함 
    let newItme = document.createElement('li');

    // 새로운 li 태그의 내용값 = input 창의 입력값;
    newItme.textContent = todoInput.value;

    // 요소에 class 속성을 추가함
    // : li 태그는 동적 이벤트에 따라 동적으로 여러개 생성이 가능함
    // : HTML요소.classList.add('클래스명');
    newItme.classList.add('todo-item');

    // 생성된 li 태그를 ul 태그 내에 삽입
    // : 부모요소.appendChild(자식요소);
    todoList.appendChild(newItme);

    //? input 등과 같이 상호작용 된 데이터는 사용 후 해당 데이터를 초기화를 시켜줘야함
    todoInput.value = '';
  }
}
// 추가 버튼 클릭 시 
addButton.addEventListener('click', addTodo);

// +) Enter 키보드 키 프레스로 할 일 등록
//  : Enter 키 다운 시 이벤트 발생
todoInput.addEventListener('keydown', (e) => {
  //? 키보드 이벤트의 주의점
  //? - 특정 키에 반응해 이벤트 발생 시 이벤트 객체에서 어떤 키의 이벤트인지 명확하게 확인해야함
  // e.key - 키보드 이벤트 발생 시 입력된 키 값이 반환됨

  if(e.key === 'Enter') {
    addTodo();
  }
});


// e: 이벤트 객체
// - target: 이벤트가 발생한 요소를 참조 *
// - currentTarget: 이벤트가 참조된 요소 (todoList)

todoList.addEventListener('click', (e) => {
  // >> todoList 내부에 todoItem이 여러개 나열된 상태
  //    : todoItem을 클릭 시 todoItme 내용의 글자 색을 바꿔볼거임

  //? 각 할 일 리스트 클릭시
  //? 완료 시: .completed 속성을 추가 (CSS 디자인을 첨부)

  // e.target: 실제 이벤트가 발생되는 요소
  // +) DOM 요소의 태그명을 가져오는 방법
  //  : HTML요소.tagName
  //  : 태그명의 알파벳은 대소문자 구분이 없지만, 모두 대문자로 표기됨
  
  if (e.target.tagName === 'LI') {
    // HTML요소.classList: class 속성에 접근
    // cf) .togglet('클래스명') 속성
    //   : classList에서 해당 클래스명이 토글됨
    //      - 있으면 '삭제'
    //      - 없으면 '추가'

    e.target.classList.toggle('completed');
  }
});

//! 현재 글자 수 출력하기
document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.querySelector('#word-input');

  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup', (e) => {
    const length = wordInput.value.length;
    p.textContent = `글자 수: ${length}`;
  });
});