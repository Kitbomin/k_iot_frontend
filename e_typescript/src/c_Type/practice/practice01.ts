type MixedType = string | number | boolean;

let a: MixedType = 'asdf';
let b:MixedType = 2;
let c: MixedType = true;

type NumString = number | string; 
function doubleOrNothing(para: NumString) {
  if (typeof para === 'number') {
    return para * 2;
  } else {
    return para;
  }
}

type Admin = {
  id: number;
  isAdmin: boolean;
}

type User = {
  id: number;
  username: string;
}

type Person1 = Admin | User;
let person1: Person1 = {
  id: 1,
  username: 'Ara' 
}

let person2: Person1 = {
  id: 2,
  isAdmin: true
}

function identifyPerson (person: Person1) {
  if ("isAdmin" in person) {
    return "어드민이시군요";
  } else {
    return "누구세요";
  }
}

console.log(identifyPerson(person1));
console.log(identifyPerson(person2));


type Person = {
  name: string;
  age: number;
}

type ContactDetails = {
  email: string;
  phone: string;
}

type Employee = Person & ContactDetails;

type Vehicle = {
  make: string;
  model: string;
}

type Engine = {
  engineType: string;
  horsepower: number;
}

type Car = Vehicle & Engine;

function createCar(vehicle: Vehicle, engine: Engine): Car {
  // 구조 분해 할당 + 스프레드 연산자를 사용하는 객체 생성 방법
  return {...vehicle, ...engine};
}

let v1: Vehicle = {
  make: 'kia',
  model: 'k8'
}

let engine: Engine = {
  engineType: '하이브리드',
  horsepower: 100
}

let newCar = createCar(v1, engine);
console.log(newCar);
// { make: 'kia', model: 'k8', engineType: '하이브리드', horsepower: 100 }