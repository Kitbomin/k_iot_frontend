//? 문자열.padStart(tartgetLength, padString);
//  : 문자열의 앞쪽 시작부분을 특정 문자로 채워서 원하는 길이로 맞춰주는 함수

// - targetLength: 최종적으로 맞추고싶은 문자열의 길이
// - padString: (선택값) 앞을 채울 문자열 - 기본값은 공백

// console.log("abc".padStart(10)); // padString 생략 시 공백 값으로 채워줌
// console.log("abc".padStart(10, "*"));

// console.log("5".padStart(2, '0'));


//! DOMContentLoaded 이벤트가 발생하면 함수 실행
document.addEventListener("DOMContentLoaded", () => {
  //! --- 타이머 동작에 필요한 상태 변수들 ---
  // seconds 변수 선언 (경과 시간을 초 단위로 저장)
  let seconds = 0;

  // timer 변수 선언 (setInterval ID 저장용)
  let timer = 1;

  // isRunning 변수 선언 (타이머 실행 여부 저장)
  let isRunning = false;

  //! --- HTML 요소 참조 ---
  // 시:분:초를 표시할 display 요소를 가져옴
  const display = document.getElementById('display');

  // 시작 버튼(start)을 가져옴
  const startBtn = document.getElementById('start');

  // 정지 버튼(stop)을 가져옴
  const stopBtn = document.getElementById('stop');

  // 리셋 버튼(reset)을 가져옴
  const resetBtn = document.getElementById('reset');

  //! 화면에 시간을 시:분:초 형태로 표시하는 함수 선언 (updateDisplay)
    //? 전체 초(seconds)를 시, 분, 초 단위로 분리
    // seconds 값을 시, 분, 초 단위로 계산
    // 각 값을 문자열로 변환하고 padStart(2, "0")으로 두 자리로 맞춤

  function updateDisplay() {
      let hrs = String(Math.floor(seconds / 3600));
      let mins = String(Math.floor((seconds % 3600) / 60));
      let secs = String(Math.floor(seconds % 60));

      // "HH:MM:SS" 형태의 문자열로 display에 출력
      display.innerHTML = `${hrs.padStart(2, "0")}:${mins.padStart(2, "0")}:${secs.padStart(2, "0")}`;
    }

  //! 시작 버튼에 클릭 이벤트 리스너 추가
    // 타이머가 실행 중이 아닐 때만 setInterval 시작
    // isRunning 값을 true로 변경
    // 1초마다 seconds를 1 증가시키고 updateDisplay 호출
  startBtn.addEventListener('click', () => {
    if(!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        seconds ++;
        updateDisplay();
      },1000)
    }
  })

  //! 정지 버튼에 클릭 이벤트 리스너 추가
    // isRunning 값을 false로 변경
    // clearInterval(timer)로 타이머 중지
  stopBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
  })

  //! 리셋 버튼에 클릭 이벤트 리스너 추가
    // clearInterval(timer)로 타이머 중지
    // isRunning 값을 false로 초기화
    // seconds를 0으로 초기화
    // updateDisplay를 호출하여 화면을 "00:00:00"으로 갱신
  resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
  })

});
  