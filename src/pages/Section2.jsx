import React from 'react';

const Section2 = ({ scrollY, start,text,perChar,
   explain1Clamped,explain1OutClamped,explain1Opacity,
   explain2OutClamped,explain2Opacity,explain2Clamped  }) => {


/*    
[ Section 2 ]
- 큰 문구 -> 위가 사라지면 큰 문구가 한글자씩 위로 등장 (-> 배열?아니면 split/map 쓸까)
- 설명 문구 -> 큰 문구 다 뜨면 아래에서 올라왔다가 맨 위로 사라짐 x2 
*/
   

  
  return (
    <>
      
    <div className="detailWrapper"
    style={{
      transform:`translate(-50%, ${-400 * explain2OutClamped}px)`,
    }}
    >
  {text.split('').map((char, index) => {
    const charStart = start + index * perChar;
    const progress = (scrollY - charStart) / perChar;

    const clamped = Math.min(Math.max(progress, 0), 1);

    return (
      <span
        key={index}
        className="detailChar"
        style={{
          opacity: clamped,
          transform: `translateY(${(1 - clamped) * 30}px)`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    );
  })}
</div>


<div className='explainGroup' style={{
        opacity: explain1Opacity,
    transform: `
      translateY(
        ${50 * (1 - explain1Clamped)   //아래+50px, 제자리는 0px
                                      //-n00px씩, 긍까 위로 올라감
          - 400 * explain1OutClamped}px  ) `,}}>
  360도 인터랙티브 뷰를 통해 제품의 모든 면을<br />
  직관적으로 탐색할 수 있어,<br />
  사용자는 디테일한 구조와 마감까지 확인 가능합니다.
</div>



   <div className='explainGroup' style={{
        opacity: explain2Opacity,
    transform: `
      translateY(
        ${50 * (1 - explain2Clamped)   //아래+50px, 제자리는 0px
                                      //-n00px씩, 긍까 위로 올라감
          - 400 * explain2OutClamped}px  ) `,}}>
    금속, 패브릭, 고무 등 다양한 소재의 질감을<br />
    실물처럼 구현할 수 있으며,<br />
    LED 화면이나 특정 동작 표현도 가능합니다.</div>
     
    </>
  )
}

export default Section2;
