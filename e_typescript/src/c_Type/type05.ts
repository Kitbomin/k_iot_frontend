
//! --- Intersection 타입 ===
// : 인터섹션 타입
// : 여러 타입을 하나로 결합하여 모든 타입의 기능을 갖춘 단일 타입을 생성
// - 여러 타입을 모두 만족하는 하나의 타입
// - And 연산자 (A 그리고 B 그리고 ...)
// - & 기호 사용

//? 인터섹션 타입 사용 방법
// type 타입 별칭 = Type1 & Type2 & Type3 ...'

type Employee = {
  name: string;
  startDate: Date;
}

type Manager = Employee & { group: string };
// Employee 직원이 가진 정보를 재활용하고 Manager가 가진 추가 속성을 지정 가능함

let manager1: Manager = {
  name: 'Ara',
  group: '개발팀',
  startDate: new Date()
}

//? 인터섹션 타입의 특징
//  : 타입의 결합에 목적을 둠
//  - 코드의 재사용성 + 복잡한 타입 조합이 가능함
type Admin = {
  isAdmin: boolean;
}

type User = {
  id: string;
  password: string;
}

type AdminUser = Admin & User;

// 사용자를 관리사용자로 만드는 함수
function createAdminUser(user: User): AdminUser {
  // 스프레드 연산자를 사용해 새로운 객체를 생성
  return { ...user, isAdmin: true };
}

let user1: User = {
  id: 'qwe123',
  password: 'qwe123'
}

let adminUser1 = createAdminUser(user1);
console.log(adminUser1); //{ id: 'qwe123', password: 'qwe123', isAdmin: true }