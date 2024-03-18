import { queryCreate, queryProcess } from "@/db/maria/mariadb";
import { mysqlQueryKey } from "@/react-query/constants";
import { uploadFileToS3 } from "@/db/s3/awsS3";
import { dateFormat } from "@/lib/utils/dayformat";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse
) {
  console.log('cardAlbumlist1')
  if (request.method === "GET") {
    const { pagenum, limit } = request.query;
    const client = await queryCreate();
    const pr = await queryProcess(
      mysqlQueryKey.getAlbumList,
      [limit, pagenum],
      client
    );
    res.status(200).json(pr);
  } else if (request.method === "POST") {
    const result1 = await request.body;
    const image: File | null = result1.get("image") as unknown as File;
    const title: string = result1.get("title") as string;
    const description: string = result1.get("description") as string;
    const generatedDate = dateFormat(new Date(Date.now()));
    let fileKey = "";
    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      fileKey = await uploadFileToS3(buffer, image.name, image.type);
    } else {
      fileKey = `default.jpg`;
    }
    let params: string[] = [title, fileKey, description, generatedDate];
    const client = await queryCreate();
    const pr = await queryProcess(mysqlQueryKey.insCardAlbum, params, client);
    res.status(200).json(pr);
  } else if (request.method === "PUT") {
    const result1 = await request.body//formData();
    const id: string = result1.get("id") as string;
    const image: File | null = result1.get("image") as unknown as File;
    const title: string = result1.get("title") as string;
    const description: string = result1.get("description") as string;
    const generatedDate = dateFormat(new Date(Date.now()));
    let fileKey = "";
    let updateQuery = mysqlQueryKey.updCardAlbum;
    let params: string[];
    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      fileKey = await uploadFileToS3(buffer, image.name, image.type);
      params = [title, fileKey, description, generatedDate, id];
    } else {
      updateQuery = mysqlQueryKey.updCardAlbumNoImage;
      params = [title, description, generatedDate, id];
    }
    const client = await queryCreate();
    const pr = await queryProcess(updateQuery, params, client);
    res.status(200).json(pr);
  } else if (request.method === "DELETE") {
    const id = await request.body.id;
    let params: string[] = [id];
    const client = await queryCreate();
    const pr = await queryProcess(mysqlQueryKey.delCardAlbum, params, client);
    res.status(200).json(pr);
  }
}
