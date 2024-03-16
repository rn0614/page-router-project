import React, { ReactNode } from "react";
import theme from "@/styles/theme";
import styled from "styled-components";
// prettier-ignore
const HeadingComponent = styled((props: HeadingProps) =>  React.createElement(`${props.variant}`, props))<HeadingProps>`
  font-size: ${(props) => theme.HeadingSize[props.variant || "h3"][0]};
  line-height: ${(props) => theme.HeadingSize[props.variant || "h3"][1]};
  color: var(${(props)=>props.color});
  padding: ${theme.spacing["xxs"]};
  text-overflow: ${(props)=>props.$isEllipsis?'ellipsis':undefined};
  white-space: ${(props)=>props.$isEllipsis?'nowrap':undefined};
  overflow: ${(props)=>props.$isEllipsis?'hidden':undefined};
  max-width: ${(props)=>props.$isEllipsis?'12rem':undefined};
`;

type HeadingProps = {
  variant: keyof typeof theme.HeadingSize;
  palette?: keyof typeof theme.font;
  color?: string;
  $isEllipsis?:boolean;
  children: ReactNode;
};

export default function Heading({ children, ...res }: HeadingProps) {
  return <HeadingComponent {...res}>{children}</HeadingComponent>;
}
