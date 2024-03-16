import React, { ReactNode } from "react";
import theme from "@/styles/theme";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)<LinkProps>`
  font-size: ${(props) => (props.variant ? theme.LinkSize[props.variant][0] : "50px")};
  line-height: ${(props) => (props.variant ? theme.LinkSize[props.variant][1] : "normal")};
  color: black;
`;

interface LinkProps {
  variant?: keyof typeof theme.LinkSize;
  color?: string;
  href: string;
  children: ReactNode;
}

export default function LinkComp({ children, href, ...res }: LinkProps) {
  return (
    <StyledLink href={href} {...res}>
      {children}
    </StyledLink>
  );
}

export function FullWidthLinkComp({ children, href, ...res }: LinkProps) {
  return (
    <StyledLink href={href} {...res}>
      {children}
    </StyledLink>
  );
}