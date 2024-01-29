import Notice from "@/models/notice";
import { connectMongoDB } from "@/utils/mongoDB";
import { NextResponse } from "next/server";

export async function GET () {
  try {
    await connectMongoDB();
    const getLatestNotice = await Notice.find({}).limit(5);
    console.log(getLatestNotice);

    return NextResponse.json({ code : 200, getLatestNotice })
  } catch (error) {
    console.log("api GET lastest Notices error : ", error);
  }
}