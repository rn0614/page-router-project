import React from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: grid;
  padding: 16px;
  max-width: 1080px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "left right"
    "bottom bottom";
  @media screen and (max-width :${()=>theme.breakPoint["mobile"]}) {
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "left"
      "right"
      "bottom";
  }
`;
const LeftComponent = styled.div`
  grid-area: left;
`;

const RightComponent = styled.div`
  grid-area: right;
`;
const BottomComponent = styled.div`
  grid-area: bottom;
`;

interface Template1Props {
  left: React.FC;
  right: React.FC;
  bottom: React.FC;
}

export default function Template1({
  left: Left,
  right: Right,
  bottom: Bottom,
}: Template1Props) {
  return (
    <Container>
      <LeftComponent>
        <Left />
      </LeftComponent>
      <RightComponent>
        <Right />
      </RightComponent>
      <BottomComponent>
        <Bottom />
      </BottomComponent>
    </Container>
  );
}
