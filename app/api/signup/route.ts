import { NextResponse } from "next/server";
import { connectMongoDB } from "@/utils/mongoDB";
import User from "@/models/user";

export async function POST (req : Request) {
  try {
    const data = await req.json();
    const { userId, userName, password, isAdmin } = data;

    const insertData = {
      userId, name : userName, password, isAdmin
    };

    await connectMongoDB();
    const userExists = await User.findOne({ userId });
    if(userExists){
      return NextResponse.json({ code : 401, msg : 'exist userId' })
    }
    const newUser = await User.create(insertData);

    return NextResponse.json({ code : 200, msg : 'success signUp' })
  } catch (error) {
    console.log('signup error : ', error);
    return NextResponse.json({ code : 401, msg : 'failed signUp' })
  }
}