"use client"
import Container from "react-bootstrap/Container";
import { useState } from "react";
import FlapNowtime from "@/lib/clocks/nowclock";
import FlapDiffClockTile from "@/lib/clocks/diffclocktile";

export default function Home() {
  const [ntime, setNtime] = useState(new Date())
  setTimeout(()=>setNtime(new Date()),200);
  return (
      <>
      <Container style={{margin:0, padding:0}}>
      <FlapNowtime ntime={ntime}/>
      </Container>

      <Container style={{margin:0, padding:0}}>
      {/* <Container style={{margin:0, padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-03T22:27:00.000+09:00")}
      msgTop="12.3 비상계엄이 선포된 지" msgright="지났습니다."/>
      </Container> */}

      <Container style={{margin:0, padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={new Date("2025-04-04T11:22:00.000+09:00")} otime={new Date("2024-12-03T22:27:00.000+09:00")}
      msgTop="12.3 비상계엄이 선포된 지" msgright="지나, 윤석열이 파면되었습니다." desc={"다만, 아직 12.3 비상계엄 및 내란사태에 대해 남은 사항이 있습니다."}/>
      </Container>
      
      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-14T17:03:00.000+09:00")}
      msgTop="윤석열 탄핵소추안이 가결된 지" msgright="지났습니다."/>
      </Container> */}

      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-02-25T22:14:00.000+09:00")}
      msgTop="윤석열 탄핵심판의 헌법재판소 변론절차가 종료된 지" msgright="지났습니다."/>
      </Container> */}

      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-04-18T23:59:59.999+09:00")}
      msgTop="문형배, 이미선 헌법재판소 재판관의 임기가" msgright="남았습니다." up={false}/>
      </Container> */}

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-02-13T05:00:00.000+09:00")}
      msgTop="고진수 서비스연맹 관광레저산업노조 세종호텔지부장이 세종호텔 앞 지하차도 안내 구조물에서 고공농성을 한 지" msgright="지났습니다."/>
      </Container>

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-03-14T04:00:00.000+09:00")}
      msgTop="김형수 금속노조 거통고지회장이 한화빌딩 앞 사다리없는 철탑에서 고공농성을 한 지" msgright="지났습니다."/>
      </Container>

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-01-08T03:10:00.000+09:00")}
      msgTop="박정혜 금속노조 한국옵티칼하이테크지회 수석부지회장이  니토덴코 산하 한국옵티칼하이테크 구미공장에서 고공농성을 한 지" msgright="지났습니다." desc="소현숙 조직부장은 건강악화로 2025년 4월 27일 오전 5시 30분, 고공농성 476일차에 고공농성을 중단했습니다."/>
      </Container>

      </Container>
      {/* <h4>멈춘 시계</h4>
        멈춘 시계가 없습니다. */}
      </>
      
  );
}
