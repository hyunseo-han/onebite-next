import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 모든 페이지에 공통으로 적용되어야 하는 html, body 태그 내부의 요소들을 설정
