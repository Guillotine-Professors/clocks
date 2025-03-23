"use client"
// import Image from "next/image";
import Link from "next/link";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import { useState } from "react";
import FlapNowtime from "@/lib/clocks/nowclock";
import FlapDiffClockTile from "@/lib/clocks/diffclocktile";

export default function Home() {
  const [ntime, setNtime] = useState(new Date())
  setTimeout(()=>setNtime(new Date()),300);
  return (<Col style={{display: "flex",
    flexDirection: "row", flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"}}>
    <Col xxs={12} xs={12} sm={11} md={10} lg={8} xl={7} xxl={6}>
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
      <FlapDiffClockTile ntime={ntime} otime={new Date("2024-01-08T00:00:00.000+09:00")}
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
      <Container>
      <footer className="items-center justify-center">
        <div className="items-center justify-center" style={{width:100+"%"}}>투쟁시계 / 단두대학교 교수회 제공</div>
        <div className="items-center justify-center" style={{width:100+"%"}}>
        제작 : <Link target="_blank" href="https://x.com/isaack___">twitter:isaack___(토스트아재)</Link>, <Link target="_blank"href="https://x.com/guillotine_prof">twitter:guillotine_prof(단두대학교 교수회)</Link>
        </div>
        <div>사업장 투쟁의 경우, 해당 사업장의 지속 투쟁 기록 중 가장 마지막 것만 표시하였습니다. 추가하실 것이 있으신 분은, guillotine.univ@protonmail.ch 로 연락주십시오. </div>
      </footer>
      </Container>
    </Col>
    </Col>
  );
}
