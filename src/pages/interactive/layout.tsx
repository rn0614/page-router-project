"use client";
import React from "react";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import InteractiveFooter from "@/components/molecular/footer/InteractiveFooter";

const StyledWraper = styled.main`
  display: grid;
  height: 100%;
  overflow-x: hidden;
  grid-template-rows: 5rem auto 5rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

const StyledFeed = styled.div`
  position: relative;
  grid-area: feed;
  margin: 0 auto;
`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledWraper>
        <MainHeader />
        <StyledFeed>{children}</StyledFeed>
        <InteractiveFooter />
      </StyledWraper>
    </>
  );
}
