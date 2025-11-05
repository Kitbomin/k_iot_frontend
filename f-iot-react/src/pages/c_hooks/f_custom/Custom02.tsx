import { useInput } from '@/hooks/useInput';
import React, { useState } from 'react'



type userInfo = {
  name: string;
  email: string;
}

function Custom02() {

  // const [userInfo, setUserInfo] = useState<userInfo>({
  //   name: '',
  //   email: ''
  // });

  // const handleInputChange = () => {}

  const example01 = useInput('');
  const { 
    // value 속성을 name이란 변수에 저장
    value: name, 
    handleReset: nameReset, 
    bind: nameBind} = example01;

  const {
    value: email,
    handleReset: emailReset,
    bind: emailBind
  } = useInput('');


  //@ 구조 분해 할당
  const person = {nickname: 'Ara', age: 23};
  const {nickname, age} = person;
  console.log(nickname);
  console.log(age);

  //^ 구조 분해 할당 시 가져오는 데이터의 명칭(키) 변경
  // const { 실제속성값: 변경할명칭 } = 분해할데이터;
  const {nickname: nn} = person;
  console.log(nn); 

  const handleAllReset = () => {
    nameReset();
    emailReset();
  }

  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" name='name' placeholder='사용자 이름' {...nameBind} />
      <button onClick={nameReset}>이름 초기화</button>
      <p>email: {email}</p>
      <input type="email" name='email' placeholder='사용자 이메일' {...emailBind}/>
      <button onClick={emailReset}>이메일 초기화</button>

      <button onClick={handleAllReset}>전체 초기화</button>
    </div>
  )
}

export default Custom02