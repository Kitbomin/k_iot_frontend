
// https://jsonplaceholder.typicode.com/users

//! 비동기를 사용한 사용자 정보 조회 & 검색 , 필터링 기능

// 1. User Interface 정의(사용자 정보지정)
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// 2. Users 타입 별칭 정의(사용자 정보를 저장할 배열타입)
type UsersType = User[];

// 3. 사용자 정보를 외부 API에서 가져오는 비동기 함수 정의
const fetchUsers = async (): Promise<UsersType> => {
  
}

// 4. 사용자 정보를 받아 HTML 요소를 생성하는 함수
const createUserCard = (user: User): HTMLElement => {

}

// 5. 사용자 정보 배열을 받아 화면에 표시하는 함수
//  : createUserCard에 각 객체 전달
const displayUsers = (users: UsersType) => {

}

// 6. 사용자 정보 필터링하는 함수
//  : 사용자로부터 입력받은 검색어 사용
//  - 사용자의 name, username, email 중 하나라도 포함된 경우 출력함
const filterUsers = (users: UsersType, query: string): UsersType => {

}

// 7. 사용자 정보를 정렬하는 함수
//  : Name, Email 기준으로 정렬
const sortUsers = (users: UsersType, key: 'name' | 'email'): UsersType => {

}

// ---- 여기까지가 기능적 함수 ----- //

//! 이벤트 리스너 추가함수
const addEventListener = (users: UsersType) => {
  
}

//! 초기화 함수
const init = () => {

}

document.addEventListener('DOMContentLoaded', init);