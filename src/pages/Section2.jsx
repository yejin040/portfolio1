import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";





const TITLE = "Detailed View";


const Section2 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const [visibleCount, setVisibleCount] = useState(0);
  const [desc1Progress, setDesc1Progress] = useState(0);
  const [desc2Progress, setDesc2Progress] = useState(0);

  const totalChars = TITLE.length;

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      /* 타이틀 글자 (0 ~ 0.4) */
      const titleProgress = Math.min(Math.max(v / 0.4, 0), 1);
      setVisibleCount(Math.floor(titleProgress * totalChars));

      /* 설명 1 (0.55 ~ 0.7) */
      const d1 = v > 0.55
          ? Math.min(Math.max((v - 0.55) / 0.15, 0), 1)
          : 0;
      setDesc1Progress(d1);

      /* 설명 2 (0.75 ~ 0.9) */
      const d2 = v > 0.75
          ? Math.min(Math.max((v - 0.75) / 0.15, 0), 1)
          : 0;
      setDesc2Progress(d2);
    });
  }, [scrollYProgress, totalChars]);

  return (
    <section ref={ref} className="relative"
      style={{ height: "200vh" }}>
     
      <h1 className="sticky top-[30%] text-[8vw] text-center flex justify-center gap-[0.1em]"
        style={{
          transform: `translateY(${-desc2Progress * 150}px)`,
          opacity: (1 - desc2Progress) * 0.2,
        }}>
        {TITLE.split("").map((char, index) => {
          const isVisible = index < visibleCount;

          return ( <span key={index} style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0px)"
                        : "translateY(40px)",
                      transition: "all 0.3s ease-out", }}>
              {char}
            </span>
          );
        })}
      </h1>

      
      <div className="ml-[3%] text-[1.5vw] sticky top-[60%]"
        style={{opacity:
                        desc1Progress > 0 && desc2Progress === 0
                        ? desc1Progress
                        : 0,
                        transform: `translateY(${60 - desc1Progress * 120}px)`, }}>
        360도 인터랙티브 뷰를 통해 제품의 모든 면을
        <br />
        직관적으로 탐색할 수 있어요
        </div>


      <div className="ml-[3%] text-[1.5vw] sticky top-[60%]"
        style={{
          opacity: desc2Progress,
          transform: `translateY(${60 - desc2Progress * 120}px)`,
        }} >
        금속, 패브릭, 고무 등 다양한 소재를
        <br />
        실물처럼 표현할 수 있어요
      </div>
    </section>
  );
};

export default Section2;