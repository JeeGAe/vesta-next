// Next-Auth를 사용하므로 필요 없음
// import jwt from 'jsonwebtoken';

// export async function generateToken(user : any){
//   const JWT_SECRET = process.env.JWT_SECRET;

//   if(JWT_SECRET){
//     return jwt.sign({
//       id : user.userId,
//       name : user.name,
//       isAdmin : user.isAdmin,
//     },
//     JWT_SECRET,
//     {
//       expiresIn : '1h',
//       issuer : 'vesta-next'
//     });
//   }

//   return false;
// }

// export function isAuth(token : string) {
//   if(!token){
//     return false;
//   } else {
//     try {
//       const JWT_SECRET = process.env.JWT_SECRET;
//       if(!JWT_SECRET){
//         return false;
//       }
//       const decode = jwt.verify(token, JWT_SECRET);
//       console.log(decode);
//       return decode;
//     } catch (error) {
//       console.log("isAuth error : ", error)
//       return false;
//     }
//   }
// }
