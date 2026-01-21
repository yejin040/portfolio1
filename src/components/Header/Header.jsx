import React, { useEffect, useRef, useState } from "react";
import useScroll from "../../utils/useScroll";

const Header = () => {
  const scrollY = useScroll();
  const [scrollShow, setScrollShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (scrollY > lastScrollY.current) {
      setScrollShow(false);
    } else {
      setScrollShow(true);
    }
    lastScrollY.current = scrollY;
  }, [scrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 z-[1000]
        w-full h-[80px]
        transition-transform duration-300 ease-in-out
        ${scrollShow ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-between pt-[25px] pl-[15px]">
        <a
          href="/logo"
          className="ml-[5%] text-3xl font-bold text-[var(--org)] no-underline"
        >
          SOI.LAB 3D
        </a>

        <div className="mr-[5%] flex items-center">
          {["About", "FAQ", "도입문의"].map((text) => (
            <a
              key={text}
              href={`/${text}`}
              className="
                relative mr-[50px]  translate-x-[20px]
                text-lg font-medium text-[var(--textColor)]
                no-underline
                after:content-['']
                after:absolute after:left-1/2
                after:-bottom-[5px] after:h-px after:w-0
                after:bg-[var(--textColor)]
                after:-translate-x-1/2
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {text}
            </a>
          ))}

          <button className=" ml-[10px] mr-[30px]
                rounded-full border-0
                bg-[var(--org)]
                px-5 py-2
                text-sm font-medium
                text-[var(--textColor)]
                cursor-pointer">
  추예진 ???
</button>
        </div>
      </div>
    </div>
  );
};

export default Header;