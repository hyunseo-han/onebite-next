import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
    // router.replace("/test");
    // router.back();
  };
  return (
    <>
      <header>
        <Link href="/">index</Link>
        &nbsp;
        <Link href="/search">search</Link>
        &nbsp;
        <Link href="/book/1">book/1</Link>
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
// 모든 페이지 역할을 하는 컴포넌트의 부모 컴포넌트
// 전체 페이지에 공통적으로 들어가는 레이아웃이나 상태 관리 등을 처리
// a태그는 매번 서버에서 새로고침이 일어나서 속도가 느리다
// 지금 클라이언트 사이드 렌더링 방식으로 페이지 전환 -> 굿
// 함수 내부에서도 페이지를 클라이언트 사이드 렌더링 방식으로 이동 가능
