/**
 * ! 요구사항 정리
 * 
 * 1. 사용가자 "Fetch User Data" 버튼 클릭 시
 * 2. "Loading user data" 메시지 출력
 * 3. 실제 데이터 요청 실행 후 완료 시 사용자 데이터가 화면에 표시됨
 * 4. 요청 실패 도는 문제 발생 시 에러 메시지가 화면에 표시
 * 
 */

const fetchButton = document.getElementById('fetchUserData');
// : 요소 검색 시 HTMLElement | null 값 반환
// if (fetchButton) {}
// 보통은 if문 써서 존재여부를 판단하는데, 우리는 A요소?.속성 또는 메서드 <- 이거 쓸거임

fetchButton?.addEventListener('click', async () => { 
  // 비동기 async 함수
  // : async function() {} => async ()=> {}
  
  const userDataDiv = document.getElementById('userData');
  const userIdElement = document.getElementById('userId') as HTMLInputElement;

  // input 창 내용물 추출
  const userId =  userIdElement ? userIdElement.value : '';

  //? apiUrl 저장
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

  if (userDataDiv) {
    userDataDiv.innerHTML = `<p> ... Loading user data</p>`;
    try {
      // 데이터 요청 시 예외 처리 구문 사용
      const fetchResponse = await fetch(apiUrl);

      if (!fetchResponse.ok) {
        throw new Error('사용자 데이터에 접근할 수 없습니다.');
      }

      const user = await fetchResponse.json();

      userDataDiv.innerHTML = `
        <h2>User Details</h2>
        <p>Id: ${user.id}</p>
        <p>NAME: ${user.name}</p>
        <p>EMAIL: ${user.email}</p>
        <p>ADDRESS: ${user.address.street}</p>
      `;

    } catch (e) {
      //? 데이터 처리 실패 시 메시지 출력
      userDataDiv.innerHTML = `<p>${e}</p>`;
    }
  }

});
