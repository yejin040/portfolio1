import React, { useEffect, useRef, useState } from 'react'
// import './HeaderST.css';
import useScroll from '../../utils/useScroll';

const Header = () => {
    const scrollY = useScroll();    //직접 호출
                                                //일단보임
    const [scrollShow, setScrollShow] = useState(true);//스크롤 보일지말지
    const lastScrollY = useRef(0);
    //마지막 스크롤값 변경상태(ㄱ값만 저장, 렌더링X))

    
// 컴포넌트가 화면에 나타나거나, 사라지거나, 값이 바뀔 때
// 부가적인 작업(side effect)을 하라고 있는 훅인 useEffect쓰고
    useEffect (()=>{
        
        if(scrollY > lastScrollY.current){   //직전
            setScrollShow(false);
        // scrollShow = boolean 값이라 함수가 아님
        //글서 새로 설정해주는 설정자로 false값변경

        }else{
            setScrollShow(true);
        }

        // 비교 끝나고 마지막 스크롤 값 저장/갱신
       lastScrollY.current = scrollY;
    },[scrollY]);//스크롤할때마다 실행





return (
    <>
    <div className={`fixed top-0 left-0 z-[1000] 
    w-full h-[80px] transition-transform duration-300 ease-in-out
        ${scrollShow ? "translate-y-0" : "-translate-y-full"}
      `}>
        
        <div className="flex items-center justify-between pt-[25px] pl-[15px]">
            <a href='/logo'className="ml-[5%] text-[var(--org)]
            text-3xl font-bold no-underline">SOI.LAB 3D</a>

            <div className="mr-[5%] flex items-center">  
                {/* Link */}
                <a href="/About" className="relative mr-[50px]
                text-lg font-medium text-[var(--textColor)] no-underline
                after:content-[''] after:absolute after:left-1/2
                after:-bottom-[5px] after:h-px after:w-0 after:bg-[var(--textColor)]
                after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
                About</a>

                <a href="/FAQ" className="relative mr-[50px] text-lg font-medium
                text-[var(--textColor)] no-underline after:content-['']
                after:absolute after:left-1/2 after:-bottom-[5px]
                after:h-px after:w-0 after:bg-[var(--textColor)]
                after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full">
                FAQ</a>

                <a href="/Q2" className="relative mr-[50px] text-lg font-medium
                text-[var(--textColor)] no-underline after:content-['']
                after:absolute after:left-1/2 after:-bottom-[5px]
                after:h-px after:w-0 after:bg-[var(--textColor)] after:-translate-x-1/2
                after:transition-all after:duration-300 hover:after:w-full">
                도입문의</a>

                <button
                    className="ml-[30px] rounded-full border-0
                    bg-[var(--org)] px-5 py-2 text-sm font-medium 
                    cursor-pointer">추예진 ??</button>
            </div>
        </div>
  
    </div>
    </>
)}

export default Header;
