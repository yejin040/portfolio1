// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const SentenceItem = ({ text, index, total, scrollYProgress }) => {
//   const [y, setY] = useState(0);
//   const [opacity, setOpacity] = useState(0);

//   useEffect(() => {
//     return scrollYProgress.on("change", (v) => {
//       const range = 1 / total;

//       const start = index * range;
//       const center = start + range * 0.5;
//       const end = start + range;

//       // 맨 아래 → 중앙 → 맨 위 (간격 좁힘)
//       const startY = 120;
//       const centerY = 0;
//       const endY = -120;

//       let newY = 0;
//       let newOpacity = 0;

//       if (v < start || v > end) {
//         newOpacity = 0;
//       } else {
//         // 위치 보간
//         if (v <= center) {
//           const t = (v - start) / (center - start);
//           newY = startY + t * (centerY - startY);
//           newOpacity = t;
//         } else {
//           const t = (v - center) / (end - center);
//           newY = centerY + t * (endY - centerY);
//           newOpacity = 1 - t;
//         }
//       }

//       //  너무 빠르지 않게 보정
//       setY(Math.min(Math.max(newY, endY), startY));
//       setOpacity(Math.min(Math.max(newOpacity, 0), 1));
//     });
//   }, [scrollYProgress, index, total]);

//   return (
//     <motion.div
//       style={{
//         transform: `translateY(${y}px)`,
//         opacity,
//       }}
//       className="
//         absolute
//         text-[3vw]
//         font-medium
//         whitespace-nowrap
//         transition-none
//       "
//     >
//       {text}
//     </motion.div>
//   );
// };

// export default SentenceItem;