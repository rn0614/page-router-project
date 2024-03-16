import React, { ComponentPropsWithRef, ReactNode } from "react";
import styled from "styled-components";
import Heading from "../atoms/heading/Heading";
import theme from "@/styles/theme";

const StyledGridTemplate = styled.div<StyledGridProps>`
  display: flex;
  align-items: ${(props) => props.$alignItem || "flex-start"};
  justify-content: ${(props) => props.$alignItem || "flex-start"};
  flex-wrap: wrap;
  gap: ${(props)=>props.$gap};
  @media screen and (max-width :${() => theme.breakPoint["mobile"]}) {
    flex-direction: column;
  }
`;

type StyledGridProps = {
  $alignItem?: string;
  $gap?:string;
};

type RowListTemplate = {
  heading: string;
  children?: ReactNode;
} & StyledGridProps;

export default function RowListTemplate({
  heading,
  children,
  $alignItem,
  $gap
}: RowListTemplate) {
  return (
    <>
      <Heading variant="h3">{heading}</Heading>
      <StyledGridTemplate $alignItem={$alignItem} $gap={$gap}>
        {children}
      </StyledGridTemplate>
    </>
  );
}
