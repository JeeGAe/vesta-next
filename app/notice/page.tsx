import { connectMongoDB } from "@/utils/mongoDB";
import NoticeList from "./components/NoticeList";
import Notice from "@/models/notice";

const getNotice = async () => {
  console.log('getNotice!')
  try {
    const getNotice = await fetch('https://vesta-next-git-dev-jeegaes-projects.vercel.app/api/notice',{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json'
      },
      // cache : 'no-store',
      next : { revalidate : 0 },
    });
    const data = await getNotice.json();
    let notices = [];
    if(data.code === 200){
      notices = data.getNotice;
      return notices;
    }
  } catch (error) {
    console.log('get notice error : ', error)
  }
  
}

export default async function Page (props : any) {
  const notices = await getNotice();


  
  console.log("notice page : ", notices);
  return (
      <div className="news-list-container flex flex-col h-basicHeight">
        <NoticeList notices={notices} />
      </div>
  )
}

export const dynamic = 'force-dynamic'