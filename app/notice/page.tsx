import NoticeList from "./components/NoticeList";

export const dynamic = "force-dynamic";

export default async function Page (props : any) {
  const getNotice = await fetch('http://localhost:3000/api/notice',{
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json'
    },
    cache : 'no-store',
    // next : { revalidate : 0 },
  });
  const data = await getNotice.json();
  let notices = [];
  if(data.code === 200){
    notices = data.getNotice;
  }
  console.log('?')
  return (
      <div className="news-list-container flex flex-col h-basicHeight">
        <NoticeList notices={notices} />
      </div>
  )
}