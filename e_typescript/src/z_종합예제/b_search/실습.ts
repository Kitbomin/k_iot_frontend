
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
  try {
    //* API에서 들고옴
    const response = `https://jsonplaceholder.typicode.com/users`;
    //* 그리고 응답값이 정상적이지 않으면 "NetWork response was not ok"을 던짐
    if (!response.ok) {
      throw new Error("NetWork response was not ok");
    }

    //* users는 UsersType임 = 근데 비동기적으로 반환된 값을 json으로 바꿀거임
    const users: UsersType = await response.toString.json(); 

    //* 그리고 users를 반환
    return users;
  
    //? Promise.resolve(value)
    //  : async 함수는 내부에서 어떤 값을 반환(return)하든 자동으로 Promise.resolve(data)로 감싸서 반환하게 됨
    //  > Promise 반환 성공(resolve), 실패(reject) 

  } catch (e) {
    console.error('Fetch error: ', e);
    return [];
  }
}

// 4. 사용자 정보를 받아 HTML 요소를 생성하는 함수
const createUserCard = (user: User): HTMLElement => {
  // * userCard를 만들거임 -> div로 
  const userCard = document.createElement('div');
  
  //* 그리고 userCard엔 다음과 같은 내용이 들어감
  if (userCard) {
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p>UserName: ${user.username}</p>
      <p>Email: ${user.email}</p>
    `;
  }

  //* 그리고 userCard를 반환함
  return userCard;
}

// 5. 사용자 정보 배열을 받아 화면에 표시하는 함수
//  : createUserCard에 각 객체 전달
const displayUsers = (users: UsersType) => {
  //* 사용자 정보리스트를 받아올거임 -> 'user-list'
  const userList = document.getElementById('user-list');
  //* 만약 userList가 존재한다면
  //* -> userList의 내용을 비운다
  userList!.innerHTML = '';

  //* users를 순회돌아 객체마다 card를 만들고, userList에다가 그 카드를 넣는다
  users.forEach(user => createUserCard(user));
  userList?.appendChild(user);
}

// 6. 사용자 정보 필터링하는 함수
//  : 사용자로부터 입력받은 검색어 사용
//  - 사용자의 name, username, email 중 하나라도 포함된 경우 출력함
const filterUsers = (users: UsersType, query: string): UsersType => {

  //* user를 거를거다(filter)
  users.filter();
    //* user의 이름을 소문자로 바꿨을 때, 내용값을 소문자로 바꾼게 포함되있거나
    //* user의 username을 소문자로 바꿨을 때, 내용값을 소문자로 바꾼게 포함되있거나
    //* user의 email을 소문자로 바꿨을 때, 내용값을 소문자로 바꾼게 포함되있는걸
}

// 7. 사용자 정보를 정렬하는 함수
//  : Name, Email 기준으로 정렬
const sortUsers = (users: UsersType, key: 'name' | 'email'): UsersType => {
  // map, filter: 배열에 대한 메서드, 새로운 배열을 반환함
  // cf) solt: 배열 요소 정렬 (+ 콜백 함수, 새로운 배열을 반환하지 않음) 
  
  //? 배열.sort()
  //  : 콜백함수를 받는 배열 요소 정렬 메서드
  //  - 콜백함수의 인자는 비교할 데이터 2가지를 입력하게됨

  //cf) a, b는 데이터 객체 (User 인터페이스 타입)
  //    a[name].localeCompare(b[name])

  //? 문자열.localeCompare(문자열)
  //  : 비교함수
  //  - 문자열을 비교하는 메서드 (알파벳 순 정렬에 유용함)
  //  - 반환값
  //    -1) 기준 문자열(a)이 비교문자열(b)보다 앞에 있음
  //     0) 두 문자열이 같음
  //     1) 기존 문자열이 비교 문자열보다 뒤에 있음

  
  //* 반환한다 깊게 복사한 유저 배열을
  //* 정렬을 하는데 User 객체를 앞뒤로 두개씩 들고와서
  //* a의 키값을
  //* 문자열을 비교할거임
  //* b의 키값과
}

// ---- 여기까지가 기능적 함수 ----- //

//! 이벤트 리스너 추가함수
const addEventListener = (users: UsersType) => {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

  const dataFilterAndSort = () => {
    // 데이터 필터링
    const query = searchInput.value;
    const filteredUsers = filterUsers(users, query);

    // 필터링 된 데이터 정렬
    const sortKey = sortSelect.value as 'name' | 'email';
    const sortedUsers = sortUsers(filteredUsers, sortKey);

    displayUsers(sortedUsers);
  }

  searchInput.addEventListener('input', dataFilterAndSort);

  sortSelect.addEventListener('change', dataFilterAndSort)
}

//! 초기화 함수
const init = async(): Promise<void> => {
  const users = await fetchUsers();

  displayUsers(users);
  addEventListener(users);
}

document.addEventListener('DOMContentLoaded', init);