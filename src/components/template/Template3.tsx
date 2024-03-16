import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledGridTemplate = styled.div<StyledGridProps>`
  padding: ${({ theme }) => theme.spacing["xxs"]};
  width: 100%;
  .inner-width-template {
    width: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
  }
`;

type StyledGridProps = {
  $alignItem?: string;
  $gap?: string;
};

type RowListTemplate = {
  children?: ReactNode;
} & StyledGridProps;

export default function Template3({
  children,
  $alignItem,
  $gap,
}: RowListTemplate) {
  return (
    <StyledGridTemplate $alignItem={$alignItem} $gap={$gap}>
      <div className="inner-width-template">{children}</div>
    </StyledGridTemplate>
  );
}
