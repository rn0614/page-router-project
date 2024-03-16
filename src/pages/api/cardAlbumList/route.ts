import { queryCreate, queryProcess } from "@/db/maria/mariadb";
import { mysqlQueryKey } from "@/react-query/constants";
import { uploadFileToS3 } from "@/db/s3/awsS3";
import {  NextRequest } from "next/server";
import { dateFormat } from "@/lib/utils/dayformat";

export const GET = async (request: NextRequest) => {
  const limit = request.nextUrl.searchParams.get("limit");
  const pagenum = request.nextUrl.searchParams.get("pagenum");
  const client = await queryCreate();
  const pr = await queryProcess(
    mysqlQueryKey.getAlbumList,
    [limit, pagenum],
    client
  );
  return new Response(JSON.stringify(pr), { status: 200 });
};

export const POST = async (request: Request) => {
  const result1 = await request.formData();
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
  return new Response(JSON.stringify(pr), { status: 200 });
};

export const PUT = async (request: Request) => {
  const result1 = await request.formData();
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
  return new Response(JSON.stringify(pr), { status: 200 });
};

export const DELETE = async (request: Request) => {
  const id = await request.json();
  let params: string[] = [id];
  const client = await queryCreate();
  const pr = await queryProcess(mysqlQueryKey.delCardAlbum, params, client);
  return new Response(JSON.stringify(pr), { status: 200 });
};
