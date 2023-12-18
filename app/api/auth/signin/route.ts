// Next-Auth를 사용하므로 필요 없어짐
// import { NextResponse } from "next/server";
// // import { connectDB } from "@/utils/mongoDB";
// import { generateToken } from '@/utils/jwt';

// export async function POST (req : Request) {
//   const userData = await req.json();

  // const db = (await connectDB).db("vesta-next");
  // const findUser = await db.collection("user").findOne({
  //   userId : userData.userId,
  //   password : userData.password,
  // });

  // if(findUser){
  //   const token = generateToken(findUser);
  //   if(token){
      // const response = NextResponse.json({ code : 200, msg : 'success signIn!' });
      // response.cookies.set('accessToken',token,{
      //   httpOnly : true,
      //   sameSite : 'lax',
      //   secure : true,
      // });
      // return response;
      // NextResponse.next().cookies.set('accessToken', token, {
      //   httpOnly : true,
      //   sameSite : 'lax',
      //   secure : true,
      // })

//       return NextResponse.json({ code : 200, msg : 'success signIn!' });
//     }
//     return NextResponse.json({ code : 401, msg : 'failed signIn!(undefined token)' });
//   }

//   return NextResponse.json({ code : 401, msg : 'failed signIn!' });
// }