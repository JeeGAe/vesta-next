'use client'

export default function Dropmenu ( props ) {
  return (
    <div className="dropmenu animate-dropdown w-full flex justify-between bg-dropmenu-color  absolute top-nav-height" onMouseLeave={() => props.setOpenDropmenu(false)}>
      <div className="w-logoSize shrink-0"></div>
      <ul className="flex text-gray-200 text-center">
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">베스타소개</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">이용안내</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">오시는 길</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">뷔페 전경사진</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">연회룸 소개</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">가족룸/놀이방 소개</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">뷔페메뉴</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">Beverage</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">바리스타코너</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">돌잔치 안내</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">고회/회갑연 안내</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">피로연 및 단체행사안내</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">이벤트</a></li>
          <li className="py-2"><a href="./src/html/news.html" className="hover:text-primary-color">공지사항</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="py-2"><a href="" className="hover:text-primary-color">고객의소리</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">FAQ</a></li>
          <li className="py-2"><a href="" className="hover:text-primary-color">채용공고</a></li>
        </ul>
        <ul className="drop-nav-menu w-24 border-l-2 border-slate-300 py-3 hover:bg-background-color">
          <li className="login-user-name py-2"></li>
          <li className="py-2"><a href="" className="hover:text-primary-color login-logout"></a></li>
        </ul>
      </ul>
    </div>

  )
}