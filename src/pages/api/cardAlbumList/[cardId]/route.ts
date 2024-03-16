import { queryCreate, queryProcess } from "@/db/maria/mariadb";
import { mysqlQueryKey } from "@/react-query/constants";
type Props = {
  params: {
    cardId: string;
  };
};
export const GET = async (request: Request, { params }: Props) => {
  const cardId = params.cardId;
  const client = await queryCreate();
  const pr = await queryProcess(
    mysqlQueryKey.getDetailCardAlbum,
    [ cardId ],
    client
  );
  return new Response(JSON.stringify(pr), { status: 200 });
};
