"use client";
import React from "react";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import Mainfooter from "@/components/molecular/footer/MainFooter";

const StyledWraper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-rows: 5rem auto 4rem;
  grid-template-areas:
    "header"
    "feed"
    "footer";
`;

const StyledFeed = styled.div`
  grid-template-areas: feed;
  position: relative;
`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledWraper>
        <MainHeader />
        <StyledFeed>{children}</StyledFeed>
        <Mainfooter />
      </StyledWraper>
    </>
  );
}
