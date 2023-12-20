import Resevation from "@/models/reservation";
import { connectMongoDB } from "@/utils/mongoDB";
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;
import { reservationToMonth } from "@/utils/chartData";


export async function GET (req : NextRequest) {
  try {
    const year = req.nextUrl.searchParams.get('year');

    await connectMongoDB();
    
    const amReservations = await Resevation.find({ time : "am", date : { $gte : new Date(`${year}-01-01T00:00:00Z`), $lte : new Date(`${year}-12-31T23:59:59`)} });
    const pmReservations = await Resevation.find({ time : "pm", date : { $gte : new Date(`${year}-01-01T00:00:00`), $lte : new Date(`${year}-12-31T23:59:59`)} });

    const data = reservationToMonth(amReservations, pmReservations);

    return NextResponse.json({ code : 200, data })
  } catch (error) {
    console.log("get month-reservation error : ", error);
    return NextResponse.json({ code : 401, msg : "get month-reservation error"});
  }
  
}