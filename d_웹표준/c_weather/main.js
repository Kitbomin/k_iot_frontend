
//! Open Weather API
//: 실시간 날씨 정보 제공 API (일부 무료 사용 가능)
// https://home.openweathermap.org/

// OpenWeather API 키값
const apiKey = "b4060b0e695ecfdc14f13b606ca98488";
const lang = "kr";

/**
 * API -> Current API DOC -> API Call
 * 원본
 * https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
 * 
 * 여기서 쓸거
 * ! OpenWeatherMap API 요청 URL
 * https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric
 * 
 * ? q: 도시 이름
 *    > 반드시 Capitalize 사용
 *      - 시작은 대문자, 기타문자는 소문자로 Ex) Seoul, Busan, London, Tokyo ...
 * 
 * ? appid: OpenWeatherMap 에서 발급 받은 API 키 (요청 인증용)
 * 
 * ? lang: 언어 설정 (한국어 응답)
 * 
 * ? units: 단위 설정
 * ?        metric -> 섭씨
 * ?        imperial -> 화씨
 */

// 외부 서버 연결

function capitalizeCity(city) {
  //! 첫 글자는 대문자, 나머지는 소문자로 변환하는 함수(사용자 이용성이 향상됨)
  const trimCity = city.trim();
  if (trimCity.length === 0) return '';

  return trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();
}


document.getElementById('search-button').addEventListener('click', () => {
  //! search-button 버튼 클릭시
  //  : input 창의 value 값을 getWeatherData에 전달할 것임

  //? 다만, 입력값 검증이 필요함
  //  : 사용자가 입력한 도시 이름을 매개변수로 받아
  //  - Capitalize 값만 전달해야하기 때문 (trim 쓰고 어쩌고 하면 될듯)
  //  - capitalizeCity(city);

  const cityInput = document.getElementById('city-input').value;
  const city = capitalizeCity(cityInput);

  if (city === '') {
    alert('지역명을 입력해주세요.');
    return;
  }

  getWeatherData(city);
  document.getElementById('city-input').value = ''; //입력값 초기화


})


async function getWeatherData(city) {
  // 사용자가 입력한 도시 이름을 매개변수로 받아 OpenApi에 요청하고 결과값을 displayWeather 함수의 인자로 전달하는 함수
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error: status(${response.status})`);
    }

    const data = await response.json();
    
    displayWeather(data);
  } catch (e) {
    console.error('Error: ' + e);
    document.getElementById('weather-info').innerHTML = 
      `<p>날씨 정보를 불러오는 데에 실패하였습니다. (${e.message})</p>`;

  }
}

function displayWeather(data) {
  //! 검색 결과값(해당 도시의 날씨 데이터)을 브라우저에 출력
  const weatherInfoDiv = document.getElementById('weather-info');
  weatherInfoDiv.innerHTML = `
    <h2>${data.name}의 날씨</h2>
    <p>현재 온도: ${data.main.temp}</p>
    <p>체감 온도: ${data.main.feels_like}</p>
    <p>날씨: ${data.weather[0].main} (${data.weather[0].description})</p>
  `;
}