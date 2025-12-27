import React from 'react';

const Section2 = ({ scrollY, start, text }) => {


/*    
[ Section 2 ]
- 큰 문구 -> 위가 사라지면 큰 문구가 한글자씩 위로 등장 (-> 배열?아니면 split/map 쓸까)
- 설명 문구 -> 큰 문구 다 뜨면 아래에서 올라왔다가 맨 위로 사라짐 x2 
*/
    const perChar = 100;             // 글자 하나당 
     

/*안보이는 상태 -> 스크롤==>아래에서 올라오며 등장
  -> 제자리에서 잠깐 머물다가 -> 스크롤==> 위로 올라가며 서서히 사라짐
  ==>완전히 사라짐
*/

  const ScrollEnd = start + text.length * perChar;
  // 첫글자 시작 스크롤 + 총 800*13 길이 
  //Detailed View 끝나는 순간부터 글자 올라오게 함
        

  //[ 설명스크롤1 - 입장 ] -> opacity = 0
  const explain1Start = ScrollEnd + 100;
  //올라오는 글 시작                  살짝 여유있게 100px뒤에 시작
  const explain1End = explain1Start + 400;
  //들어오는 데 쓰는 거리가 400px

  //[ 설명스크롤1 - 대기 ] -> opacity = 0 ~ 1
  const explain1Ready = (scrollY - explain1Start) / 300;
  //                    =   스크롤위치 상태 - 등장시점 / 300
  //==> 시작 전에는 음수였다가, 시작 지점에선 op가 0, 이후에는 양수
  // 시작 지점에서 x만큼 스크롤 한걸 300으로 나눴을 때 1이 될때 op가 1
  //=== 총 300px동안 이 애니메이션 유지하다가 끝냄

  //explainReady 값을 무조건 0~1 범위(값)로 제한 (opacity에 줄거)
  const explain1Clamped = 
  Math.min(Math.max(explain1Ready, 0), 1);
  //explainReady 값이 0보다 작으면 0으로, 0보다 크면 그대로, 1초과하면 1로
  //Math.max(a, b) -> 두 값중 더 큰값 반환
  //Math.min(c, d); -> 두 값중 더 작은 값 반환
  //그니까 양수,0이면 양수 반환하고, 글면 최종으로 1반환하니까 양수때 op가 1이 맞고
  //음수,0이면 0 반환하고 최종으로 0그대로 반환.
  //== 많이 내리면 1이고, 덜내렸을때 0~1사이고, 시작도 안했으면 0이고
        

  //[ 설명스크롤1 - 퇴장 ] -> opacity = 0 
  const explain1Out = (scrollY - explain1End) / 500;  //퇴장 시작시점
  //등장 끝나고 현재 얼마나 더 스크롤 했는지 / 500 <퇴장하는 동안 쓰이는 px
  const explain1OutClamped = Math.min(Math.max(explain1Out, 0), 1);


  //완성
  const explain1Opacity = explain1Clamped * (1-explain1OutClamped);
  //                      등장한 정도 * 아직 퇴장하지 않은 정도
  // 0*1=0 ... 0.5*1=0.5 ... 1*1=1 ... 1*0.5=0.5 ... 1*0=0






  //[ 설명스크롤2 - 입장 ] 
  const explain2Start = explain1End + 600;  //+100 +500(퇴장만큼)
  const explain2End = explain2Start + 400;

  //[ 설명스크롤2 - 대기 ] -> opacity = 0 ~ 1
  const explain2Ready = (scrollY - explain2Start) / 300;

  const explain2Clamped = 
  Math.min(Math.max(explain2Ready, 0), 1);
        

  //[ 설명스크롤2 - 퇴장 ] -> opacity = 0 
  const explain2Out = (scrollY - explain2End) / 500;  //퇴장 시작시점
  const explain2OutClamped = Math.min(Math.max(explain2Out, 0), 1);


  //완성
  const explain2Opacity = explain2Clamped * (1-explain2OutClamped);
 


  
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
