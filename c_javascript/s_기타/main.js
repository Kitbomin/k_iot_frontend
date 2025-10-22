document.addEventListener('DOMContentLoaded', () => {
  //! window.location.href = '경로값'
  //  : 브라우저의 현재 페이지으 ㅣ위치를 참조


  //? window.location.href = '경로값';
  //  : 해당 값을 새 url 로 설정해 브라우저로 이동 (리다이렉션)

  //? 리다이렉션(redirection)
  //  :웹 브라우저가 요청한 URL 대신 다른 URL로 자동 이동하도록 지시하는 기술


  //? 경로값 설정
  //  : 현재 URL을 기준으로 작성

  // 1) '파일명.html' OR './파일명.html'
  //    >> 현재 페이지와 동일한 디렉토리에 있는 파일로 이동

  // 2) '../파일명.html'
  //    >> 상위 디렉토리에 위치한 파일 검색
  //    +) ../../ 반복될 수록 상위 디렉토리를 찾아감

  // 3) '/파일명.html'
  //    >> 루트 디렉토리에 위치한 파일을 검색

  // window.location.href = 'second.html';

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    if (window.location.href.include('index.html')) {
      window.location.href = 'second.html';
    } else {
      window.location.href = 'index.html';
    }
  })
})