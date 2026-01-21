import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";




const Section1 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 0~0.3 동안 중앙 유지 → 위로 이동
  const y = useTransform(scrollYProgress, [0, 0.3], ["-50%", "-150%"]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  return (
    <section ref={ref} className="h-[200vh] relative bg-[var(--bgColor)]">
      <motion.div
        className="sticky top-[45%] left-1/2
          w-full text-center text-[10vw] font-medium
          whitespace-nowrap pointer-events-none text-[var(--textColor)]
          -translate-x-1/2"
        style={{ y, opacity }}>
        CHOO YE JIN
      </motion.div>

      <motion.div
        className="sticky top-[66%] left-[3%] w-1/2
          text-[1.3vw] font-light pointer-events-none"
        style={{ y, opacity }}>
        소이정 3D LAB은 제품의 단순한 3D화를 넘어,<br />
        디지털 쇼룸으로 확장 가능한<br />
        차세대 3D 웹 기반 실시간 제품 경험을 연구합니다.
      </motion.div>
    </section>
  );
};

export default Section1;
