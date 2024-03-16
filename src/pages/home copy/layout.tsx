"use client";
import Margin from "@/components/atoms/margin/Margin";
import Mainfooter from "@/components/molecular/footer/MainFooter";
import MainHeader from "@/components/molecular/header/MainHeader";
import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  height: 100vh;
  grid-template-areas: "header" "feed" "footer";
  grid-template-rows: 5rem auto 5rem;
`;
const StyledFeed = styled(Margin)`
  grid-area: feed;
  position: relative;
`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <MainHeader />
      <StyledFeed $space='sm'>{children}</StyledFeed>
      <Mainfooter />
    </StyledMain>
  );
}
