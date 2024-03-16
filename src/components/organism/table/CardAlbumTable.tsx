import React from "react";
import Table from "../../molecular/table/Table";
import { useCardAlbum } from "@/hooks/useCardAlbum";
import { CardAlbum as CardAlbumType } from "@/types/types";

export default function CardAlbumTable() {
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: 1,
    limit: 10,
    pre: true,
  });
  return (
    <Table
      column={["id", "title", "description", "generatedDate"]}
      data={albums}
    />
  );
}
