"use client"
import Container from "react-bootstrap/Container";
import { useState } from "react";
import FlapNowtime from "@/lib/clocks/nowclock";
import FlapDiffClockTile from "@/lib/clocks/diffclocktile";

export default function Home() {
  const [ntime, setNtime] = useState(new Date())
  setTimeout(()=>setNtime(new Date()),200);
  return (
      <Container style={{margin:0, padding:0}}>
      <Container style={{margin:0, padding:0}}>
      <FlapNowtime ntime={ntime}/>
      {/* <h4>흘러가는 시계</h4> */}
      </Container>
      <Container style={{margin:0, padding:0}}>

      <Container style={{margin:0, padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-03T22:27:00.000+09:00")}
      msgTop="12.3 비상계엄이 선포된 지" msgright="지났습니다."/>
      </Container>
      
      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-14T17:03:00.000+09:00")}
      msgTop="윤석열 탄핵소추안이 가결된 지" msgright="지났습니다."/>
      </Container>

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-02-25T22:14:00.000+09:00")}
      msgTop="윤석열 탄핵심판의 헌법재판소 변론절차가 종료된 지" msgright="지났습니다."/>
      </Container>

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-02-13T05:00:00.000+09:00")}
      msgTop="고진수 서비스연맹 관광레저산업노조 세종호텔지부장이 세종호텔 앞 지하차도 안내 구조물에서 고공농성을 한 지" msgright="지났습니다."/>
      </Container>

      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-12-14T17:03:00.000+09:00")}
      msgTop="세종호텔 농성장" msgright="지났습니다."/>
      </Container> */}

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-03-14T04:00:00.000+09:00")}
      msgTop="김형수 금속노조 거통고지회장이 한화빌딩 앞 사다리없는 철탑에서 고공농성을 한 지" msgright="지났습니다."/>
      </Container>

      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2025-01-06T00:00:00.000+09:00")}
      msgTop="한화오션 상경투쟁" msgright="지났습니다."/>
      </Container> */}

      <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-01-08T03:10:00.000+09:00")}
      msgTop="한국옵티칼하이테크의 박정혜, 소현숙씨가 구미공장에서 고공농성을 한 지" msgright="지났습니다."/>
      </Container>

      {/* <Container style={{margin:0, marginTop:1+"em", padding:0, borderWidth:0.5+'pt', border:'solid', borderRadius:1+'em'}}>
      <FlapDiffClockTile ntime={ntime} otime={new Date("2022-11-04T00:00:00.000+09:00")}
      msgTop="한국옵티칼 정리해고" msgright="지났습니다."/>
      </Container> */}

      </Container>
      {/* <h4>멈춘 시계</h4>
      멈춘 시계가 없습니다. */}
      </Container>
  );
}
