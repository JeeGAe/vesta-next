import User from "@/models/user";
import { connectMongoDB } from "@/utils/mongoDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { authOptions } from "./options";

//export const authOptions : NextAuthOptions = {
//   providers : [
//     CredentialsProvider({
//       name : "credentials",
//       credentials : {},
//       async authorize(credentials:Record<any,string>|undefined) {
//         if(credentials){
//           const { userId, password } = credentials;
//           try {
//             await connectMongoDB();
//             const findUser = User.findOne({ userId, password });
//             if(!findUser){
//               return null;
//             }
//             return findUser;
//           } catch (error) {
//             console.log("Credential provider error : ",error);
//             return null;
//           }
//         }
//         return null;
//       },
//     })
//   ],
//   session : {
//     strategy : 'jwt'
//   },
//   callbacks : {
//     async jwt({ token, user } : { token: JWT; user?: any }) : Promise<JWT> {
//       if(token && user){
//         token._id = user._id;
//         token.name = user.name;
//         token.userId = user.userId;
//         token.isAdmin = user.isAdmin;
//       }
//       return token;
//     },
//     async session({session, token} : { session : Session | any; token?: JWT }) : Promise<Session> {
//       const user = {
//         _id : token?._id || '',
//         name : token?.name || '',
//         userId : token?.userId || '',
//         isAdmin : token?.isAdmin || false,
//       }
//       session.user = user;
//       return Promise.resolve(session);
//     }
//   },
//   secret : process.env.JWT_SECRET,
//   // pages : {
//   //   signIn : "/signin"
//   // }
// }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };