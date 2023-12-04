'use client'

export default function Dropmenu ( props ) {
  return (
    <div className="dropmenu animate-dropdown w-full flex" onMouseLeave={() => props.setOpenDropmenu(false)}>
      <div className="w-logoSize shrink-0"></div>
      <ul className="flex">
        <ul className="drop-nav-menu">
          <li><a href="">베스타소개</a></li>
          <li><a href="">이용안내</a></li>
          <li><a href="">오시는 길</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li><a href="">뷔페 전경사진</a></li>
          <li><a href="">연회룸 소개</a></li>
          <li><a href="">가족룸/놀이방 소개</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li><a href="">뷔페메뉴</a></li>
          <li><a href="">Beverage</a></li>
          <li><a href="">바리스타코너</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li><a href="">돌잔치 안내</a></li>
          <li><a href="">고회/회갑연 안내</a></li>
          <li><a href="">피로연 및 단체행사안내</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li><a href="">이벤트</a></li>
          <li><a href="./src/html/news.html">공지사항</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li><a href="">고객의소리</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">채용공고</a></li>
        </ul>
        <ul className="drop-nav-menu">
          <li className="login-user-name"></li>
          <li><a href="" className="login-logout"></a></li>
        </ul>
      </ul>
    </div>

  )
}