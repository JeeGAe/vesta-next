import Resevation from "@/models/reservation";
import { connectMongoDB } from "@/utils/mongoDB";
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function GET () {
  await connectMongoDB();
  let yearReservations = [];
  const DISPLAY_NUM = 5;
  const currentYear = new Date().getFullYear();
  for(let i = 1; i <= DISPLAY_NUM; i++){
    const searchYear = currentYear - (DISPLAY_NUM - 1 - i);
    console.log(searchYear)
    const reservations = await Resevation.find({ date : { $gte : new Date(`${searchYear}-01-01T00:00:00Z`), $lte : new Date(`${searchYear}-12-31T23:59:59Z`) }});
    yearReservations[i - 1] = reservations?.length;
  }

  const data = [{
    label : "예약 수",
    data : yearReservations,
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }];
  return NextResponse.json({ data });
}