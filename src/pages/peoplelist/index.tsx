"use client";
import { InfinitePeople } from "../../components/molecular/people/InfinitePeople";
import { useEffect } from "react";
import NextButton from "@/components/atoms/button/NextButton";
import styled from "styled-components";
import Paragraph from "@/components/atoms/paragraph/Paragraph";
import Template3 from "@/components/template/Template3";
import Article from "@/components/molecular/article/Article";

const StyledFixed = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
`;

export default function PeoplePage() {
  return (
    <Template3>
      <Article headingVariant="h1" title="Infinite SWAPI" $isIndent={false}>
        <Paragraph>data by swapi.dev</Paragraph>
        <InfinitePeople />
        <StyledFixed>
          <NextButton currPage={1}/>
        </StyledFixed>
      </Article>
    </Template3>
  );
}
