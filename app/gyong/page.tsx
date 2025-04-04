"use client"

import Container from "react-bootstrap/Container"
import FlapNowtime from "@/lib/clocks/nowclock"
import FlapDiffClockTile from "@/lib/clocks/diffclocktile"
import { useState } from "react"

function YoonTimePage(){
    const [ntime,setNtime] = useState(new Date())
    setTimeout(()=>setNtime(new Date()),200)
    return (<>
    <Container style={{margin:0, padding:0}}>
    <FlapNowtime ntime={ntime}/>
    {/* <h4>흘러가는 시계</h4> */}
    </Container>
    <Container style={{margin:0, padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-03T22:27:00.000+09:00")}
    msgTop="12.3 비상계엄이 선포된 지" msgright="지났습니다." desc={"2024년 12월 03일 22시 27분 비상계엄 선포"}/>
    </Container>
    
    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-04-04T11:22:00.000+09:00")} otime={new Date("2024-12-14T17:03:00.000+09:00")}
    msgTop="윤석열 탄핵소추안이 가결된 지" msgright="지난 시점에서, 윤석열이 파면되었습니다." desc={"2024년 12월 14일 17시 03분 탄핵소추안 가결 후 국회 본회의 종료"}/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-04-04T11:22:00.000+09:00")} otime={new Date("2025-02-25T22:14:00.000+09:00")}
    msgTop="윤석열 탄핵심판의 헌법재판소 변론절차가 종료된 지" msgright="만에 심판이 종결되었습니다." desc={"2025년 02월 25일 22시 14분 윤석열 탄핵심판 최종변론 종료, 2025년 04월 04일 11시 22분 파면."}/>
    </Container> 

    {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={ntime} otime={new Date("2025-04-04T11:00:00.000+09:00")}
    msgTop="윤석열 탄핵심판의 선고기일이" msgright="남았습니다." up={false} desc={"2025년 04월 04일 11시 00분 윤석열 탄핵심판 선고기일"}/>
    </Container> */}

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={ntime} otime={new Date("2025-01-26T18:52:00.000+09:00")}
    msgTop="윤석열이 내란죄로 기소된 지" msgright="지났습니다." desc={"2025년 01월 26일 18시 52분 윤석열 내란죄 기소"}/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-01-15T10:33:00.000+09:00")} otime={new Date("2024-12-31T09:25:00.000+09:00")}
    msgTop="윤석열이 체포영장이 발부된 지" msgright="지나, 체포되었습니다." desc="2024년 12월 31일 09시 25분경 1차 체포영장 발부 확인, 2025년 1월 6일 1차 체포영장 만료. 2025년 1월 7일 2차 체포영장 발부, 2025년 1월 15일 10시 33분 체포"/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-03-08T17:48:00.000+09:00")} otime={new Date("2025-01-15T10:33:00.000+09:00")}
    msgTop="윤석열이 체포된 지" msgright="지나, 석방되었습니다." desc="2025년 1월 15일 10시 33분 체포, 2025년 03월 08일 17시 48분 석방"/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={ntime} otime={new Date("2025-03-08T17:48:00.000+09:00")}
    msgTop="윤석열이 석방된 지" msgright="지났습니다." desc={"2025년 03월 08일 17시 48분 석방"}/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={ntime} otime={new Date("2025-04-14T09:00:00.000+09:00")}
    msgTop="윤석열 내란죄 공판 시작이" msgright="남았습니다." up={false} desc={"2025년 4월 14일 예정"}/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-04-04T11:22:00.000+09:00")} otime={new Date("2027-05-09T23:59:59.999+09:00")}
    msgTop="윤석열의 20대 대통령 임기가" msgright="남은 시점에서, 파면되었습니다." up={false} desc={"2027년 5월 9일 임기만료, 그 이전 2025년 4월 4일 11시 22분 파면."}/>
    </Container>

    <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
    <FlapDiffClockTile ntime={new Date("2025-04-04T11:22:00.000+09:00")} otime={new Date("2022-05-10T00:00:00.000+09:00")}
    msgTop="윤석열의 20대 대통령 임기가" msgright="지난 시점에서, 파면되었습니다." up={true} desc={"2022년 5월 10일 임기시작, 2025년 4월 4일 11시 22분 파면."}/>
    </Container>

    </>);

}

export default YoonTimePage