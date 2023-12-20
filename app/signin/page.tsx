import SigninForm from "./components/SigninForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Page () {
  const session = await getServerSession(authOptions);
  if(session) redirect('/');
  return (
    <SigninForm />
  )
} 