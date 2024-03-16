import React, { ReactNode } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const StyledText = styled.p<TextProps>`
  display: block;
  font-size: ${(props) => theme.fontSize[props.size||'base']};
  color: ${(props) => props.color || "black"};
  padding: ${theme.spacing["xxxs"]};
  text-overflow: ${(props)=>props.$isEllipsis?'ellipsis':undefined};
  white-space: ${(props)=>props.$isEllipsis?'nowrap':undefined};
  overflow: ${(props)=>props.$isEllipsis?'hidden':undefined};
  max-width: ${(props)=>props.$isEllipsis?'12rem':undefined};
`;

interface TextProps {
  children: ReactNode;
  size?: keyof typeof theme.fontSize;
  color?: string;
  $isEllipsis?:boolean;
}

export default function Text({ children, ...res }: TextProps) {
  return <StyledText {...res}>{children}</StyledText>;
}
