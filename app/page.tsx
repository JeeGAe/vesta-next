import MainCarousel from "./components/MainCarousel";
import EventCarousel from "./components/EventCarousel";


export default function Home() {
  return (
    <main>
      <MainCarousel />
      <section className="main-contents-container">
        <article className="news">
          <h2>공지사항</h2>
          <ul>
          </ul>
        </article>
        <EventCarousel />
      </section>
      <div className="space"></div>
    </main>
  )
}
