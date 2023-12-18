import { connectMongoDB, increseNoticeCounter } from "@/utils/mongoDB";
import Notice from "@/models/notice";
import mongoose from 'mongoose';
import { NextResponse } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function POST (req : Request) {
  try {
    const data = await req.json();
    await connectMongoDB();
    const currentCount = await increseNoticeCounter();
    const newNotice = {
      index : currentCount,
      title : data.title,
      description : data.description,
      author : new ObjectId(data._id)
    }
    const insertNotice = await Notice.create(newNotice);

    return NextResponse.json({ code : 200, msg : "success new notice!", index : insertNotice.index })
  } catch (error) {
    console.log("new notice error : ", error);
    return NextResponse.json({ code : 500, msg : "Falied new notice"})
  }
}

export async function GET (req : Request) {
  try {
    console.log('올때마다 하나?');
    await connectMongoDB();
    const getNotice = await Notice.find({}).sort({index: -1});

    return NextResponse.json({ code : 200, getNotice });
  } catch (error) {
    console.log("get notice error : ", error);
    return NextResponse.json({ code : 500, msg : "get notice error" });
  }
}