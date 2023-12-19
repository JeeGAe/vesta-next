export default function Calendar (props : any) {
  const { year, month, reservations, selectBanquet } = props;
  const firstDay = new Date(year,month - 1,1).getDay(); // 1일의 요일을 저장(일요일은 0 ~ 토요일은 6 입니다.)
        // console.log(firstDay)
        const dateArray:number[] = []; // 달력의 일 을 담을 배열 생성
        let nextMonth = 0; // 배열에 일 을 푸쉬 할때 다음달 인지 확인 해주는 변수 (Date의 getDate 메소드는 달에 마지막 날을 넘어가면 다시 1이 됩니다 31일 까지인 달에 Date()에 32일을 넣으면 getDate 메소드는 1을 리턴 해줍니다.)
        let day = 1; // 배열에 담을 변수 입니다 1일의 1로 초기화 해줍니다.
        for(let i = 0; i < firstDay; i++){ // 일요일을 달에 첫날로 기준 삼아 1일의 요일까지는 -1로 배열을 채워줍니다. 나중에 달력에 빈 칸을 만들어주기 위함입니다.
            dateArray.push(-1)
        }
        while(nextMonth < 2){ // nextMonth는 getDate()값이 1일 때 증가하는데 1일에 한번 증가하고 이번 달 마지막날이 지나면 다시 getDate() 리턴 값이 1일 때 한번더 1증가하여 2가 되면 반목문이 끝납니다. 
            
            if(new Date(year,month - 1,day).getDate() === 1) nextMonth++; // getDate() 리턴 값이 1일 때 nextMonth 값 증가 (1일과 달의 마지막 날이 지난 후 2번 증가)
            // console.log(day)
            // console.log(new Date(2023,8,day).getDate())
            // console.log(nextMonth)
            if(nextMonth < 2) dateArray.push(day); // 이번달이 라는게 맞을때 day값을 푸쉬해줍니다.
            day++; // day값을 1 증가시켜 다음 반복때 다음 날을 푸쉬해줍니다.
        }
        // console.log(dateArray)
        const weekCount = dateArray.length%7 !== 0 ? Math.floor(dateArray.length / 7) + 1 : dateArray.length / 7; // 해당 달이 주가 몇주까지 있는지 계산 후 변수에 넣습니다.
        const weekCountArray = new Array(weekCount).fill(1).map((_, i) => i); // map을 사용하기 위해 주의 수 만큼 배열을 넣어줍니다.

        return (
            <table className="min-h-calendar">
                <thead>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                </thead>
                <tbody>
                    {weekCountArray.map((_, id) => {
                        const innerDate = [];
                        for(let i = 0; i < 7; i++){ // 1주일 씩 잘라서 새로운 배열에 담아줍니다.
                            innerDate.push(dateArray[i+(7*id)])
                        }
                        return (
                            <tr key={id}>{innerDate.map((d, index) => {
                                const stringifyDate = `${year}-${month < 10 ? `0${month}` : month}-${d < 10 ? `0${d}` : d}T00:00:00.000Z`
                                const filterReserved = reservations?.filter((r:any) => (r.date === stringifyDate && r.banquet === selectBanquet));
                                const numOfReserved = filterReserved?.length;
                                return (
                                    <td key={index} className={`min-h-date min-w-date h-date text-center cursor-pointer ${props.date === d && 'bg-primary-color'} ${numOfReserved === 1 && 'bg-orange-500'} ${numOfReserved === 2 && 'bg-impossible'}`} onClick={() => props.selectDate(d, filterReserved)}>{d === -1? '' : d}</td> // 1주일 씩 자른 배열을 td 태그에 하나씩 일 수를 채워 넣어줍니다.
                                )
                            })}</tr>
                        )
                    })}
                </tbody>
            </table>
        )
}