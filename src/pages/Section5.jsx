import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import popup1 from "../assets/popup1.png";
import popup2 from "../assets/popup2.png";
import popup3 from "../assets/popup3.png";
import popup4 from "../assets/popup4.png";
import popup5 from "../assets/popup5.png";

const popups = [
  { image: popup1, link: "/popup/1" },
  { image: popup2, link: "/popup/2" },
  { image: popup3, link: "/popup/3" },
  { image: popup4, link: "/popup/4" },
  { image: popup5, link: "/popup/5" },
];

const CARD_WIDTH = 420;
const GAP = 64;          // gap-16
const SIDE_PADDING = 128 * 2; // px-32 좌우
const END_PADDING = GAP;

// 전체 가로 콘텐츠 너비
const TOTAL_WIDTH =
  popups.length * CARD_WIDTH +
  (popups.length - 1) * GAP +
  SIDE_PADDING;

const Section5 = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 실제 가로로 이동해야 할 최대 거리
  const maxX =
    TOTAL_WIDTH - SIDE_PADDING / 2 - window.innerWidth + END_PADDING;

  /* 0 ~ 0.75 까지만 가로 이동 이후 스크롤은 x 고정 → 아래로 자연스럽게 */
  const x = useTransform(
    scrollYProgress,
    [0, 0.75],
    [0, -maxX]
  );

  return (
    <section
      ref={ref}
      className="relative"
      style={{
        height: `${TOTAL_WIDTH}px`, // 가로 길이만큼 스크롤 확보
      }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-16 px-32"
        >
          {popups.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                min-w-[420px] h-[520px]
                bg-neutral-900
                rounded-2xl overflow-hidden
                shadow-xl
                transition-transform duration-300
                hover:scale-105
              "
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;