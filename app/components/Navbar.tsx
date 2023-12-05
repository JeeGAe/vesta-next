'use client'
import { useState } from 'react';
import Image from 'next/image';
import Dropmenu from './Dropmenu';

export default function Header () {
  const [openDropmeun, setOpenDropmenu] = useState(false);


  return (
    <>
      <nav className="main-nav flex justify-between bg-background-color" onMouseEnter={() => setOpenDropmenu(true)}>
        <div className="main-nav-logo shrink-0 cursor-pointer">
          <Image 
          src="http://www.vestabuffet.com/common/img/logo.gif" alt="main-logo"
          width={240}
          height={0}
          />
        </div>
        <ul className="main-nav-menu-container flex text-center cursor-pointer bg-background-color text-gray-400">
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-introduce w-full">INTRODUCE</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-facilty w-full">FACILTY</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-foodmenu w-full">MENU</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-banquet w-full">BANQUET</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-event w-full">EVENT</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <a href="" className="nav-customer w-full">CUSTOMER</a>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black book-check">
            <a href="" className="nav-book w-full">예약 및 조회</a>
          </li>
          <li className="mini-dropbox">
            <div></div>
            <div></div>
            <div></div>
          </li>
        </ul>
      </nav>
      {openDropmeun && 
        <Dropmenu
          setOpenDropmenu={setOpenDropmenu}
        />
      }
      {/* <div className="side-dropmenu hidden">
        <ul>
          <li className="book-check"><a href="">예약 및 조회</a></li>
          <li className="login-user-name"></li>
          <li className="login-logout"></li>
        </ul>
        <ul>
          <li><a href="">INTRODUCE</a></li>
          <li><a href="">베스타소개</a></li>
          <li><a href="">이용안내</a></li>
          <li><a href="">오시는 길</a></li>
        </ul>
        <ul>
          <li><a href="">FACILTY</a></li>
          <li><a href="">뷔페 전경사진</a></li>
          <li><a href="">연회룸 소개</a></li>
          <li><a href="">가족룸/놀이방 소개</a></li>
        </ul>
        <ul>
          <li><a href="">MENU</a></li>
          <li><a href="">뷔페메뉴</a></li>
          <li><a href="">Beverage</a></li>
          <li><a href="">바리스타코너</a></li>
        </ul>
        <ul>
          <li><a href="">BANQUET</a></li>
          <li><a href="">돌잔치 안내</a></li>
          <li><a href="">고회/회갑연 안내</a></li>
          <li><a href="">피로연 및 단체행사안내</a></li>
        </ul>
        <ul>
          <li><a href="">EVENT</a></li>
          <li><a href="">이벤트</a></li>
          <li><a href="./src/html/news.html">공지사항</a></li>
        </ul>
        <ul>
          <li><a href="">CUSTOMER</a></li>
          <li><a href="">고객의소리</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">채용공고</a></li>
        </ul>
      </div> */}
    </>
  )
}