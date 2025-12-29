import React, { useEffect, useRef, useState } from 'react'
import './HeaderST.css';
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
    <div className={`header ${scrollShow ? 'show' : 'hide'}`}>
        {/* <div> */}
            <div className='group'>
                <a href='/logo'className='logo'>SOI.LAB 3D</a>
                <div className='menuTool'>  
                    {/* Link */}
                    <a href='/menu' className='menu'>About</a>
                    <a href='/menu' className='menu'>FAQ</a>
                    <a href='/menu' className='menu'>도입문의</a>
                    <button className='Btn'>추예진 ??</button>
                </div>
            </div>
        {/* </div> */}
    </div>
    </>
)}

export default Header;
