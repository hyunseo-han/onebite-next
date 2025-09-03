import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
// handler함수에서는 새로운 Date 객체를 생성하고
// res.json 메서드를 사용해서 현재 시간을 JSON 형식으로 응답
