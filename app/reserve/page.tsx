import Reserve from "./components/Reserve";

export default async function Page () {
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
}