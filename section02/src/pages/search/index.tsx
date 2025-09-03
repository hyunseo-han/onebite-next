import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter(); // 변수 안에 router객체 저장
  console.log(router); // router객체 확인
  //   const q = router.query.q; // 쿼리스트링 중 q에 해당하는 값 추출
  const { q } = router.query; // 비구조화 할당 문법으로 쿼리스트링 중 q에 해당하는 값 추출
  return <h1>Search {q}</h1>;
}

// 쿼리스트링을 쓴다고 해서 폴더 구조를 변경하거나 파일명을 변경하지 않음
// 쿼리스트링은 주소창에서 직접 입력하거나 링크로 이동할 때 사용
// 쿼리스트링을 사용하는 페이지는 일반적인 페이지와 동일하게 취급
