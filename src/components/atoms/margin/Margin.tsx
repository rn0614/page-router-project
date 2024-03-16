import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";
import theme from "@/styles/theme";

const StyledMargin = styled.div<MarginProps>`
  width: ${(props) => (props.$widthfull ? "100%" : undefined)};
  ${(props) =>
    props.$side
      ? Array.isArray(props.$side)
        ? props.$side
            .map(($side) => `margin-${$side}: ${theme.spacing[props.$space]};`)
            .join("\n")
        : `margin-${props.$side}: ${theme.spacing[props.$space]};`
      : `margin: ${theme.spacing[props.$space]};`};
`;

type MarginProps ={
  $space: keyof typeof theme.spacing;
  $widthfull?: boolean;
  children?: ReactNode;
  $side?: string[] | string;
  color?: string;
} & ComponentPropsWithoutRef<"div">;

export default function Margin({ children, ...res }: MarginProps) {
  return <StyledMargin {...res}>{children}</StyledMargin>;
}
