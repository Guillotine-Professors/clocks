import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultNavBar from "@/lib/navbar";
import { GoogleAnalytics } from '@next/third-parties/google'
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Link from "next/link"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사업장 투쟁시계",
  description: "투쟁과 관련 시간 정보를 제공합니다.",
  twitter: {
    title: "투쟁 시계",
    description: "투쟁과 관련 시간 정보를 제공합니다.",
    creator: "@guillotine_prof",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefaultNavBar/>
        <Col style={{display: "flex",
    flexDirection: "row", flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"}}>
    <Col xxs={12} xs={12} sm={11} md={10} lg={8} xl={7} xxl={6}>
      {children}
    
    <Container>
      <footer className="items-center justify-center">
        <div className="items-center justify-center" style={{width:100+"%"}}>투쟁시계 / 단두대학교 교수회 제공</div>
        <div className="items-center justify-center" style={{width:100+"%"}}>
        제작 : <Link target="_blank" href="https://x.com/isaack___">twitter:isaack___(토스트아재)</Link>, <Link target="_blank"href="https://x.com/guillotine_prof">twitter:guillotine_prof(단두대학교 교수회)</Link>
        </div>
        <div>사업장 투쟁의 경우, 해당 사업장의 지속 투쟁 기록 중 가장 마지막 것만 표시하였습니다. 추가하실 것이 있으신 분은, guillotine.univ@protonmail.ch 로 연락주십시오. </div>
      </footer>
      </Container>
      </Col></Col>
      </body>
      <GoogleAnalytics gaId="G-CZ51ZB9V9J" />
    </html>
  );
}
