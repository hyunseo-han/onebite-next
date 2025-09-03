// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
// api 응답코드가 기초적으로 작성되어있음
// api/hello 경로로 요청이 들어오면 handler함수가 실행
// req: 요청에 대한 정보가 담긴 객체
// res: 응답을 보내는 역할을 하는 객체
