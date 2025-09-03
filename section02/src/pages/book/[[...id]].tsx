import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <h1>Book {id}</h1>;
}

/* 
이러한 가변적인 값들을 URL 파라미터라고 부르는데요 이렇게 URL 파라미터를 사용하는 동적 경로를 갖는 페이지를 생성하려면
먼저 book이라는 경로에 맞춰서 book폴더를 만들어 주신 다음에 해당 폴더 안에 [id].tsx 라는 이름으로 파일을 만들어 주시면 됩니다
우리 Next.js가 이 대괄호가 포함된 파일명을 보고
이 파일은 지금 슬래시 북에 슬래시 아이디라는 가변적인 값 즉 URL 파라미터를 갖는 동적 경로에 대응하는 그런 파일이구나
라고 인식을 해서 이 경로상의 아이디가 뭐 1번 값으로 들어오던 2번 값으로 들어오던 그게
아니면 뭐 100번 값으로 들어오던 즉 URL 파라미터의 값이 뭐가 되던 이 파일에 작성된
컴포넌트를 페이지로써 화면에 렌더링 시키도록 설정이 됩니다
*/

// ...id.tsx -> id 앞에 ...이 붙으면 여러 개의 파라미터를 배열 형태로 받을 수 있음
// catch all segments (모든 세그먼트를 잡아낸다)라고 부름

// index경로로 오면 404에러
// [[...id]].tsx로 바꾸면 index경로도 허용됨
// optional catch all segments (선택적인 모든 세그먼트를 잡아낸다)라고 부름
