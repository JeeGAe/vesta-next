import MainCarousel from "./components/MainCarousel";
import EventCarousel from "./components/EventCarousel";
import ScrollEvent from "./components/ScrollEvent";


export default function Home() {
  return (
    <main>
      <div className="min-h-screen mb-52">
        <MainCarousel />
        <section className="main-contents-container pt-8 flex w-full justify-center">
          <div className="flex w-11/12">
            <article className="news w-6/12">
              <h2>공지사항</h2>
              <ul>
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
