import React from 'react'
import { NavLink } from 'react-router-dom';

//! Link VS NavLink
//  : a 태그와 유사하게 동작
//  - 새로고침하지 않고 SPA의 다른 경로로 이동하게끔 도와줌
//  - 해당 링크 클릭 시 이동할 경로값(path)을 to 속성으로 지정해줌 (필수 속성, href와 유사) 

//? 1) Link
//   : 가장 기본적인 페이지 전환 컴포넌트 (a태그)

//? 2) NavLink
//   : Link 기능 + 현재 활성화된 페이지 경로에 대한 추가적인 스타일 / 클래스명 적용 가능 기능
//*  : 현재 경로에 따라 isActive를 사용해 스타일이나 클래스를 다르게 지정 가능함
function Navibar() {
  const links = ['/', 'basic', 'route', 'hooks'];
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '10px', 
      padding: '10px 20px', border: '1px solid black', borderRadius: '5px'
    }}>
      {links.map(link => (
        <NavLink to={link} key={link} style={({isActive}) => ({
          textDecoration: 'none', color: isActive ? 'white' : 'black',
          backgroundColor: isActive ? 'black' : 'white',
          margin: '5px', padding: '10px 20px', borderRadius: '5px'
        })}>
          {link === '/' ? 'HOME' : link.toLocaleUpperCase()}
        </NavLink>
      ))}
    </div>
  )
}

export default Navibar