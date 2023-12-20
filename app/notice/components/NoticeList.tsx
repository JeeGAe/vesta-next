'use client'

import { useSession } from "next-auth/react"
import Link from "next/link";
import React, { useState } from "react";

export default function NoticeList (props : any) {
  const { data : session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const notices = props?.notices || [];
  const calculateTotalPage = Math.ceil(notices?.length / 10);
  const pagenationArray = new Array(calculateTotalPage).fill(0).map((_:any, index:number) => index + 1);

  return (
    <div className="w-full bg-background-color h-4/5 border-y-8  border-secondary-color mt-10 flex flex-col min-h-notice-container">
      <div>
        <ul className="flex border-b border-font-color py-2">
          <li className="w-1/12 text-center text-primary-color">No</li>
          <li className="w-7/12 text-center text-primary-color">제목</li>
          <li className="w-2/12 text-center text-primary-color">글쓴이</li>
          <li className="w-2/12 text-center text-primary-color">조회수</li>
        </ul>
      </div>
      <div className="flex flex-col grow">
        <ul className="news-list h-full">
          {notices.length !== 0 ?
          notices.map((n:any, index:number) => {
            return(
            <React.Fragment key={n._id}>
              {
                (currentPage - 1) * 10 <= index && index < currentPage * 10 && 
                <ul  className="flex py-1.5">
                  <li className="w-1/12 text-center text-primary-color">{n.index}</li>
                  <li className="w-7/12 pl-5 text-primary-color"><Link href={`/notice/read/${n.index}`}>{n.title}</Link></li>
                  <li className="w-2/12 text-center text-primary-color">{n?.author?.name}</li>
                  <li className="w-2/12 text-center text-primary-color">{n.views}</li>
                </ul>
              }
            </React.Fragment>
          )}):
          <li>공지가 없습니다!</li>
          }
        </ul>
        <ul className="news-list-page flex justify-center">
          {notices.length !== 0 && pagenationArray.map((i:any) => (
            <li key={i} className={`cursor-pointer w-6 h-6 text-center border-y border-font-color text-font-color ${currentPage===i && 'text-primary-color font-bold bg-secondary-color'}`} onClick={() => setCurrentPage(i)}>{i}</li>
          ))}
        </ul>
        <div className="flex justify-end pr-5 py-1">
          {session?.user?.isAdmin &&
            <Link className="bg-secondary-color py-1 px-2 rounded-md text-primary-color font-bold" href='/notice/write' prefetch={false}>글쓰기</Link>
          }
        </div>
      </div>
    </div>
    
  )
}