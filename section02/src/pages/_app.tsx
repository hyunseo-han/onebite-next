import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>글로벌 헤더</header>
      <Component {...pageProps} />
    </>
  );
}
// 모든 페이지 역할을 하는 컴포넌트의 부모 컴포넌트
// 전체 페이지에 공통적으로 들어가는 레이아웃이나 상태 관리 등을 처리
