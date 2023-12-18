// Next-Auth를 사용하므로 필요 없어짐
// import { isAuth } from "@/utils/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export function GET(req : NextRequest) {
//   const token = req.cookies.get('accessToken')?.value;
//   console.log('token : ',token);

//   if(!token || '') {
//     return NextResponse.json({ ok : false, msg : 'Invalid Token' });
//   }
//   const isLogin = isAuth(token);
//   if(isLogin){
//     return NextResponse.json({ ok: true });
//   }
//   return NextResponse.json({ ok : false, msg : 'Invalid Token' });
// }