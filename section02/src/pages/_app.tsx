import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
    // router.replace("/test");
    // router.back();
  };

  // 마운트 되었을때 실행할 동작을 정의해야 함
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href="/">index</Link>
        &nbsp;
        <Link href="/search" prefetch={false}>
          search
        </Link>
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

// Link 컴포넌트를 써야 pre fetching(미리 로딩) 기능이 동작
// pre fetching(미리 로딩) -> 사용자가 링크를 클릭하기 전에 미리 해당 페이지의 자원을 불러와서 페이지 전환 속도를 빠르게 해줌
// next/link 컴포넌트는 이 기능을 자동으로 제공
// useRouter의 prefetch 메서드를 사용해서도 수동으로 미리 로딩 가능
