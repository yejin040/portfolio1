import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import webImage1 from "../assets/webImage1.png";
import webImage2 from "../assets/webImage2.png";

const Section4 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* 물결 reveal */
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [
      "circle(15% at 50% 50%)",
      "circle(150% at 50% 50%)",
    ]
  );

  /* 이미지 전환 */
  const image2Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [0, 1]
  );

  /* 클릭 활성 제어 */
  const image1Clickable = useTransform(
    scrollYProgress,
    (v) => (v < 0.55 ? "auto" : "none")
  );

  const image2Clickable = useTransform(
    scrollYProgress,
    (v) => (v >= 0.55 ? "auto" : "none")
  );

  return (
    <section
      ref={ref}
      className="relative h-[2000px]"
    >
      {/* website */}
      <div className="sticky top-[60px] w-full h-[calc(100vh-60px)] overflow-hidden">

        {/* 이미지 1 */}
        <motion.a
          href="https://www.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          style={{ pointerEvents: image1Clickable }}
        >
          <img
            src={webImage1}
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.a>

        {/* 물결 reveal 레이어 */}
        <motion.img
          src={webImage1}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath }}
        />

        {/*  이미지 2 */}
        <motion.a
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          style={{
            opacity: image2Opacity,
            pointerEvents: image2Clickable,
          }}
        >
          <img
            src={webImage2}
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.a>

      </div>
    </section>
  );
};

export default Section4;