'use client'

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
  return (
    <div className="scroll-contents-container">
      {contents.map((c, index) => (
        <div className="scroll-content ">
          <div className="scroll-img-container scroll-move-down">
            <img src={c.src1} alt=""/>
            <img src={c.src2} alt=""/>
          </div>
          <div className="scroll-comments-container scroll-move-left">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}