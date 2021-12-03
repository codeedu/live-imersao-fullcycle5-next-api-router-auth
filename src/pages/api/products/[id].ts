import { NextApiResponse, NextApiRequest } from "next";

export default function productShow(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.status(200).json({ id });
}


