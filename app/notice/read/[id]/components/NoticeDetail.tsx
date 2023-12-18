import Link from "next/link";

export default function NoticeDetail (props:any) {
  const notice = props.notice;
  return (
    <div className="w-full bg-background-color h-4/5 border-y-8  border-secondary-color mt-10 flex flex-col min-h-notice-container">
      <div>
        <ul className="flex border-b border-font-color py-2">
          <li className="w-1/12 text-center text-primary-color">{notice.index}</li>
          <li className="w-7/12 text-center text-primary-color">{notice.title}</li>
          <li className="w-2/12 text-center text-primary-color">글쓴이</li>
          <li className="w-2/12 text-center text-primary-color">{notice.views}</li>
        </ul>
      </div>
      <div className="flex flex-col grow">
        <div className="news-list h-full">
          <textarea value={notice.description} readOnly className="h-full w-full p-2 resize-none focus-none"/>
        </div>
        <div className="flex justify-end pr-5 py-1">
          <Link className="bg-secondary-color py-1 px-2 rounded-md text-primary-color font-bold" href='/notice'>목록</Link>
        </div>
      </div>
    </div>
  )
}