import React from 'react'
import './Z_Products.css'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { PRODUCTS } from './Z_Products';




function Z_ProductDetail() {
  // useParams() 에서 추출하는 값의 속성명은 동적 변수(:변수명)과 일치시켜야함
  const { id } = useParams();
  const navigate = useNavigate(); // 함수 반환
  const location = useLocation(); // 실제 데이터값: 객체 반환
  

  const handleBack = () => {
    // location.state.from
    // : 이전 페이지의 URL 정보를 담은 속성

    // - 페이지 전환을 통해 상세 페이지로 이동한 경우
    if(location.state?.from) navigate(location.state.from);

    // - 경로값 지정으로 해당 페이지 이전의 경로값이 없는경우
    else navigate('/products'); 
  }

  return (
    <div className='detail-container'>
      <h2>Product Detail #{id}</h2>

      <p className='path-text'>현재 경로: {location.pathname}</p>

      <div className="button-group">
        <button onClick={handleBack}>목록으로 </button>
        <button onClick={() => navigate('/dashboard')}>대시보드로 이동</button>
      </div>


      <nav className='sub-nav'>
        <Link to='info'>제품 정보</Link>
        <Link to='reviews'>리뷰</Link>
      </nav>

      <p>상품명: {}</p>

      <div className="nested-outlet">
        {/* ProductDetail 라우트의 중첩 라우트 페이지가 해당 위치에서 출력 */}
        <Outlet />
      </div>
      
    </div>
  )
}

export default Z_ProductDetail