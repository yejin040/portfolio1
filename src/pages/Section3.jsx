import React from 'react'

const Section3 = ({ scrollY,detailEndY }) => {


/*    
[ Section 3 ]
- 큰 문구 -> 스크롤하면 천천히 사라짐
- 설명 문구 -> 애들이 다 보이고, 하나씩 올라오면서 op가 1됐다가 0됐다가.. 
*/

const sentences = [
  '온라인 매출을{아이콘} 높이고 싶어요',
  '제품을 상세히 소개하고 싶어요',
  '실제 같은 디지털 쇼룸을 만들고 싶어요.',
  '제품의 기능을 시뮬레이션하고 싶어요',
  '기능이 다양해서 설명하기 힘들어요',
  '커스텀제품을 만들 수 있으면 좋겠어요',
  '차별화된 쇼핑 경험을 제공하고 싶어요'
];

const centerY = window.innerHeight /2; //화면 중앙 기준으로 opacity 계산
const fadeDistance = 200; //중앙에서 +- 200px 범위에서 0~1


  return (
    <>
      <div style={{position:'relative',height:'200vh'}}>
        {sentences.map((sentence, index)=>{
          const sentenceY =detailEndY + index * 200 ; //Detailed View 퇴장시점
          const distance = Math.abs(scrollY + centerY - sentenceY);
          const opacity = Math.max(0, 1 - distance / fadeDistance);

          return(
            <div key={index}
            style={{
              position:'absolute',
              top: sentenceY,
              left: '50%',
              transform: 'translateX(-50%)',
              opacity,
              transition: 'opacity 0.1s linear',
              textAlign: 'center',
              fontSize: '3rem',
            }}
            >
              {sentence}
            </div>
          )
        })}
       
      </div>
    </>
  )
}

export default Section3;
