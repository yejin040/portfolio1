import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sentences = [
  "온라인 매출을 높이고 싶어요",
  "제품을 상세히 소개하고 싶어요",
  "실제 같은 디지털 쇼룸을 만들고 싶어요",
  "제품의 기능을 시뮬레이션하고 싶어요",
  "기능이 다양해서 설명하기 힘들어요",
  "커스텀 제품을 만들 수 있으면 좋겠어요",
  "차별화된 쇼핑 경험을 제공하고 싶어요",
];

const Section3 = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* 실제 scrollY 값 추출 */
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const totalHeight = sectionRef.current.offsetHeight;
      setScrollY(v * totalHeight);
    });
  }, [scrollYProgress]);

  const viewport = window.innerHeight;

  /* 속도 조절 (클수록 느림) */
  const sentenceGap = viewport * 1.1;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${sentences.length * 140}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {sentences.map((text, index) => {
          const start = index * sentenceGap;
          const end = start + sentenceGap;

          const progress = Math.min(
            Math.max((scrollY - start) / sentenceGap, 0), 1);

          /* 위치: 아래 → 중앙 → 위 */
          const y = (1 - progress) * viewport * 0.6 - progress * viewport * 0.6;

          /* 중앙에서 가장 진하게 */
          const opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

          return (
            <div key={index} className="absolute left-1/2 top-1/2 text-center"
              style={{
                transform: `translate(-50%, -50%) translateY(${y}px)`,
                opacity,
                fontSize: "4rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}>
              {text}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section3;