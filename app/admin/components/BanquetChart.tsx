'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";


ChartJS.register(ArcElement, Tooltip, Legend);

export default function BanquetChart () {
  const labels = ["오리온", "피닉스", "아르고"];
  const [ChartData, setChartData] = useState<any[]>([]);
  const [selectYear, setSelctYear] = useState<number>(new Date().getFullYear());
  const [selectMonth, setSelectMonth] = useState<number>(new Date().getMonth() + 1);

  const getChart = async (year:number, month:number) => {
    console.log(year, month)
    const chartFetch = await fetch(`http://localhost:3000/api/admin/banquet-reservation?year=${year}&month=${month}`, {
      method : "GET",
      headers : {
        'Content-Type' : 'application/json',
      },
      cache : 'no-store',
    });
    const data = await chartFetch.json();
    console.log(data.data)
    if(data.code === 200){
      setChartData(data.data);
    }
  }


  const prevMonth = () => {
    let month = selectMonth;
    let year = selectYear;
    if(selectMonth <= 1){
      month = 12;
      year = year - 1; 
    } else {
      month = month - 1;
    }
    setSelectMonth(month);
    setSelctYear(year);
    getChart(year, month);
  }

  const nextMonth = () => {
    let month = selectMonth;
    let year = selectYear;
    if(selectMonth >= 12){
      month = 1;
      year = year + 1; 
    } else {
      month = month + 1;
    }
    setSelectMonth(month);
    setSelctYear(year);
    getChart(year, month);
  }

  useEffect(() => {
    const initChart = async () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const fetchData = await fetch(`http://localhost:3000/api/admin/banquet-reservation?year=${year}&month=${month}`, {
        method : 'GET',
        headers : {
          'Content-Type' : 'application/json',
        },
        cache : 'no-store',
      });

      const data = await fetchData.json();
      setChartData(data.data);
    }
    initChart();
  }, []);

  if(ChartData?.length !== 0){
    return (
      <div className='w-full h-4/5'>
        <div className="chage-month flex justify-center h-8 gap-5">
          <button className="prev-month" onClick={prevMonth}><TiChevronLeft className="" size={20}/></button>
          <span className="text-2xl min-w-select-calendar text-center">{`${selectYear}-${selectMonth}`}</span>
          <button className="next-month" onClick={nextMonth}><TiChevronRight size={20}/></button>
        </div>
        <Pie data={{
          labels : labels,
          datasets : ChartData,
        }} 
        options={{ maintainAspectRatio: false }}/>
      </div>
    )
  }

  return (
    <>
      기다려주세요
    </>
  )
} 