'use client'

import Link from "next/link"
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react";

export default function Dropmenu ( props : any ) {
  const { data : session } = useSession();
  console.log(session)
  
  return (
    <div className="dropmenu animate-dropdown w-full flex justify-between bg-dropmenu-color  absolute top-nav-height" onMouseLeave={() => props.setOpenDropmenu(false)}>
      <div className="w-logoSize shrink-0"></div>
      <ul className="flex text-gray-200 text-center">
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">베스타소개</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">이용안내</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">오시는 길</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">뷔페 전경사진</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">연회룸 소개</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">가족룸/놀이방 소개</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">뷔페메뉴</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">Beverage</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">바리스타코너</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">돌잔치 안내</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">고회/회갑연 안내</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">피로연 및 단체행사안내</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">이벤트</Link></li>
          <li className="py-2"><Link href="/notice" className="hover:text-primary-color" prefetch={false}>공지사항</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><Link href="/" className="hover:text-primary-color">고객의소리</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">FAQ</Link></li>
          <li className="py-2"><Link href="/" className="hover:text-primary-color">채용공고</Link></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          {session &&
            <>
              <li className="login-user-name py-2">{session.user?.name} 님</li>
              <li className="py-2"><Link href="/" 
              onClick={(e) => { 
                e.preventDefault();
                signOut();}} 
              className="hover:text-primary-color login-logout">로그아웃</Link></li>
            </>
          }
        </ul>
      </ul>
    </div>

  )
}