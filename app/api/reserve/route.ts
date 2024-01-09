import Resevation from "@/models/reservation";
import { connectMongoDB } from "@/utils/mongoDB";
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function POST (req : NextRequest) {
  try {
    const data = await req.json();
    const adjustDate = new Date((new Date(data.date).getTime() + 32400000)); // 9시간 시간차이가 나서 조정
    await connectMongoDB();
    const existsResevation = await Resevation.findOne({ date : data.date, time : data.time, banquet : data.banquet });
    if(!existsResevation){
      const newReserve = await Resevation.create({
        date : adjustDate,
        time : data.time,
        banquet : data.banquet,
        userId : new ObjectId(data._id)
      });
      return NextResponse.json({ code : 200, msg : "success reserve!"});
    }

  } catch (error) {
    console.log("reserve error : ", error);
    return NextResponse.json({ code : 500, msg : "reserve error!"});
  }
}

export async function GET(req : NextRequest) {
  try {
    console.log('get입니다!')
    await connectMongoDB();
    const reservations = await Resevation.find({});
    return NextResponse.json({ code : 200, msg : "success get reservation!", reservations });
  } catch (error) {
    console.log("Get reservation error : ", error);
    return NextResponse.json({ code : 500, msg : "Get reservation error!"});
  }
}

export const dynamic = 'force-dynamic'