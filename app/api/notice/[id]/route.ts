import { connectMongoDB } from "@/utils/mongoDB";
import Notice from "@/models/notice";
import mongoose from 'mongoose';
import { NextResponse, NextRequest } from "next/server";
const { Types : { ObjectId } } = mongoose;

export async function GET (req : NextRequest, { params }: { params: { id: string } }) {
  try {
    const index = params.id;
    await connectMongoDB();
    const getNotice = await Notice.findOne({ index : index }).populate('author','name');
    getNotice.views++;
    await getNotice.save();
    return NextResponse.json({ code : 200, getNotice });
  } catch (error) {
    console.log("get notice error : ", error);
    return NextResponse.json({ code : 500, msg : "get notice error" });
  }
}

export const dynamic = 'force-dynamic'