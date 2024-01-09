'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const imgs = [
  { src : "http://www.vestabuffet.com/main/1.jpg"},
  { src : "http://www.vestabuffet.com/main/2.jpg"},
  { src : "http://www.vestabuffet.com/main/3.jpg"},
  { src : "http://www.vestabuffet.com/main/4.jpg"},
  { src : "http://www.vestabuffet.com/main/5.jpg"},
]

export default function MainCarousel () {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const mainCarouselRef = useRef<null | HTMLDivElement>(null);
  const imgsLength = imgs?.length;

  useEffect(() => {
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
    <section className='min-h-main-carousel-height'>
      {/* 캐러셀 영역 */}
      <article className="main-carousel-container w-full flex overflow-hidden h-full" ref={mainCarouselRef}>
        {imgs.map((img) => (
           <div key={img.src} className="img-container w-full shrink-0 h-full" >
            <Image src={img.src} alt='main-crousel-img' width={500} height={500} fill/>
            {/* <img className="w-full min-h-main-carousel-height" src={img.src} alt=""/> */}
           </div>
        ))}
      </article>
      {/* 인디케이터 영역 */}
      <div className="main-indicator-container indicator flex mt-2 justify-center gap-2.5">
        {imgs.map((_, index) => (
          <div key={index} className={`main-indicator cursor-pointer rounded-full bg-black w-2 h-2 ${carouselIndex === index + 1 && 'bg-primary-color'}`} onClick={() => setCarouselIndex(index + 1)}></div>
        ))}
      </div>
    </section>
  )
}