import Resevation from "@/models/reservation";
import { connectMongoDB } from "@/utils/mongoDB";
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function GET (req : NextRequest) {
  try {
    const year = req.nextUrl.searchParams.get('year');
    const month = req.nextUrl.searchParams.get('month');
    if(year && month){
      let intYear = parseInt(year);
      let intMonth = parseInt(month);
      console.log(intYear, intMonth)
      

      const reviseTime = 118799000; // new Date에 문자열이 아닌 숫자로 인자를 넣었을 때 시간이 다르게 나와 보정
      const gteString = intMonth < 10 ? `${year}-0${month}-01T00:00:00Z` : `${year}-${month}-01T00:00:00Z`;
      if(intMonth === 12){
        intYear += 1;
        intMonth = 0 
      }
      console.log(gteString)
      const gte = new Date(gteString);
      const lte = new Date((new Date(intYear,intMonth,0)).getTime() + reviseTime);

      console.log(gte, lte)

      const banquets = ["오리온", "피닉스", "아르고"];
      let reservations = Array(banquets.length).fill(0);

      connectMongoDB();
      
      for (let i = 0; i < banquets.length; i++){
        const findReservations = await Resevation.find({ banquet : banquets[i] , date : { $gte : gte, $lte : lte }});
        reservations[i] = findReservations.length;
      }

      const data = [
        {
          label : "예약 수",
          data : reservations,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }
      ]

      return NextResponse.json({ code : 200,  data });
    }
    return NextResponse.json({ code : 401, msg : "get banquet-reservation error"});
  } catch (error) {
    console.log("get banquet-reservation error : ", error);
    return NextResponse.json({ code : 401, msg : "get banquet-reservation error"});
  }
  
}
export const dynamic = 'force-dynamic'