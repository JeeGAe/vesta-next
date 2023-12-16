export default function NewsList (props : any) {
  return (
    <>
      <ul className="news-list">
        {props.news?.length !== 0 ? props.news.map((n:any) => (
          <li key={n._id}>{n.title}</li>
        ))
        :
          <li>공지가 없습니다.</li>
        }
      </ul>
      <ul className="news-list-page"></ul>
    </>
  )
}