'use client'
import { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const contents = [
  {
    title : "FOOD",
    description : "신선하고 다양한 재료를 사용한 요리들이 즐비해있고 다양한 음료와 와인들이 준비되어있습니다.",
    src1 : "http://www.vestabuffet.com/sub3/img/menu1_1.jpg",
    src2 : "http://www.vestabuffet.com/sub3/img/menu7_5.jpg",
  },
  {
    title : "BUFFET",
    description : "오픈 키친 형태로 설계 되어 200여종 계절별 요리와 한식 중식 일식 이태리식 메뉴를 코스별로 맛볼 수 있습니다.",
    src1 : "http://www.vestabuffet.com/sub2/img/gallery1/gall1.jpg",
    src2 : "http://www.vestabuffet.com/sub2/img/gallery1/gall7.jpg",
  },
  {
    title : "BANQUET",
    description : "다양한 연회룸이 있어 행사에 맞는 연회룸을 선택하여 근사한 추억을 보내실 수 있습니다.",
    src1 : "http://www.vestabuffet.com/sub2/img/room1/5gall4.jpg",
    src2 : "http://www.vestabuffet.com/sub2/img/room1/7gall1.jpg",
  },
];

export default function ScrollEvent () { 
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const scrollBottom = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

      console.log(window.scrollY, document.documentElement.clientHeight, scrollHeight)
      if(window.scrollY + document.documentElement.clientHeight > scrollHeight - 10){
        setScrollIndex(prev => prev + 1);
      }
    }

    window.addEventListener('scroll', scrollBottom);

    return () => {
      window.removeEventListener('scroll', scrollBottom);
    }
  }, []);

  return (
    <>
    {contents?.length > scrollIndex &&
    <aside>
      <div className="scroll-notice-container flex fixed bottom-0 right-2/4 translate-x-2/4 h-9 bg-dropmenu-color text-white rounded-t-lg items-center pr-1.5">
        
        <MdKeyboardDoubleArrowDown className='animate-arrowDown'/>
        <p>
          아래로 내려 베스타를 살펴보세요!  
        </p>
      </div>
    </aside>
    }
    <div className="scroll-contents-container w-full">
      {contents.map((c, index) => (
        scrollIndex > index && (index % 2 === 0 ?
        <div className="scroll-content w-full flex gap-6 mb-20 animate-scrollEventRight justify-center">
          <div className="scroll-img-container scroll-move-down flex flex-col items-end gap-3 w-7/12">
            <img className='rounded-xl w-4/5' src={c.src1} alt=""/>
            <img className='rounded-xl w-3/5' src={c.src2} alt=""/>
          </div>
          <div className="scroll-comments-container scroll-move-left w-3/12">
            <h3 className='text-7xl text-secondary-color'>{c.title}</h3>
            <p className='text-5xl'>{c.description}</p>
          </div>
        </div>
        :
        <div className="scroll-content w-full flex gap-6 mb-20 animate-scrollEventRight justify-center">
          <div className="scroll-comments-container scroll-move-left w-3/12">
            <h3 className='text-7xl text-secondary-color'>{c.title}</h3>
            <p className='text-5xl'>{c.description}</p>
          </div>
          <div className="scroll-img-container scroll-move-down flex flex-col items-start gap-3 w-7/12">
            <img className='rounded-xl w-3/5' src={c.src1} alt=""/>
            <img className='rounded-xl w-4/5' src={c.src2} alt=""/>
          </div>
        </div>)
      ))}
    </div>
    </>
  )
}