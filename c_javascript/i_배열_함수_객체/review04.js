/**
 * - 학생 성적 관리 시스템
 * 
 * ! 학생 객체 데이터
 * - id     : 학생 고유 번호
 * - name   : 학생 이름
 * - scores : 각 과목별 성적을 저장하는 객체 {Math: 85, English: 90, Science: 78}
 * 
 * 
 * ! 1) Student 클래스
 *    - 생성자에 의해 id, name, scores를 초기화 
 * ? cf) JS 생성자: constructor
 * ?        - 생성자 내부의 this로 호출되는 변수는 필드로 자동 선언됨
 * ?     Java 생성자: 클래스명과 동일함
 * 
 *    - getAvarageScore() 메서드 구현
 *      : 학생 평균 성적 계산 메서드
 *        ? Object.values(), reduce() 사용
 *    
 * 
 * ! 2) GradeManagement 클래스
 *    - 학생 관리 배열, 자동 증가 아이디를 저장
 *    
 *    - 학생 추가: addStudent(name, scores)
 *    - 학생별 평균 성적 계산: getAverageScore()
 *      : 모든 학생의 id, 이름, 평균 성적을 포함하는 새로운 배열을 반환시킬 것임
 *        >> map(), reduce()
 *    - 조건에 따른 학생 필터링 & 정렬
 *        >> getTopStudents(threshold(한계점이란 뜻))
 *           : 평균 성적이 주어진 값(한계점) 이상인 학생을 필터링 + 내림차순 정렬 반환
 *        >> filter(), sort()
 * 
 */


//! == 프로그램 구현 == //

//! 학생클래스 정의
class Student {
  constructor(id, name, scores = {}) {
    //this.변수명 = 변수명;
    // [좌항]: 현재의 객체 내부의 필드에 접근
    // [우항]: 필드에 할당할 실제 데이터

    //? scores = {} => 기본 매개변수, 해당 메서드 호출 시 데이터 전달이 생략 될 경우 기본 매개변수값이 할당되게 됨
    //? >> 값의 인자값 대입이 선택적임 -> 필수 전달 데이터보다 뒤에 작성되어야함

    this.id = id;
    this.name = name;
    this.scores = scores;
    
  }

  // 학생 평균 성적계산
  getAverageScore() {
    // Object.values(객체);
    // : 객체는 key와 value의 쌍으로 이루어져있음
    // >> 객체의.values(객체) 는 전달된 객체가 가지는 속성의 값들로만 이루어진 배열을 반환함
    const values = Object.values(this.scores);

    // 만약 values의 길이가 0이다? -> 데이터가 없다
    if(values.length === 0) {
      return 0;
    }

    // 합계 = 누적 + 현재값 
    const sum = values.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / values.length;

    //? 숫자.toFixed(소수점자리수)
    //?   : 해당 소수점자리수 이하의 자리수를 갖는 "문자열"로 반환해줌 
    
    // 반환 숫자로 형변환(평균을.소수점 2자리수로 반환해서 -> 문자열로 반환)
    return Number(avg.toFixed(2));
  }
}


//! GradeManagement 클래스 정의
class GradeManagement {
  constructor() {
    this.students = [];
    this.nextId = 1;
  }

  //학생 추가
  addStudent(name, scores) {
    const newStudent = new Student(this.nextId, name, scores);
    this.students.push(newStudent);

    console.log(`학생 추가: [${newStudent.id}] [${newStudent.name}]`);

    this.nextId++;
  }


  //모든 학생의 평균 성적 배열 반환
  // 반환 형태: [{id, name, average}, {id, name, average}, ....]
  getAverageScore() {

    //? JS에서 {}는 함수 본문으로 인식함 
    //? : 객체 리터럴 반환 시 JS에게 해당 문법 구조가 코드블럭이 아닌 객체임을 전달하기 위해 () 소괄호 사용 
    //?   => 소괄호 안에 중괄호를 묶어놓음으로써 그 친구는 객체라고 인식 시켜줌
    //?   >> 화살표 함수에서 객체를 즉시 반환할땐 객체를 소괄호로 감싸놔야함
    return this.students.map(student => ({
      id: student.id,
      name: student.name,
      average: student.getAverageScore()   // 내부적으로 reduce 사용
    }));
    // map은 반환타입이 배열임...
  }

  // 조건(평균 >= threshold)에 맞는 학생 필터링 후 평균 내림차순 정렲
  getTopStudents(threshold) {
    return this.getAverageScore()
              .filter(info => info.average >= threshold)
              .sort((a, b) => b.average - a.average); //내림차순 정렬
  }

  // 편의 출력 함수
  displayAll() {
    console.log(' === 학생 목록 (평균 포함) === ');
    this.getAverageScore().forEach(info => {
      console.log(`[${info.id}] ${info.name} - 평균: ${info.average}`);
    });
  }
}

//! === 프로그램 실행 === //
const gradeSystem = new GradeManagement();

// 학생 추가
gradeSystem.addStudent("Ara", {Math: 90, English: 85, Science: 78});
gradeSystem.addStudent("Minji", {Math: 100, English: 70, Science: 90});
gradeSystem.addStudent("BM", {Math: 85, English: 90, Science: 100});
gradeSystem.addStudent("Silbia", {Math: 100, English: 65, Science: 98});

gradeSystem.displayAll();

const averages = gradeSystem.getAverageScore();
console.log(' === 전체 평균 정보 === ');
console.log(averages);

//상위학생 조회
const top = gradeSystem.getTopStudents(87.5);
console.log('=== 평균 84점 이상 상위 학생 (내림차순) === ');
console.log(top);