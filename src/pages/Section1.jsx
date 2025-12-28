import React, { useEffect, useState } from 'react'
import './Section1.css';
import Section2 from './Section2';
import Section3 from './Section3';
const Section1 = () => {


/*  [ Section 1 ]
  - 큰 문구 -> 중앙 -> 500px정도에서 스크롤
  - 설명 문구 -> 저 큰 문구 좌측 하단에 같이 있다가 같이 사라짐
   
*/

  //스크롤 할 때마다 위치 등록
  const [scrollY, setScrollY] = useState(0);   //스크롤 위치 상태

  useEffect(() => {  //컴포넌트가 첨으로 화면에 나타날 때 이벤트 등록

    const onScroll = () => {
    setScrollY(window.scrollY); //현 스크롤 위치를 상태에 저장
    };

    window.addEventListener('scroll', onScroll); //스크롤 발생할때마다 onScroll 실행

    return () => window.removeEventListener('scroll', onScroll);    //언마운트
            }, []);
 

    //S2
   
    const text = 'Detailed View';   
   
    const start = 800;              // 시작 스크롤 -> 800px부터 글자 나오게


  

  return (
    <>

     <div className="myName" style={{
        transform: scrollY <= 500      ?     'translate(-50%, -50%)'    //500보다 작으면 중앙유지
        : `translate( -50% , calc(-50% - ${(scrollY - 500)}px)  )`,
            // 마이너스 지금 스크롤 - 500 = 무ㅡㅓ 300 , 300px만큼 
            // calc() 서로 다른 단위(% + px)를 한 번에 계산하기 위해 씀
      }}>CHOO YE JIN</div> 

     <div className='explainGroup' style={{
        transform: scrollY <= 500 ? 'translateY(-50%)'
        : `translateY(calc(-50% - ${(scrollY - 500)}px))`,
      }}>
        소이정 3D LAB은 제품의  단순한 3D화를 넘어,<br />
       디지털 쇼룸으로 확장 가능한<br />
       차세대 3D 웹 기반 실시간 제품 경험을 연구합니다.</div>


      <Section2 
      scrollY={scrollY}
      start={start}
      text={text} />



    <Section3 scrollY={scrollY} detailEndY={start + text.length*100 + 100 + 400 + 2000 }/>


    
    </>

  )
}

export default Section1
