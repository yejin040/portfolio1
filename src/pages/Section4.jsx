import React from 'react'
import './Section4.css';
import webImage1 from '../assets/webImage1.png';
import webImage2 from '../assets/webImage2.png';
const Section4 = ({ sectionScroll }) => {

  // //이미지1
  //   const img1Y = Math.max(0 , 100 - sectionScroll * 0.2 );
  //   const img1YOpacity = sectionScroll < 800 ? 1 : 0;

  //   //2
  //   const img2Y = Math.max(0 , 100 - (sectionScroll - 800) * 0.2 );
  //   const img2YOpacity = sectionScroll >= 800 ? 1 : 0;


   const progress1 = Math.min(Math.max(sectionScroll / 800, 0), 1);
  const progress2 = Math.min(Math.max((sectionScroll - 800) / 800, 0), 1);


  return (
   <div className="website">
      <div className="website-inner">
        <img
          src={webImage1}
          style={{
            transform: `scale(${1 + progress1 * 0.3})`,
            opacity: 1 - progress2,
          }}
        />
        <img
          src={webImage2}
          style={{
            transform: `scale(${1 + progress2 * 0.3})`,
            opacity: progress2,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Section4;
