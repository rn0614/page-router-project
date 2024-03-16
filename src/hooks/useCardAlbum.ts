import { useEffect } from "react";
import { UseMutateFunction, useMutation, useQuery } from "react-query";
import { queryClient } from "@/react-query/queryClient";
import { useQueryClient } from "react-query";
import { queryKeys } from "@/react-query/constants";
import { axiosFormInstance, axiosInstance } from "@/lib/axios/axiosInstance";
import { toast } from "react-toastify";
import { CardAlbum } from "@/types/types";

interface CardAlbumProps {
  pageNum: number;
  limit: number;
  pre?: boolean;
}
export async function getCardAlbumFetch(pageNum: number, limit: number) {
  const { data } = await axiosInstance.get(
    `/api/cardAlbumList?pagenum=${pageNum}&limit=${limit}`
  );
  return data;
}

export async function getDetailCardAlbumFetch(cardId:string) {
  const { data } = await axiosInstance.get(`/api/cardAlbumList/${cardId}`);
  return data;
}

export function useCardAlbum({ pageNum, limit, pre = false }: CardAlbumProps) {
  const { data: albums = [] } = useQuery(
    [queryKeys.getAlbumList, pageNum, limit],
    async () => getCardAlbumFetch(pageNum, limit)
  );

  //free fetch
  const queryClient = useQueryClient();
  useEffect(() => {
    if (pre) {
      const nextPage = pageNum + 1;
      queryClient.prefetchQuery([queryKeys.getAlbumList, nextPage, limit], () =>
        getCardAlbumFetch(nextPage, limit)
      );
    }
  }, [queryClient, pageNum, limit, pre]);

  return { albums };
}

export function DetailCardAlbum(cardId: string) {
  async function getCardAlbumFetch() {
    const { data } = await axiosInstance.get(`/api/cardAlbumList/${cardId}`);
    return data;
  }
  const { data: albums = [] } = useQuery([queryKeys.albumDetail], async () =>
    getCardAlbumFetch()
  );
  return { albums };
}

export function useInsCardAlbum(): UseMutateFunction<
  void,
  unknown,
  CardAlbum,
  unknown
> {
  async function setCardAlbumFetch(card: CardAlbum) {
    await axiosFormInstance.post("/api/cardAlbumList", {
      title: card.title,
      image: card.image[0],
      description: card.description,
    });
  }
  const { mutate } = useMutation(setCardAlbumFetch, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.getAlbumList]);
      toast.success("카드가 추가됐습니다.!");
    },
  });
  return mutate;
}

export function useUpdCardAlbum(): UseMutateFunction<
  void,
  unknown,
  CardAlbum,
  unknown
> {
  async function setCardAlbumFetch(card: CardAlbum) {
    await axiosFormInstance.put("/api/cardAlbumList", {
      id: card.id,
      title: card.title,
      image: card.image[0],
      description: card.description,
    });
  }
  const { mutate } = useMutation(setCardAlbumFetch, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.albumDetail]);
      toast.success("카드가 업데이트됐습니다.!");
    },
  });
  return mutate;
}

export function useDelCardAlbum(): UseMutateFunction<
  void,
  unknown,
  string,
  unknown
> {
  async function setCardAlbumFetch(id: string) {
    await axiosInstance.delete("/api/cardAlbumList", {
      data: {id:id},  // fetching으로 넘어가는 데이터 object
    });
  }
  const { mutate } = useMutation(setCardAlbumFetch, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAlbumList"]);
      toast.success("선택한 카드를 제거했습니다.!");
    },
  });
  return mutate;
}
