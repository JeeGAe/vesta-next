'use client'

import { useState } from "react";
import Calendar from "./Calendar";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { useSession } from "next-auth/react";

const banquet = ["오리온", "피닉스", "아르고"];

export default function Reserve () {
  const { data : session } = useSession();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(0);
  const [selectBanquet, setSelectBanquet] = useState('');
  const [selectTime, setSelectTime] = useState('');

  const prevMonth = () => {
    setDate(0);
    setMonth(prev => prev <= 1 ? 11 : prev - 1);
    if(month <= 1){
      setYear(year - 1);
    }
  }

  const nextMonth = () => {
    setDate(0);
    setMonth(prev => prev >= 12 ? 1 : prev + 1);
    if(month >= 12){
      setYear(prev => prev + 1);
    }
  }

  const selectDate = (d:number) => {
    if(d > 0)
    setDate(d);
    setSelectTime('');
  }

  const handleSelectBanquet = (b:string) => {
    setSelectBanquet(b);
    setDate(0);
    setSelectTime('');
  }

  const handleSelectTime = (t:string) => {
    setSelectTime(t);
  }

  const handleSubmit = async () => {
    if(year && month && date && selectBanquet && selectTime && session){
      const fetchData = await fetch('http://localhost:3000/api/reserve', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        cache : 'no-store',
        body : JSON.stringify({
          date : new Date(year, month - 1, date, 0, 0, 0),
          banquet : selectBanquet,
          time : selectTime,
          _id : session?.user?._id
        })
      })
    }
  }

  return (
    <div className="h-full flex items-center justify-center gap-5">
      <div className="flex flex-col min-w-date gap-6 shrink-0">
        <div className="flex justify-around">
          {banquet.map((b) => (
            <button key={b} className={`bg-font-color py-1 px-2 rounded-md text-primary-color font-bold ${selectBanquet === b && 'bg-secondary-color'}`} onClick={() => handleSelectBanquet(b)}>{b}</button>
          ))}
        </div>
        <div className="chage-month flex justify-center h-8 gap-5">
          <button className="prev-month" onClick={prevMonth}><TiChevronLeft className="" size={32}/></button>
          <span className="text-2xl min-w-select-calendar text-center">{`${year} - ${month}`}</span>
          <button className="next-month" onClick={nextMonth}><TiChevronRight size={32}/></button>
        </div>
        <Calendar year={year} month={month} date={date} selectDate={selectDate}/>
      </div>
      {date > 0 &&
        <div className="w-40 shrink-0 flex flex-col gap-6">
          <div className="am-pm-container flex justify-around">
            <button className={`bg-possible py-1 px-2 rounded-md text-primary-color font-bold ${selectTime === 'am' && 'bg-secondary-color'}`} id="am-btn" onClick={() => handleSelectTime('am')}>오전</button>
            <button className={`bg-possible py-1 px-2 rounded-md text-primary-color font-bold ${selectTime === 'pm' && 'bg-secondary-color'}`} id="pm-btn" onClick={() => handleSelectTime('pm')}>오후</button>
          </div>
          <button className={`bg-font-color py-1 px-2 rounded-md text-primary-color font-bold ${'bg-secondary-color'}`} id="book-btn" onClick={handleSubmit}>예약하기</button>
          <div>
            <div className="possible-box w-3 h-3 bg-possible"></div><p>예약가능</p>
          </div>
          <div>
            <div className="impossible-box w-3 h-3 bg-impossible"></div><p>예약불가</p>
          </div>
        </div>
      }
    </div>
  )
}