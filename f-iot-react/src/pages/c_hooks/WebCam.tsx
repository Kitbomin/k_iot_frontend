import React, { useEffect, useRef, useState } from 'react'
import './WebCam.css'


//! webcam을 활용한 간단한 사진 캡쳐 및 표시 기능
//  : webcam으로 사진을 찍고, 찍은 사진을 화면에 표시
//  - useState, useRef, useEffect 사용

function WebCam() {
  //^ Hooks
  //? useState: 웹캠의 비디오 스트림 저장
  const [image, setImage] = useState<string | null>(null);

  //? useRef: HTML 요소에 직접적인 조작을 가할거임
  // 비디오 HTML 요소
  const videoRef = useRef<HTMLVideoElement>(null);

  // 캔버스 HTML 요소
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //? useEffect: 마운트 시 실행될 로직 작성 (웹캠 설정)
  useEffect(() => {
    // 비동기 함수로 웹캠설정
    async function setupWebcam() {
      const stream = await navigator.mediaDevices.getUserMedia({video: true});

      if(videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    setupWebcam();
  },[])

  //^ Event Handler
  //? 이미지 캡쳐 이벤트 핸들러
  const handleCaptureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if(video && canvas) {
      const context = canvas.getContext('2d');

      if(context) {
        // 비디오의 ㅕㅎㄴ재 스트림을 캔버스에 그림
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // 캔버스의 내용을 png 형식으로 데이터 URL 반환
        const imageData = canvas.toDataURL('image/png');
        setImage(imageData);
      }
    }
  }

  return (
    <div className='container'>
      <div className="camera-card">
        <h4 className='title'>카메라 앱</h4>
        <video 
          ref={videoRef}
          autoPlay
          playsInline // 전체 화면 전환 없이 바로 재생
          width='320'
          height='240'
          className='video'
        ></video>
        <button onClick={handleCaptureImage} className='capture-button'>
          이미지 캡쳐
        </button>

        <canvas
          ref={canvasRef}
          width='320'
          height='240'
          style={{display: 'none'}}
        ></canvas>

        {image && (
          <div className="image-section">
            <h5 className="subtitle">캡쳐돈 이미지</h5>
            <img src={image} alt="캡처된 이미지" style={{width: "320", height: '240'}} className='captured-image'/>
          </div>
        )}
      </div>
    </div>
  )
}

export default WebCam