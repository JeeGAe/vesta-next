'use client'

const imgs = [
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1691390852_11691390852.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1666232508_11666232508.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1652172608_11652172608.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1639207245_11639207245.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1574660746_11574660746.jpg" },
]

export default function EventCarousel () {
  return (
    <article className="event-carousel-container">
      <div className="event-carousel">
        {imgs.map((img, index) => (
          <div key={img.src} className="img-container">
            <img src={img.src} alt=""/>
          </div>
        ))}
      </div>
      <div className="event-indicator-container indicator">
        <div className="event-indicator" id="event-indicator-0"></div>
        <div className="event-indicator" id="event-indicator-1"></div>
        <div className="event-indicator" id="event-indicator-2"></div>
        <div className="event-indicator" id="event-indicator-3"></div>
        <div className="event-indicator" id="event-indicator-4"></div>
      </div>
    </article>
  )
}