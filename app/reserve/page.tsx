import Reserve from "./components/Reserve";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { connectMongoDB } from "@/utils/mongoDB";
import Resevation from "@/models/reservation";

const getReservation = async () => {
  try {
    const fecthReservation = await fetch('https://vesta-next.vercel.app/api/reserve', {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
      },
      cache : 'no-store',
    });

    const res = await fecthReservation.json();
    const reservations = await res.reservations;
    console.log("예약리스트",reservations)
    return reservations;
  } catch (error) {
    console.log("get reservation error : ", error);
  }
  
}

export default async function Page () {
  const session = await getServerSession(authOptions);
  if(!session) redirect('/');

  const reservations = await getReservation();
  console.log(reservations)

  return (
    <div className="h-basicHeight">
      <Reserve reservations={reservations}/>
    </div>
  )
    
}

export const dynamic = 'force-dynamic'