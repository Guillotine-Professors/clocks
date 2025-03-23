import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultNavBar from "@/lib/navbar";

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
        {children}
      </body>
    </html>
  );
}
