"use client";
import React from "react";
import styled from "styled-components";
import NextButton from "@/components/atoms/button/NextButton";

const MainFooter = styled.div`
  background-color: #d7d7d7;
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .button {
    background-color: var(--sub3-color);
    border-radius: 4px;
    padding: 2px;
    border: 2px solid black;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default function InteractiveFooter() {
  const currPage=1;
  return (
    <MainFooter>
      <NextButton currPage={1}/>
      {currPage === 1 ? <div>recoil로 현재 페이지 저장</div> : ""}
    </MainFooter>
  );
}
