export function reservationToMonth (am:any, pm:any) {
  let amReservation = Array(12).fill(0);
  am.forEach((a:any) => {
    const month = new Date(a.date).getMonth();
    amReservation[month]++;
  });
  let pmReservation = Array(12).fill(0);
  pm.forEach((p:any) => {
    const month = new Date(p.date).getMonth();
    pmReservation[month]++;
  });

  return [
    {
      label : '오전',
      data : amReservation,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label : '오후',
      data : pmReservation,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ]
}