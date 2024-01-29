import MainCarousel from "./components/MainCarousel";
import EventCarousel from "./components/EventCarousel";
import ScrollEvent from "./components/ScrollEvent";
import Link from "next/link";
import { Key } from "react";

const getLatestNotice = async () => {
  const fetchNotice = await fetch("https://vesta-next.vercel.app/api/notice/latest",{
    method : 'GET',
    headers : {
      'Content-Type' : 'application/json',
    }
  });
  const data = await fetchNotice.json();
  console.log(data);
  return data.getLatestNotice;
}

export default async function Home() {
  const latestNotices = await getLatestNotice();
  return (
    <main>
      <div className="min-h-screen mb-52">
        <MainCarousel />
        <section className="main-contents-container pt-8 flex w-full justify-center">
          <div className="flex w-11/12">
            <article className="news w-6/12">
              <h2>공지사항</h2>
              <ul>
                {
                latestNotices.map((n:any) => 
                  (<li key={n.index}><Link href={`/notice/read/${n.index}`}>{n.title}</Link></li>))
                }
              </ul>
            </article>
            <EventCarousel />
          </div>
        </section>
      </div>
      <ScrollEvent />
      <div className="space"></div>
    </main>
  )
}
