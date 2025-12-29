import React from 'react';
import './Section1.css';


const Section1 = ({ scrollY }) => {
/*  [ Section 1 ]
  - 큰 문구 -> 중앙 -> 500px정도에서 스크롤
  - 설명 문구 -> 저 큰 문구 좌측 하단에 같이 있다가 같이 사라짐
   
*/


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

    
  </>
)}

export default Section1;
