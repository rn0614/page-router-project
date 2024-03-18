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
type InteractiveFooterProps={
  nexPage:number
}

export default function InteractiveFooter({nexPage}:InteractiveFooterProps) {
  return (
    <MainFooter>
      <NextButton currPage={nexPage}/>
    </MainFooter>
  );
}
