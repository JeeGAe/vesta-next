'use client'
import { useState, useEffect, useRef } from 'react';

const imgs = [
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1699341000_11699341000.jpg?1701762841181" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1666232508_11666232508.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1652172608_11652172608.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1639207245_11639207245.jpg" },
  { src : "http://www.vestabuffet.com/upData/bbs2/bbs2_1699064046_11699064046.jpg" },
]

export default function EventCarousel () {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const mainCarouselRef = useRef<null | HTMLDivElement>(null);
  const imgsLength = imgs?.length;

  useEffect(() => {
    console.log(carouselIndex)
    const timeId = setTimeout(() => {
      if(carouselIndex < imgsLength){
        setCarouselIndex(prev => prev + 1);
      } else {
        setCarouselIndex(1);
      }
    }, 3000);
    if(mainCarouselRef.current !== null){
      const mainCarouselWidth = mainCarouselRef.current.getBoundingClientRect().width;
      mainCarouselRef.current.scrollTo({ top : 0, left : mainCarouselWidth * (carouselIndex - 1), behavior : 'smooth' });
    }
    const corouselResizeHandler = () => {
      if(mainCarouselRef.current !== null){
        const mainCarouselWidth = mainCarouselRef.current.getBoundingClientRect().width;
        mainCarouselRef.current.scrollTo({ top : 0, left : mainCarouselWidth * (carouselIndex - 1) });
      }
    }
    // 브라우저 크기 변경 시 캐러셀 위치 조정
    window.addEventListener('resize', corouselResizeHandler);

    return () => {
      clearTimeout(timeId);
      window.removeEventListener('resize', corouselResizeHandler);
    }
  }, [carouselIndex])


  return (
    // 이벤트 캐러셀 영역
    <article className="event-carousel-container w-6/12">
      <div className="event-carousel flex overflow-hidden w-full" ref={mainCarouselRef}>
        {imgs.map((img) => (
          <div key={img.src} className="img-container w-full shrink-0">
            <img  className="w-full" src={img.src} alt=""/>
          </div>
        ))}
      </div>
      {/* 인디케이터 영역 */}
      <div className="event-indicator-container indicator flex mt-2 justify-center gap-2.5">
        {imgs.map((_, index) => (
          <div key={index} className={`event-indicator cursor-pointer rounded-full bg-black w-2 h-2 ${index + 1 === carouselIndex && 'bg-primary-color'}`} onClick={() => setCarouselIndex(index + 1)}></div>
        ))}
      </div>
    </article>
  )
}