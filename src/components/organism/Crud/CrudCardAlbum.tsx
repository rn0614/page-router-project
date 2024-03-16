import React, { useState } from "react";
import styled from "styled-components";
import { useCardAlbum } from "@/hooks/useCardAlbum";
import { CardAlbum as CardAlbumType } from "@/types/types";
import CardAlbum from "@/components/molecular/card/CardAlbum";
import Pagination from "../../molecular/pagination/Pagination";
// prettier-ignore
const CrudAlbumWrapper = styled.article`
  .card-list {
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: ${({ theme }) => theme.breakPoint["mobile"]}) {
      grid-template-columns: repeat(1, 1fr);
    }
    padding-bottom: ${({ theme }) => theme.spacing["xxs"]};
  }
`;
export default function CrudCardAlbum() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const LimitChangeHandler = (e: any) => {
    setLimit(+e.target.value);
    setPage(1);
  };
  const { albums }: { albums: Array<CardAlbumType> } = useCardAlbum({
    pageNum: page,
    limit: limit,
    pre: true,
  });
  return (
    <CrudAlbumWrapper>
      <div className="card-list">
        {albums!.map((card, idx) => (
          <CardAlbum
            id={card.id}
            title={card.title}
            image={card.image}
            generatedDate={card.generatedDate}
            description={card.description}
            key={idx}
          />
        ))}
      </div>
      <Pagination
        curPage={page}
        limit={5}
        totalPage={albums[0] ? albums[0].totalcnt : 0}
        setPage={setPage}
        setLimit={setLimit}
        onLimitChange={LimitChangeHandler}
      />
    </CrudAlbumWrapper>
  );
}
