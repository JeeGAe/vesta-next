import SignupForm from "./components/SignupForm"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/options";

export default async function Page () {
  const session = await getServerSession(authOptions);
  if(session) redirect('/');
  return (
    <SignupForm />
  )
}