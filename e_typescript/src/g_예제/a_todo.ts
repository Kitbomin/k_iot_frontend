

//! 타입스크립트로 ToDo 리스틑 구현

/**
 * 데이터 구조
 *    - 여러개의 할 일을 저장할 수 있는 배열 필요
 *    - 각 할 일은 객체타입이 될 거임 (배열 안에 객체들이 있음)
 * 
 * ex) 상품들-상품 / 회원들-회원 / 할일들(TodoItem[])-할일(TodoItem)
 * 
 * cf) 배열 타입 정의: 요소타입[]
 * 
 * 요구사항 정리
 *    1. Todo(할 일, 객체) 항목의 인터페이스 정의(TodoItem)
 *     : id(고유값, number), task(할 일 내용, string), completed(완료 여부, boolean)
 *    
 *    2. 각 할 일들을 todos 배열로 관리
 * 
 *    3. 할 일 리스트를 관리하는 함수 구현
 *     - addTodo (추가)
 *     - completedTodo (수정) -> map
 *     - deleteTodo (삭제)    -> filter
 */

//% 1. 할 일의 객체 인터페이스 명시
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//% 2. 할 일 추가함수
function addTodo(todos: TodoItem[], task: string): TodoItem[] {
  const newTodo: TodoItem = {
    // id값은 기존의 Todo 항목 중에서 가장 큰 id 값에 1을 더해 새로운 아이디를 생성할거임 -> 중복 방지임
    // map은 배열을 순회해 새로운값을 반환.
    // todos.map(todo => todo.id)
    /**
     * [
     *   {id: 1, task: 'a', completed: true},
     *   {id: 2, task: 'b', completed: true},
     *   {id: 4, task: 'c', completed: false},
     * ]
     * 
     * =? 1, 2, 4 만 반환될거임
     */
    id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
        //Math.max(0, 1, 2, 4) : 4반환 
    task: task,
    completed: false
  }
  // 기존의 할 일 목록에 새로운 할 일 추가
  // : 깊은복사 사용(스프레드 연산자) + 새로운 요소
  //   >> 새올운 배열 생성
  //   >> 배열의 주소값이 변경되어 '리액트'엣서 인지가 가능해짐
  const newTodos = [...todos, newTodo]; // 새로운 주소값이 담김
  // cf) todos.push(newTodo); => 리액트는 얘를 추적을 못함
  //     >> 배열의 불변성(배열은 첫번재 요소의 주소값이 저장됨)
  return newTodos;
}

//% 할 일 수정함수 (완료여부 토글)
function completedTodo(todos: TodoItem[], id: number) {
  
  // 변화된 배열 (새로운 주소값 반환)
  const changeTodos = todos.map(todo => 
    // 순회되는 각 요소의 todo.id와 매개변수로 전달하는 id값(수정하고자 하는 요소)
    // : 같을 경우 - 순회되는 요소의 completed 속성만 전환
    // : 다를 경우 - 변경없이 반환됨
    todo.id === id ? { ...todo, completed: !todo.completed } : todo);

  return changeTodos
}


//% 할 일 삭제 함수
function deleteTodo(todos: TodoItem[], id: number) {
  const changeTodos = todos.filter(todo => todo.id !== id);

  return changeTodos;
}

//% 함수 사용 예싯
let todos: TodoItem[] = [];

todos = addTodo(todos, "타입스크립트 공부");
todos = addTodo(todos, "자바 공부");
todos = addTodo(todos, "자격증 공부");
todos = addTodo(todos, "스프링부트 공부");

console.log(todos);

todos = completedTodo(todos, 1);
todos = completedTodo(todos, 3);
console.log(todos);

todos = deleteTodo(todos, 4);
console.log(todos);

todos = addTodo(todos, "내가 없어진 줄 알았니?");
console.log(todos);