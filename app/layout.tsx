import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import AuthSession from "@/app/AuthSession";
import Navbar from './components/Navbar';
// vercel에서 지원하는 사이트 분석 라이브러리
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vesta',
  description: 'Vesta restaurant home page renewal',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthSession>
          <header>
            <Navbar />
          </header>
          {children}
          <footer className='text-sm text-font-color bg-background-color py-5 w-full'>
            <div className='flex justify-center'>
              <div className='ml-12 w-6/12'>
                <p><i className='text-primary-color'>업체명</i> 유한회사베스타까르르스타</p>
                <p><i className='text-primary-color'>사업자등록번호</i>  314-86-25446 </p>
                <p><i className='text-primary-color'>대표자</i>  박건용</p>
                <p><i className='text-primary-color'>주소</i>  대전광역시 서구 만년동 339</p>
              </div>
              <div>
                <p><i className='text-primary-color'>팩스</i>  042-487-3396</p>
                <p><i className='text-primary-color'>일반식사문의</i>  042-487-3366</p>
                <p><i className='text-primary-color'>단체행사문의</i>  042-487-3355</p>
              </div>
            </div>
            <p className='text-center pt-5'>COPYRIGHT(C) PREMIUM PUFFET. ALL RIGHTS RESERVED.</p>
          </footer>
        </AuthSession>
        <Analytics />
      </body>
    </html>
  )
}
