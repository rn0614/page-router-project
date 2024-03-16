import React, { ReactNode } from 'react'
import styled from 'styled-components';
import theme from "@/styles/theme";

// prettier-ignore
const StyledList = styled((props: ListProps) =>  React.createElement(`${props.variant}`, props))<ListProps>`
  font-size: ${(props) => theme.fontSize[props.size||'sm']};
  line-height: ${(props) => theme.fontSize[props.size || "sm"]};
  margin: 1rem 0;
  padding-left: 1.6rem;
`;

interface ListProps{
  variant:'ol'|'ul';
  size?:keyof typeof theme.fontSize;
  children:ReactNode;
}

export default function List({children, ...res}:ListProps) {
  return (
    <StyledList {...res}>{children}</StyledList>
  )
}
