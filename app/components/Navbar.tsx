'use client'
import { useState } from 'react';
import Image from 'next/image';
import Dropmenu from './Dropmenu';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Header (props : any) {
  const [openDropmeun, setOpenDropmenu] = useState(false);
  const { data : session } = useSession();

  return (
    <>
      <nav className="main-nav flex justify-between bg-background-color" onMouseEnter={() => setOpenDropmenu(true)}>
        <div className="main-nav-logo shrink-0 cursor-pointer">
          <Link href="/">
            <Image 
            src="http://www.vestabuffet.com/common/img/logo.gif" alt="main-logo"
            width={240}
            height={94}
            />
          </Link>
        </div>
        <ul className="main-nav-menu-container flex text-center cursor-pointer bg-background-color text-font-color">
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-introduce w-full">INTRODUCE</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-facilty w-full">FACILTY</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-foodmenu w-full">MENU</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-banquet w-full">BANQUET</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-event w-full">EVENT</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black">
            <Link href="/" className="nav-customer w-full">CUSTOMER</Link>
          </li>
          <li className="main-nav-menu w-24 border-l-2 border-slate-300 flex items-center hover:bg-black book-check">
            {!session ? <Link href="/signin" className="nav-book w-full">예약 및 조회</Link> :
              <Link href="/reserve" className="nav-book w-full">예약 및 조회</Link>
            }
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
          <li className="book-check"><Link href="/">예약 및 조회</Link></li>
          <li className="login-user-name"></li>
          <li className="login-logout"></li>
        </ul>
        <ul>
          <li><Link href="/">INTRODUCE</Link></li>
          <li><Link href="/">베스타소개</Link></li>
          <li><Link href="/">이용안내</Link></li>
          <li><Link href="/">오시는 길</Link></li>
        </ul>
        <ul>
          <li><Link href="/">FACILTY</Link></li>
          <li><Link href="/">뷔페 전경사진</Link></li>
          <li><Link href="/">연회룸 소개</Link></li>
          <li><Link href="/">가족룸/놀이방 소개</Link></li>
        </ul>
        <ul>
          <li><Link href="/">MENU</Link></li>
          <li><Link href="/">뷔페메뉴</Link></li>
          <li><Link href="/">Beverage</Link></li>
          <li><Link href="/">바리스타코너</Link></li>
        </ul>
        <ul>
          <li><Link href="/">BANQUET</Link></li>
          <li><Link href="/">돌잔치 안내</Link></li>
          <li><Link href="/">고회/회갑연 안내</Link></li>
          <li><Link href="/">피로연 및 단체행사안내</Link></li>
        </ul>
        <ul>
          <li><Link href="/">EVENT</Link></li>
          <li><Link href="/">이벤트</Link></li>
          <li><a href="./src/html/news.html">공지사항</Link></li>
        </ul>
        <ul>
          <li><Link href="/">CUSTOMER</Link></li>
          <li><Link href="/">고객의소리</Link></li>
          <li><Link href="/">FAQ</Link></li>
          <li><Link href="/">채용공고</Link></li>
        </ul>
      </div> */}
    </>
  )
}