'use client'
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";


export default function MonthChart () {
  const [chartData, setChartData] = useState<any>([]);
  const [selectYear, setSelectYear] = useState<number>(new Date().getFullYear());

  const getChart = async (year:number) => {
    console.log(year)
    const chartFetch = await fetch(`http://localhost:3000/api/admin/month-reservation?year=${year}`, {
      method : "GET",
      headers : {
        'Content-Type' : 'application/json',
      },
      cache : 'no-store',
    });
    const data = await chartFetch.json();
    console.log(data.data)
    setChartData(data.data);
  }

  const prevMonth = () => {
    setSelectYear(prev => prev - 1)
    getChart(selectYear - 1);
  }

  const nextMonth = () => {
    setSelectYear(prev => prev + 1)
    getChart(selectYear + 1);
  }


  const labels = Array(12).fill('').map((_, index) => `${index + 1}월`);

  useEffect(() => {
    const initChart = async () => {
      const year = new Date().getFullYear();
      const chartFetch = await fetch(`http://localhost:3000/api/admin/month-reservation?year=${year}`, {
        method : "GET",
        headers : {
          'Content-Type' : 'application/json',
        },
        cache : 'no-store',
      });
      const data = await chartFetch.json();
      console.log(data.data)
      setChartData(data.data);
    }
    initChart();
  },[])

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '월별 예약 수',
      },
    },
  };

  if(chartData?.length !== 0){
    return(
      <div className='h-full'>
        <div className="chage-month flex justify-center h-8 gap-5">
          <button className="prev-month" onClick={prevMonth}><TiChevronLeft className="" size={20}/></button>
          <span className="text-2xl min-w-select-calendar text-center">{`${selectYear}년`}</span>
          <button className="next-month" onClick={nextMonth}><TiChevronRight size={20}/></button>
        </div>
        <div className='h-4/5 flex justify-center'>
          <Line options={options} data={{
          labels : labels,
          datasets : chartData}}/>
        </div>
      </div>
      
    )
  }

  return (
    <>기다려주세요</>
  )
}