'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function YearChart () {
  const DISPLAY_NUM = 5;
  
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const initChart = async () => {
      const fetchData = await fetch('http://localhost:3000/api/admin/year-reservation', {
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

  const labels = Array(DISPLAY_NUM).fill('').map((_, index) => `${(new Date().getFullYear()) - (DISPLAY_NUM - index - 2)}`);
  console.log(chartData)

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '연별 예약 수',
      },
    },
  };

  if(chartData.length !== 0){
    return (
      <div className='h-4/5 flex justify-center'>
        <Bar options={options} data={{
          labels : labels,
          datasets : chartData,
        }}/>
      </div>
    )
  }

  return (
    <>기다려주세요</>
  )
}