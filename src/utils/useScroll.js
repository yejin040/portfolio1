import React, { useState, useEffect } from 'react';

const useScroll = () => {

  //스크롤 할 때마다 위치 등록
  const [scrollY, setScrollY] = useState(0);   //스크롤 위치 상태

  useEffect(() => {  //컴포넌트가 첨으로 화면에 나타날 때 이벤트 등록

    const onScroll = () => {
    setScrollY(window.scrollY); //현 스크롤 위치를 상태에 저장
    };

    window.addEventListener('scroll', onScroll); //스크롤 발생할때마다 onScroll 실행

    return () => window.removeEventListener('scroll', onScroll);    //언마운트
            }, []);
     


  return scrollY;
}

export default useScroll;
