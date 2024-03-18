import { queryCreate, queryProcess } from "@/db/maria/mariadb";
import { mysqlQueryKey } from "@/react-query/constants";
import { uploadFileToS3 } from "@/db/s3/awsS3";
import { dateFormat } from "@/lib/utils/dayformat";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Next.js의 기본 바디 파서를 비활성화
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method);
  if (req.method === "POST") {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) res.status(500).json({ result: err });
      let fileKey = "default.jpg";
      files.avatarimage?.map(async (item) => {
        const buffer = fs.readFileSync(item.filepath);
        fileKey = await uploadFileToS3(
          buffer,
          item.originalFilename,
          item.mimetype
        );
        const title: string = fields.title![0];
        const description: string = fields.description![0];
        const generatedDate = dateFormat(new Date(Date.now()));
        let params: string[] = [title, fileKey, description, generatedDate];
        const client = await queryCreate();
        const pr = await queryProcess(
          mysqlQueryKey.insCardAlbum,
          params,
          client
        );
        res.status(200).json(pr);
      });
    });
  } else if (req.method === "PUT") {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) res.status(500).json({ result: err });
      const id: string = fields.id![0];
      const title: string = fields.title![0];
      const description: string = fields.description![0];
      const generatedDate = dateFormat(new Date(Date.now()));
      const image = files.avatarimage ? files.avatarimage[0] : null;
      let fileKey = "";
      let updateQuery = mysqlQueryKey.updCardAlbum;
      let params: string[];
      if (image) {
        const buffer = fs.readFileSync(image.filepath);
        fileKey = await uploadFileToS3(
          buffer,
          image.originalFilename,
          image.mimetype
        );
        params = [title, fileKey, description, generatedDate, id];
      } else {
        updateQuery = mysqlQueryKey.updCardAlbumNoImage;
        params = [title, description, generatedDate, id];
      }
      const client = await queryCreate();
      const pr = await queryProcess(updateQuery, params, client);
      res.status(200).json(pr);
    });
  }
}
