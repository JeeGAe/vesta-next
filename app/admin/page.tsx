import Dashboard from "./components/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";


export default async function Page () {
  const session:any = await getServerSession<any>(authOptions);
  console.log("s : ",session)
  if(!session && !session?.user?.isAdmin) redirect('/');
  return (
    <div className="h-basicHeight">
      <Dashboard />
    </div>
  )
}