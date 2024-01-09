import Reserve from "./components/Reserve";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Page () {
  const session = await getServerSession(authOptions);
  // if(session) {
    const fecthReservation = await fetch('http://localhost:3000/api/reserve', {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
      },
      cache : 'no-store',
    });

    const res = await fecthReservation.json();
    const reservations = await res.reservations;
    return (
      <div className="h-basicHeight">
        <Reserve reservations={reservations}/>
      </div>
    )
  // }
}