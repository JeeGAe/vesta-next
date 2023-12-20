'use client'

import { useState } from "react";
import MonthChart from "./MonthChart";
import YearChart from "./YearChart";
import BanquetChart from "./BanquetChart";

export default function Dashboard () {
  const [selectChart, setSelectChart] = useState<"year-chart"|"month-chart"|"banquet-chart">("month-chart");
  const selectChartHandler = (e:any) => {
    let { id } = e.target;
    if(id !== "year-chart" && id !== "month-chart" && id !== "banquet-chart"){
      id = "month-chart";
    }
    setSelectChart(id);
  }
  return (
    <div className="h-full">
      <div className="flex justify-between py-2">
        <h1 className="pl-10">DashBoard</h1>
        <div className="pr-12 flex gap-2">
          <button className={`px-5 py-2 rounded-md ${selectChart !== "year-chart" ? 'bg-indigo-300' : 'bg-indigo-500'}`} onClick={selectChartHandler} id="year-chart">연도</button>
          <button className={`px-5 py-2 rounded-md ${selectChart !== "month-chart" ? 'bg-indigo-300' : 'bg-indigo-500'}`} onClick={selectChartHandler} id="month-chart">월</button>
          <button className={`px-5 py-2 rounded-md ${selectChart !== "banquet-chart" ? 'bg-indigo-300' : 'bg-indigo-500'}`} onClick={selectChartHandler} id="banquet-chart">연회장</button>
        </div>
      </div>
      {selectChart === "year-chart" && 
        <YearChart />
      }
      {selectChart === "month-chart" &&
        <MonthChart />
      }
      {selectChart === "banquet-chart" &&
        <BanquetChart />
      }
    </div>
  )
}