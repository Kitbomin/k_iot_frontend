
// https://jsonplaceholder.typicode.com/users

//! 사용자 정보 정의 - interface
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

//! 전체 사용자 관리 배열
type UsersType = User[];


// 1. 사용자 정보를 외부 API에서 가져오는 비동기 함수 정의
const fetchUsers = async (): Promise<UsersType> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error("NetWork response was not ok");
    }

    const users: UsersType = await response.json();
    return users;
    //? Promise.resolve(value)
    //  : async 함수는 내부에서 어떤 값을 반환(return)하든 자동으로 Promise.resolve(data)로 감싸서 반환하게 됨
    //  > Promise 반환 성공(resolve), 실패(reject) 

  } catch (e) {
    console.error('Fetch error: ', e);
    return [];
  }
}

// 2. 사용자 정보를 받아 HTML 요소를 생성하는 함수
const createUserCard = (user: User): HTMLElement => {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  // data-userId = "user.id값" 속성 전달
  userCard.dataset.userId = user.id.toString();

  userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>UserName: </strong> ${user.username}</p>
    <p><strong>Email: </strong> ${user.email}</p>
  `;

  return userCard;
}

// 3. 사용자 정보 배열을 받아 화면에 표시하는 함수
//  : createUserCard에 각 객체 전달
const displayUsers = (users: UsersType) => {
  const userList = document.getElementById('user-list');

  if (userList) {
    userList.innerHTML = '';

    users.forEach(user => {
      const userCard = createUserCard(user);
      userList.appendChild(userCard);
    });
  }
}

// 4. 사용자 정보를 받아 모달 창에 표시하는 함수
const showModal = (user: User) => {
  //* modal을 들고온다 -> 'user-modal' 에서
  const modal = document.getElementById('user-model');
  //* modalContent를 들고온다 -> 'modal-user-details'에서

  //* 만약 모달과 모달컨텐츠가 다 존재한다면
    //* 다음의 내용을 넣는다
    // modalContent.innerHTML = `
    //   <h2>${user.name}</h2>
    //   <p><strong>UserName: </strong> ${user.username}</p>
    //   <p><strong>Email: </strong> ${user.email}</p>
    //   <p><strong>Phone: </strong> ${user.phone}</p>
    //   <p><strong>Website: </strong> ${user.website}</p>
    // `;

    //* 그리고 해당 모달의 스타일을 표시한다
    // modal.style.display = 'block'; //모달창 표시
  
}

// 5. 사용자 리스트에 이벤트 리스너 추가
const addEventListener = (users: UsersType) => {
  //* userList를 가져온다 'user-list'에서

  //* 만약 userList가 있다면
    //* userList에 클릭 이벤트를 전달한다 
      //? cf) target VS current Target
      //    - target: 진짜 이벤트가 처음발생하는 DOM요소 (클릭이 일어난 요소)
      //    - current Target: 발생한 이벤트가 등록된 DOM 요소 (이벤트가 바인딩 된)
      
      //* 클릭이 발생하는 타겟의 속성을 HTMLElement로 정의한다
      // >> 클릭이 발생한 요소는 card 내부의 h2, p가 될 가능성이 존재함 그래서 상위요소인 HTMLElement를 선언함

      //* userCard를 선언한다 -> target과 가장 가까운 .user-card를 -> 그리고 그걸 HTMLElement 속성 또는 null 로 선언한다 
      // : 이벤트가 발생한 요소와 가장 가까운 .user-card 요소를 반환해줄거임

      //* 만약 userCard가 존재한다면?
        // dataset: userCard가 가진 data-* 속성들에 접근할 수 있는 DOM 속성
        // ex) <div data-role="admin" data-userId="1"></div>

        // parseInt(): 숫자로 변환할 데이터, 변환 진수
        //* userId를 가져온다 -> parseInt를 써서 dataset에 있는 userId를 10진수로 바꿔서

        //* user를 가져온다 -> users에서 찾아서 -> user 객체마다 userId랑 일치하는지 확인해서
        
        //* 만약 user가 있다면
          //* showModal에 user를 넣어 호출한다


  //* modal를 가져온다 'user-modal'에서
  //* closeModal을 가져온다 -> '.close'에서

  //* 만약 modal과 closeModal이 존재한다면
    //* closeModal에 이벤트를 추가한다
      //* 모달의 스타일이 보이지 않게
}

const init = async () => {
  const users = await fetchUsers();
  displayUsers(users);
  addEventListener(users);
}

document.addEventListener('DOMContentLoaded', init);