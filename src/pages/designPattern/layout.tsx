"use client";
import React from "react";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import CrudFooter from "@/components/molecular/footer/CrudFooter";

const StyledWraper = styled.main`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-rows: 5rem auto 4rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledWraper>
        <MainHeader />
        {children}
        <CrudFooter />
      </StyledWraper>
    </>
  );
}
