import React from "react";
import styled from "styled-components";
import Margin from "../../atoms/margin/Margin";
const StyledPagination = styled(Margin)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .page-item {
    color: black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .side-btn {
    background-color: white;
    padding:0.2rem 0.5rem;
    &:disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #787878;
    }
  }

  .page-item.active {
    background-color: #4caf50;
    color: white;
  }

  .page-item:hover:not(.active) {
    background-color: #ddd;
  }

  .page-limit {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
`;
interface PagenationProps {
  curPage: number;
  limit: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  onLimitChange: any;
}

export default function Pagination({
  curPage = 1,
  limit = 8,
  totalPage,
  setPage,
  setLimit,
  onLimitChange,
}: PagenationProps) {
  let curFirstPage = (Math.ceil(curPage / limit) - 1) * limit + 1;
  let curLastPage = Math.min(Math.ceil(curPage / limit) * limit, totalPage);
  let currLPageList = new Array(curLastPage - curFirstPage + 1)
    .fill(0)
    .map((_: any, i: number) => {
      return curFirstPage + i;
    });

  return (
    <StyledPagination $space="xxs">
      <div
        className="page-item side-btn"
        onClick={() => curPage > 1? setPage(curPage - 1):null}
      >
        &laquo;
      </div>
      {currLPageList.map((page) => (
        <div
          className={`page-item ${curPage === page ? "active" : ""}`}
          key={page}
          onClick={() => setPage(page)}
        >
          {page}
        </div>
      ))}

      <div
        className="page-item side-btn"
        onClick={() => curPage !== totalPage?setPage(curPage + 1):null}
      >
        &raquo;
      </div>

      <select className="page-limit" onChange={onLimitChange}>
        <option value={8}>page</option>
        <option value={8}>8</option>
        <option value={16}>16</option>
        <option value={40}>40</option>
        <option value={100}>100</option>
      </select>
    </StyledPagination>
  );
}
