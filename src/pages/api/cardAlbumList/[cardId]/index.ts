import { queryCreate, queryProcess } from "@/db/maria/mariadb";
import { mysqlQueryKey } from "@/react-query/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("cardId",req.query.cardId);
  const cardId = req.query.cardId;
  const client = await queryCreate();
  const pr = await queryProcess(
    mysqlQueryKey.getDetailCardAlbum,
    [cardId],
    client
  );
  res.status(200).json(pr[0])
}
