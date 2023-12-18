import NoticeDetail from "./components/NoticeDetail";

export default async function Page (props:any) {
  const fetchNotice = await fetch(`http://localhost:3000/api/notice/${props.params.id}`,{
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
    cache : 'no-store',
  });
  let notice = {};
  const noticeData = await fetchNotice.json();
  if(noticeData.code === 200){
    notice = {...noticeData.getNotice};
  }
  
  return (
    <div className="h-basicHeight">
      <NoticeDetail notice={notice}/>
    </div>
  )
}