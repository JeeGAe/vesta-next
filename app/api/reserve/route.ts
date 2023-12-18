import Resevation from "@/models/reservation";
import { connectMongoDB } from "@/utils/mongoDB";
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function POST (req : NextRequest) {
  try {
    const data = await req.json();
    await connectMongoDB();
    const existsResevation = await Resevation.findOne({ date : data.date, time : data.time, banquet : data.banquet });
    if(!existsResevation){
      const newReserve = await Resevation.create({
        date : data.date,
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