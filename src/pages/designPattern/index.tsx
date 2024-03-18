import Heading from "@/components/atoms/heading/Heading";
import React from "react";
import { RatioResponsiveImage } from "@/components/atoms/imgae/RatioResponsiveImage";
import Template3 from "@/components/template/Template3";
import styled from "styled-components";
import MainHeader from "@/components/molecular/header/MainHeader";
import CrudFooter from "@/components/molecular/footer/CrudFooter";

import {
  ButtonEx,
  DesignInfo,
  IconButtonEx,
  LinkEx,
  TableEx,
  TooltipEx,
} from "@/components/organism/DesignEx/DesignEx";

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

export default function DesignPatternPage() {
  return (
    <StyledWraper>
      <MainHeader />
      <Template3>
        <DesignInfo />
        <Heading variant="h2" color="--sub1-color">
          1.Atomic Design
        </Heading>
        <ButtonEx />
        <LinkEx />
        <TooltipEx />
        <IconButtonEx />
        <TableEx />

        <Heading variant="h2" color="--sub1-color">
          2.CustomHook
        </Heading>
        <RatioResponsiveImage
          src="/images/customHook.PNG"
          height={943}
          width={139}
        />
      </Template3>
      <CrudFooter nextPage={2}/>
    </StyledWraper>
  );
}
