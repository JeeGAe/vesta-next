import { connectDB } from "@/utils/mongoDB";
import NewsList from "./components/NewsList";

export default async function News (props : any) {
  const db = (await connectDB).db("vesta-next");
  const news = await db.collection("news").find().toArray();

  return (
      <div className="news-list-container flex flex-col h-basicHeight">
        <NewsList news={news}/>
      </div>
  )
}