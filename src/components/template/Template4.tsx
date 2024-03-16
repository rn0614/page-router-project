import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledFullViewWrapper = styled.div`
  top: 0px;
  left: 0px;
  height: calc(100vh - 10rem);
  color: rgb(255, 255, 255);
  width: 100vw;
`;

type TemplateProps = {
  children: ReactNode;
};

export default function Template4({ children }: TemplateProps) {
  return <StyledFullViewWrapper>{children}</StyledFullViewWrapper>;
}
